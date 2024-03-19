import { Text, Field, RichTextField, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { CAccordionItem, CAccordionHeader, CAccordionBody } from '@coreui/react';

export type AccordionSmallItemProps = ComponentProps & {
  itemKey: number;
  fields: {
    heading: Field<string>;
    body: RichTextField;
  };
};

export const AccordionSmallItem = (props: AccordionSmallItemProps): JSX.Element => {
  return (
    <CAccordionItem itemKey={props?.itemKey}>
      <CAccordionHeader>
        <Text field={props?.fields?.heading} />
      </CAccordionHeader>
      <CAccordionBody>
        <RichText field={props?.fields?.body} />
      </CAccordionBody>
    </CAccordionItem>
  );
};
