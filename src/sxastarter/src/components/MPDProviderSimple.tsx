import { IProviderDetails } from '@interfaces/IProviderDetails';
import React from 'react';
import {
  Field,
  Image,
  ImageField,
  GetStaticComponentProps,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { queryProviderImage } from '@services/sitecore-service';
import { getProviderDetails } from '@services/provider-service';
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

const MPDProviderSimple = (props: ProviderDetailsProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();

  // If there's nothing returned for the provider profile, then we really have nothing to return in this component. -- HFL 20231113
  if (props.props == null) {
    return <div />;
  }

  const debugMessages = false;
  const imageSrc = props?.props?.data?.item?.url?.url;
  const photo = props?.fields?.photo;
  const pplId = props?.props?.primaryPracticeLocationID;
  const displayName = props?.props?.displayName;

  const primaryPLArray =
    props?.props?.practiceLocations?.filter((x) => x.practiceLocationAddressDetailID === pplId) ??
    [];

  // If we cannot identify the primary practice location for this provider,
  // we need to print this thing out with the limited data that we have -- HFL 20231113
  if (0 === primaryPLArray?.length) {
    console.log('\n------------------------------------\n');
    console.log('could not identify primary practice location for this provider\n');
    console.log(props.props);
    console.log('ProviderID: ' + props?.props?.providerId + '\n');
    console.log('\n------------------------------------\n');
  }
  const primaryPL = primaryPLArray[0];

  if (debugMessages) {
    console.log('\n------------------------------------\n');
    console.log(pplId);
    console.log(props);
    console.log('\n------------------------------------\n');
  }

  const provPhone = props?.props?.providerPhone;
  const provPhoneURL = 'tel:' + provPhone?.replace(/-/g, '');
  const provPhotoAltTag = 'Photograph of ' + props?.props?.aboutName;
  const specialtyText = getProviderSpecialty(props?.props?.academicSpecialties);
  const providerDescText = props?.props?.affiliationGroupProviderProfileLabel;

  return (
    <>
      <article className="pm-card pm-provider-card">
        {props?.props?.isPenn ? (
          <span className="pm-tag" data-logo="penn-shield">
            {providerDescText}
          </span>
        ) : (
          ''
        )}
        <span className="title">Provider Information</span>
        <div className="content-container">
          <div className="image-container">
            {sitecoreContext?.pageEditing ? (
              <Image field={photo} />
            ) : (
              <img src={imageSrc} alt={provPhotoAltTag} />
            )}
          </div>
          <header className="flow">
            <span className="description">{specialtyText}</span>
            <span className="title">{displayName}</span>
          </header>
          {primaryPL && primaryPLArray?.length > 0 ? (
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
              <a href={provPhoneURL}>{provPhone}</a>
            </address>
          ) : (
            ''
          )}
        </div>
      </article>
    </>
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
    console.error('ERROR GETTING STATIC PROPS');
    return {
      context: layoutData?.sitecore?.route,
      props: null,
    };
  }
};

export default MPDProviderSimple;
