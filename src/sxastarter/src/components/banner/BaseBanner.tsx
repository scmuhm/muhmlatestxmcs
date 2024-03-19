import { RichTextField, Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
export type BaseBanner = {
  fields: {
    title: Field<string>;
    description: RichTextField;
    primaryCTA: LinkField;
  };
};
