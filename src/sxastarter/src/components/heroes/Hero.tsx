import { Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
export type Hero = {
  fields: {
    title: Field<string>;
    description: Field<string>;
    primaryCTA?: LinkField;
  };
};
