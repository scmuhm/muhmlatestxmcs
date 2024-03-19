import { Text, Field, Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { CAccordionItem, CAccordionHeader, CAccordionBody } from '@coreui/react';

export type AccordionSmallFlexibleItemProps = ComponentProps & {
  itemKey: number;
  fields: {
    heading: Field<string>;
  };
};

export const AccordionSmallFlexibleItem = (props: AccordionSmallFlexibleItemProps): JSX.Element => {
  return (
    <CAccordionItem itemKey={props?.itemKey}>
      <CAccordionHeader>
        <Text field={props?.fields?.heading} />
      </CAccordionHeader>
      <CAccordionBody>
        <Placeholder
          key={props?.itemKey}
          name={`pm-accordion-body-${props?.itemKey + 1}`}
          rendering={props?.rendering}
        />
      </CAccordionBody>
    </CAccordionItem>
  );
};
