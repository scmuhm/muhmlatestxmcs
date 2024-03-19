import { Field, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';
import { BaseCard } from '@components/card-components/cards/BaseCard';

export type Card = BaseCard & {
  fields: {
    shortTitle: Field<string>;
    description: RichTextField;
    tag?: Field<string>;
    url?: Field<string>;
  };
};
