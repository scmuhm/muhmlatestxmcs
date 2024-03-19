import { LinkField, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
type LinkList = { fields: { variant: Field<string> } };

export type ButtonProps = ComponentProps & {
  fields: {
    link: LinkField;
    variant: LinkList;
  };
};
