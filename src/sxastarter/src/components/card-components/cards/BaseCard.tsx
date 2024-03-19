import { ImageField, LinkField, Item } from '@sitecore-jss/sitecore-jss-nextjs';

export type BaseCard = Item & {
  fields: {
    image: ImageField;
    CTA: LinkField;
  };
};
