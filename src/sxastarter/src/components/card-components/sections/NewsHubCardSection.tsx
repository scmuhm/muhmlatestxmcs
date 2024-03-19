import {
  Text,
  Field,
  RichText,
  RichTextField,
  withDatasourceCheck,
  Placeholder,
  ComponentRendering,
  RouteData,
  LinkField,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { createElement } from 'react';
import { ComponentProps } from '@lib/component-props';
import { CustomLink } from '@components/CustomLink';

type NewsHubCardSectionProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    copy: RichTextField;
    hTag: Field<string>;
    CTA: LinkField;
  };
  rendering: ComponentRendering | RouteData;
};

// A higher-order component to wrap children with a given tag
const withTag = (Tag: string) => {
  const DynamicComponent = ({ children }: { children?: React.ReactNode }) =>
    createElement(Tag, null, children);
  DynamicComponent.displayName = `WithTag(${Tag})`;

  return DynamicComponent;
};

const NewsHubCardSection = (props: NewsHubCardSectionProps): JSX.Element => {
  const HeadingTag = props.fields.hTag?.value || 'h2';
  const { sitecoreContext } = useSitecoreContext();

  const DynamicHeading = withTag(HeadingTag);
  return (
    <section className={`${props?.params?.styles} flow --flow-m`}>
      {sitecoreContext?.pageEditing ? (
        <DynamicHeading>
          <Text field={props.fields.heading} />
        </DynamicHeading>
      ) : props?.fields?.heading?.value ? (
        <DynamicHeading>
          <Text field={props.fields.heading} />
        </DynamicHeading>
      ) : (
        <></>
      )}

      {sitecoreContext?.pageEditing ? (
        <RichText field={props.fields.copy} />
      ) : props?.fields?.copy?.value ? (
        <p>
          <RichText field={props.fields.copy} />
        </p>
      ) : (
        <></>
      )}
      <Placeholder name="card-collection-placeholder" rendering={props.rendering}></Placeholder>
      <div className="ctaContainer">
        <CustomLink CTA={props?.fields?.CTA} className="cardCTA" />
      </div>
    </section>
  );
};

export default withDatasourceCheck()<NewsHubCardSectionProps>(NewsHubCardSection);
