import { Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

export type TextOrganismBase = {
  fields: {
    title: Field<string>;
    subheading: Field<string>;
    CTA?: LinkField;
  };
};
