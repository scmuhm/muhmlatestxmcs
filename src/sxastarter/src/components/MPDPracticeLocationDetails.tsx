import React from 'react';
import {
  Text,
  Field,
  Image,
  ImageField,
  GetStaticComponentProps,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { queryProviderImage } from '@services/sitecore-service';
import { IPracticeLocationAddressDetails } from '@interfaces/IPracticeLocationAddressDetails';
import { getPracticeLocationAddressDetails } from '@services/practiceLocation-service';

type PracticeLocationDetailsProps = ComponentProps & {
  props: IPracticeLocationAddressDetails;
  fields: {
    image: ImageField;
    address: Field<string>;
    hours: Field<string>;
    practiceLocationID: Field<number>;
  };
};

const MPDPracticeLocationDetails = (props: PracticeLocationDetailsProps): JSX.Element => (
  <div>
    <p>MPD Practice Location Details Component</p>
    <Image field={props?.fields?.image} />
    <h3>{props?.props?.practiceLocationName}</h3>
    <div>
      <Text field={props?.fields?.address} />: {props?.props?.streetAddress}
      <br />
      {props?.props?.address1}
      <br />
      {props?.props?.address2}
      <br />
      {props?.props?.city}
      <br />
      {props?.props?.state}
      <br />
      {props?.props?.zip}
    </div>
    <div>
      <Text field={props?.fields?.hours} />
      {props?.props?.sundayHours !== null && props?.props?.sundayHours?.length > 0 ? (
        <div>
          <span>Sunday: {props?.props?.sundayHours}</span>
        </div>
      ) : (
        <span></span>
      )}
      {props?.props?.mondayHours !== null && props?.props?.mondayHours?.length > 0 ? (
        <div>
          <span>Monday: {props?.props?.mondayHours}</span>
        </div>
      ) : (
        <span></span>
      )}
      {props?.props?.tuesdayHours !== null && props?.props?.tuesdayHours?.length > 0 ? (
        <div>
          <span>Tuesday: {props?.props?.tuesdayHours}</span>
        </div>
      ) : (
        <span></span>
      )}
      {props?.props?.wednesdayHours !== null && props?.props?.wednesdayHours?.length > 0 ? (
        <div>
          <span>Wednesday: {props?.props?.wednesdayHours}</span>
        </div>
      ) : (
        <span></span>
      )}
      {props?.props?.thursdayHours !== null && props?.props?.thursdayHours?.length > 0 ? (
        <div>
          <span>Thursday: {props?.props?.thursdayHours}</span>
        </div>
      ) : (
        <span></span>
      )}
      {props?.props?.fridayHours !== null && props?.props?.fridayHours?.length > 0 ? (
        <div>
          <span>Friday: {props?.props?.fridayHours}</span>
        </div>
      ) : (
        <span></span>
      )}
      {props?.props?.saturdayHours !== null && props?.props?.saturdayHours?.length > 0 ? (
        <div>
          <span>Saturday: {props?.props?.saturdayHours}</span>
        </div>
      ) : (
        <span></span>
      )}
    </div>
  </div>
);

export const getStaticProps: GetStaticComponentProps = async (_rendering, layoutData, context) => {
  const practiceAddressId = Number(context?.params?.requestPath as string);
  try {
    const props = await getPracticeLocationAddressDetails(practiceAddressId);
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

export default MPDPracticeLocationDetails;
