import { Field, Item } from '@sitecore-jss/sitecore-jss-nextjs';

export type BulletTextProps = Item & {
  fields: {
    text: Field<string>;
    subText?: Field<string>;
  };
};

export default BulletTextProps;
