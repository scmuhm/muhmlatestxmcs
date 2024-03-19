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
  return (
    <div>
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
            {props?.props?.salutation} {props?.props?.displayName}
          </h1>
          <h4>
            <Text field={props?.fields?.code} />: {props?.props?.providerId}
          </h4>
          <div>
            <Text field={props?.fields?.gender} />: {props?.props?.gender}
          </div>
          <div>
            <Text field={props?.fields?.address} />: {props?.props?.address1}
            <br />
            {props?.props?.address2}
          </div>
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
        </div>
        <Text field={props?.fields?.expertise} tag="h1" />
        <Text field={props?.fields?.boardCertification} tag="h2" />
        {props?.props?.boardCertifications !== null &&
        props?.props?.boardCertifications?.length > 0 ? (
          <div>
            <ul>
              {props?.props?.boardCertifications?.map((item, key) => (
                <li key={key} style={{ ['list-style-type' as string]: 'disc' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <span></span>
        )}
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
