import { Text, Field, Item } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { CAccordionItem, CAccordionHeader, CAccordionBody } from '@coreui/react';
import TagList from '@components/helpers/TagList';

export type AccordionBigItemProps = ComponentProps & {
  itemKey: number;
  fields: {
    heading: Field<string>;
    tagList: Item[];
  };
  editMode?: string;
};

export const AccordionBigItem = (props: AccordionBigItemProps): JSX.Element => {
  return (
    <CAccordionItem className={props.editMode} itemKey={props?.itemKey}>
      <CAccordionHeader>
        {props?.fields?.tagList?.length} <Text field={props?.fields?.heading} />
      </CAccordionHeader>
      <CAccordionBody className="expand">
        <TagList
          rendering={props?.rendering}
          params={props?.params}
          tagList={props?.fields?.tagList}
          maxLength={props?.fields?.tagList?.length}
        />
      </CAccordionBody>
    </CAccordionItem>
  );
};
