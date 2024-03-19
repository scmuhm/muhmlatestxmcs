import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { Card } from '@components/card-components/cards/Card';

export type HorizontalCard = Card & {
  fields: {
    leftImage: Field<boolean>;
  };
};
