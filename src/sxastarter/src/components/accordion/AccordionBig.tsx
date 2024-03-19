import { useSitecoreContext, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { CAccordion } from '@coreui/react';
import { AccordionBigItemProps, AccordionBigItem } from '@components/accordion/AccordionBigItem';

type AccordionBigProps = ComponentProps & {
  fields: {
    items: AccordionBigItemProps[];
  };
};

const AccordionBig = (props: AccordionBigProps): JSX.Element => {
  console.log(props);
  const vars = {
    '--cui-accordion-btn-color:': 'unset',
    '--cui-accordion-bg': 'unset',
    '--cui-accordion-active-bg': 'unset',
    '--cui-accordion-btn-focus-border-color': 'var(--color-palette-sky-blue)',
    '--cui-accordion-btn-focus-box-shadow': '0 0 0 0.25rem var(--color-palette-sky-blue)',
    '--cui-accordion-active-color': 'var(--color-palette-dark-blue)',
  };
  const { sitecoreContext } = useSitecoreContext();
  const editMode = sitecoreContext.pageEditing ? 'experience-editor' : '';
  return (
    <article className="pm-accordion">
      <CAccordion flush alwaysOpen style={{ vars } as React.CSSProperties}>
        {props?.fields?.items?.map((item, key) => (
          <AccordionBigItem
            key={key}
            itemKey={key}
            fields={item?.fields}
            rendering={props?.rendering}
            params={props?.params}
            editMode={editMode}
          />
        ))}
      </CAccordion>
    </article>
  );
};

export default withDatasourceCheck()<AccordionBigProps>(AccordionBig);
