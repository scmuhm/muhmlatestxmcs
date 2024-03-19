import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

export interface SliderFields {
  hTag?: Field<string>;
  title: Field<string>;
  subtitle: Field<string>;
  cardCount: number;
}
