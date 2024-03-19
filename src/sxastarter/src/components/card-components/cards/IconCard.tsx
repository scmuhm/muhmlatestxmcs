import { ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { Card } from '@components/card-components/cards/Card';

export type IconCardProps = Card & {
  fields: {
    icon: ImageField;
  };
};
