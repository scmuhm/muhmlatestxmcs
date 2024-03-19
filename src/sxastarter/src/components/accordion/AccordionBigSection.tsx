import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { AccordionSection, AccordionSectionProps } from '@components/accordion/AccordionSection';
type AccordionBigSectionProps = ComponentProps & AccordionSectionProps;

const AccordionBigSection = (props: AccordionBigSectionProps): JSX.Element => {
  const placeholderName = `pm-big-accord-placeholder`;
  return (
    <AccordionSection
      rendering={props?.rendering}
      params={props?.params}
      fields={props?.fields}
      placeholderName={placeholderName}
    />
  );
};

export default withDatasourceCheck()<AccordionBigSectionProps>(AccordionBigSection);
