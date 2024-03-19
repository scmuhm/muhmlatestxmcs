import { Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { HorizontalJumpTagLink } from '@components/navigation/HorizontalJumpTagLink';

export interface CardSectionFields {
  heading: Field<string>;
  description: Field<string>;
  hTag: Field<string>;
  CTA: LinkField;
  jumpTag?: HorizontalJumpTagLink[];
  cardCount?: number;
}
