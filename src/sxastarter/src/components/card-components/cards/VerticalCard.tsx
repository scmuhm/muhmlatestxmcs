import { ImageField, Field, Image } from '@sitecore-jss/sitecore-jss-nextjs';
import { Card } from '@components/card-components/cards/Card';
import Tags from '@components/Tags';
import { CustomLink } from '@components/CustomLink';
import { ComponentProps } from '@lib/component-props';
import AuthorDateField from '@components/AuthorDateField';

export type VerticalCardProps = ComponentProps &
  Card & {
    fields: {
      author: Field<string>;
      date: Field<string>;
      icon: ImageField;
    };
  };

export const VerticalCard = (props: VerticalCardProps): JSX.Element => {
  return (
    <article className="pm-card vertical-card">
      <span className="icon">
        <Image field={props?.fields?.icon} />
      </span>
      <Image field={props?.fields?.image} />

      <Tags fields={props?.fields} />
      <div className="text-content">
        <hgroup>
          <h1>{props.fields.shortTitle.value}</h1>
        </hgroup>
        <p>{props.fields.description.value}</p>
      </div>
      <div className="pm-button-stack">
        <CustomLink CTA={props?.fields?.CTA} className="button" dataVariant="tertiary" />
      </div>
      <AuthorDateField params={props.params} rendering={props.rendering} fields={props.fields} />
    </article>
  );
};
