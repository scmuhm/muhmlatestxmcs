import { useSitecoreContext, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { CAccordion } from '@coreui/react';
import {
  AccordionSmallItemProps,
  AccordionSmallItem,
} from 'components/accordion/AccordionSmallItem';

type AccordionSmallProps = ComponentProps & {
  fields: {
    items: AccordionSmallItemProps[];
  };
};

const AccordionSmall = (props: AccordionSmallProps): JSX.Element => {
  console.log(props);
  const vars = {
    '--cui-accordion-color:': 'var(--color-palette-white)',
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
      <CAccordion className={editMode} flush alwaysOpen style={{ vars } as React.CSSProperties}>
        {props?.fields?.items?.map((item, key) => (
          <AccordionSmallItem
            key={key}
            itemKey={key}
            fields={item?.fields}
            rendering={props?.rendering}
            params={props?.params}
          />
        ))}
      </CAccordion>
    </article>
  );
};

export default withDatasourceCheck()<AccordionSmallProps>(AccordionSmall);
