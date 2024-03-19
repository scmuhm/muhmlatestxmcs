import { Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
export type Banner = {
  fields: {
    title: Field<string>;
    hTag: Field<string>;
    description?: Field<string>;
    primaryCTA?: LinkField;
    secondaryCTA?: LinkField;
  };
};
