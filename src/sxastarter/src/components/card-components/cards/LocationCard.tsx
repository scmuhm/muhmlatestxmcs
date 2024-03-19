import { Field, ImageField, Item } from '@sitecore-jss/sitecore-jss-nextjs';
import { Card } from '@components/card-components/cards/Card';

export type LocationCard = Card & {
  fields: {
    streetAddress: Field<string>;
    city: Field<string>;
    state: Field<string>;
    zipCode: Field<string>;
    phoneNumber: Field<string>;
    serviceIconOne: ImageField;
    serviceLabelOne: Field<string>;
    serviceIconTwo: ImageField;
    serviceLabelTwo: Field<string>;
    serviceIconThree: ImageField;
    serviceLabelThree: Field<string>;
    symptomsTitleLabel: Field<string>;
    symptomOneLabel: Field<string>;
    symptomTwoLabel: Field<string>;
    symptomThreeLabel: Field<string>;
    serviceList: Item[];
  };
};
