import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';

export type QuotationTextProps = ComponentProps & {
  fields: {
    quote: Field<string>;
    byline?: Field<string>;
  };
};

const shouldHideField = (styles: string, nameOfHiddenField: string): ' display-none' | '' =>
  styles !== undefined && styles.indexOf(nameOfHiddenField) > -1 ? ' display-none' : '';

export const QuotationText = (props: QuotationTextProps): JSX.Element => {
  return (
    <figure className="pm-text-quotation">
      <blockquote>
        <p className="quote">
          <Text field={props?.fields?.quote} />
        </p>
      </blockquote>
      <figcaption className={`author${shouldHideField(props?.params?.styles, 'hide-byline')}`}>
        <Text field={props?.fields?.byline} />
      </figcaption>
    </figure>
  );
};
export default withDatasourceCheck()<QuotationTextProps>(QuotationText);
