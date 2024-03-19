import { IProviderDetails } from '@interfaces/IProviderDetails';
import React from 'react';
import {
  Text,
  Field,
  Image,
  ImageField,
  GetStaticComponentProps,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { queryProviderImage } from '@services/sitecore-service';
import { getProviderDetails } from '@services/provider-service';
import styles from '@styles/blocks/provider.module.css';
import getProviderSpecialty from '@helpers/getProviderSpecialty';

type ProviderDetailsProps = ComponentProps & {
  props: IProviderDetails;
  fields: {
    code: Field<string>;
    gender: Field<string>;
    address: Field<string>;
    file: Field<string>;
    photo: ImageField;
    requestAppointment: Field<string>;
    expertise: Field<string>;
    boardCertification: Field<string>;
  };
};

const MPDProviderDetails = (props: ProviderDetailsProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const imageSrc = props?.props?.data?.item?.url?.url;
  const photo = props?.fields?.photo;

  const displayName = props?.props?.displayName;
  const specialtyText = getProviderSpecialty(props?.props?.academicSpecialties);
  const pronounText = props?.props?.pronouns;

  // info modal icon
  const providerType = props?.props?.providerType;
  // info modal icon - show via Sitecore item setting (Show Info Modal)
  // ratings summary
  // primary location
  const pplId = props?.props?.primaryPracticeLocationID;
  const primaryPLArray =
    props?.props?.practiceLocations?.filter((x) => x.practiceLocationAddressDetailID === pplId) ??
    [];

  // If we cannot identify the primary practice location for this provider,
  // we need to print this thing out with the limited data that we have -- HFL 20231113
  if (0 === primaryPLArray.length) {
    console.log('\n------------------------------------\n');
    console.log('could not identify primary practice location for this provider\n');
    console.log(props.props);
    console.log('ProviderID: ' + props?.props?.providerId + '\n');
    console.log('\n------------------------------------\n');
  }
  const primaryPL = primaryPLArray[0];

  // additional locations
  // additional locations - accordian
  // show all additional locations via Sitecore item setting (Locations Expanded)
  // CTA schedule a visit
  // CTA phone number - click to call
  // CTA - View profile button
  // Calendar / Patient time slots
  // Hide calendar / time slots  via Sitecore item setting

  // Penn Medicine Provider tagging, when appropriate
  const providerDescText = props?.props?.affiliationGroupProviderProfileLabel;

  return (
    <div>
      {props?.props?.isPenn ? (
        <span className="pm-tag" data-logo="penn-shield">
          {providerDescText}
        </span>
      ) : (
        ''
      )}
      <div className={styles?.providerContainer}>
        <div className={`${styles?.photoImageLeft} ${props?.params?.styles}`}>
          {sitecoreContext?.pageEditing ? (
            <Image field={photo} className={styles.profilepic} />
          ) : (
            <img src={imageSrc} className={styles.profilepic} alt="" />
          )}
        </div>
        <div>
          <h1>
            {props?.props?.salutation} {displayName}
          </h1>
          {/* Testing HTML comment 1, 2, 3... */}
          <span title={providerType}>i</span>

          <h4>
            <Text field={props?.fields?.code} />: {props?.props?.providerId}
          </h4>
          <div>
            <Text field={props?.fields?.gender} />: {props?.props?.gender}
          </div>
          <div>Pronoun : {pronounText}</div>
          <div>
            <Text field={props?.fields?.address} />: {props?.props?.address1}
            <br />
            {props?.props?.address2}
          </div>
          <span>{specialtyText}</span>
          <a href={props?.props?.pdfUrl} target="_blank">
            <Text field={props?.fields?.file} />
          </a>
          <p>
            <button className={styles?.requestAptBtn}>
              <Text field={props?.fields?.requestAppointment} />
            </button>
          </p>
        </div>
      </div>
      <div style={{ ['margin-top' as string]: '100px', ['width' as string]: '100%' }}>
        <div
          style={{
            ['background-color' as string]: '#e5e4db',
            ['padding' as string]: '10px',
            ['margin-bottom' as string]: '10px',
          }}
        >
          <span style={{ ['width' as string]: '50%', ['display' as string]: 'inline-block' }}>
            Expertise
          </span>
          <span style={{ ['width' as string]: '50%', ['display' as string]: 'inline-block' }}>
            Locations
          </span>

          {primaryPL && primaryPLArray.length > 0 ? (
            <address className="description flow">
              <span>
                {primaryPL.address1 ? primaryPL.address1 : primaryPL.practiceLocationName}
              </span>
              <a href={primaryPL.directionsLinks}>
                <span>
                  {primaryPL.streetAddress +
                    (primaryPL.address2 ? ' (' + primaryPL.address2 + ')' : '')}
                  <br />
                  {primaryPL.city + ', ' + primaryPL.state + ' ' + primaryPL.zip}
                </span>
              </a>
              <a href={'tel:' + primaryPL.phoneDisplay.replace(/-/g, '')}>
                {primaryPL.phoneDisplay}
              </a>
            </address>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticComponentProps = async (_rendering, layoutData, context) => {
  const seoName = context?.params?.requestPath as string;
  try {
    const props = await getProviderDetails(seoName);
    const imageUrl = props?.imageUrl === null ? 'blank' : props?.imageUrl;
    const data = await queryProviderImage(imageUrl);
    props.data = data;
    return {
      context: layoutData?.sitecore?.route,
      props: props,
    };
  } catch (error) {
    return {
      context: layoutData?.sitecore?.route,
      props: null,
    };
  }
};

export default MPDProviderDetails;
