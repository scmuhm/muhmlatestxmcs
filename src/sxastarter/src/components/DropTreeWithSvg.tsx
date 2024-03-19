import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

export type DropTreeWithSvg = {
  name: string;
  fields: { Value: Field<string>; svgtext: Field<string> };
};
