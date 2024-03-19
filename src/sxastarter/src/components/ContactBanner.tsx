import { Text, Field, RichText, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
type ContactBannerProps = ComponentProps & {
  fields: {
    title: Field<string>;
    description: RichTextField;
  };
};

export const Default = (props: ContactBannerProps): JSX.Element => {
  return (
    <section className={`pm-contact-banner ${props?.params?.styles}`}>
      <h2 line-clamp="2">
        <Text field={props.fields.title} />
      </h2>
      <RichText field={props.fields.description} className="description" />
    </section>
  );
};
