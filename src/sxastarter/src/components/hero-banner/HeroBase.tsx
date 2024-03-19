import { RichTextField, Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
export type HeroBase = {
  fields: {
    title: Field<string>;
    description: RichTextField;
    CTA: LinkField;
  };
};
