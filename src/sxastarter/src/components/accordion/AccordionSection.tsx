import { CustomLink } from 'components/CustomLink';
import { HorizontalJumpTagLink } from 'components/navigation/HorizontalJumpTagLink';
import { ComponentProps } from 'lib/component-props';
import { Default as TitleBlock } from 'components/TitleBlock';
import { Field, LinkField, Placeholder, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';

export type AccordionSectionProps = ComponentProps & {
  placeholderName: string;
  fields: {
    title: Field<string>;
    description: RichTextField;
    CTA: LinkField;
    jumpTag: HorizontalJumpTagLink[];
  };
};

export const AccordionSection = (props: AccordionSectionProps): JSX.Element => {
  const hideTitle = props?.params?.styles?.includes('hide-title');
  const hideDescription = props?.params?.styles?.includes('hide-description');
  const hideLink = props?.params?.styles?.includes('hide-link');
  return (
    <article
      className="pm-accordion"
      id={props?.fields?.jumpTag && props?.fields?.jumpTag[0]?.fields?.jumptagText?.value}
    >
      <TitleBlock {...props} hideTitle={hideTitle} hideDescription={hideDescription}></TitleBlock>
      <Placeholder
        name={props?.placeholderName}
        params={props?.params}
        rendering={props.rendering}
      />
      {!hideLink ? (
        <CustomLink className="button" CTA={props?.fields?.CTA} dataVariant="tertiary" />
      ) : (
        <></>
      )}
    </article>
  );
};
