import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { AccordionSection, AccordionSectionProps } from 'components/accordion/AccordionSection';

export type AccordionSmallSectionProps = AccordionSectionProps & ComponentProps;

const AccordionSmallSection = (props: AccordionSmallSectionProps): JSX.Element => {
  const placeholderName = `pm-small-accord-placeholder`;
  return (
    <AccordionSection
      rendering={props?.rendering}
      params={props?.params}
      fields={props?.fields}
      placeholderName={placeholderName}
    />
  );
};

export default withDatasourceCheck()<AccordionSmallSectionProps>(AccordionSmallSection);
