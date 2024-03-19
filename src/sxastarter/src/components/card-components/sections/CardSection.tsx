import {
  Text,
  RichText,
  RouteData,
  ComponentRendering,
  Placeholder,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { CardSectionFields } from '@components/card-components/cards/CardSectionFields';
import { CustomLink } from '@components/CustomLink';
import { useContext } from 'react';
import { PageContext } from '@src/pages/[[...path]]';

export type CardSectionProps = ComponentProps & {
  placeholder: string;
  rendering: ComponentRendering | RouteData;
  fields: CardSectionFields;
};

export const CardSection = (props: CardSectionProps): JSX.Element => {
  const setCardCount = useContext(PageContext);
  const { sitecoreContext } = useSitecoreContext();
  const HeadingTag = props.fields.hTag?.value || 'h2';
  props.fields.cardCount =
    props?.fields?.cardCount == 0 || props?.fields?.cardCount == null
      ? setCardCount?.cardCount
      : props?.fields?.cardCount;
  const showSection = !sitecoreContext?.pageEditing && props?.fields?.cardCount <= 0 ? false : true;
  return (
    <section className={`${props?.params?.styles} card-section flow --flow-m`}>
      {showSection ? (
        <Text
          id={props?.fields?.jumpTag && props?.fields?.jumpTag[0]?.fields?.jumptagText?.value}
          field={props.fields.heading}
          tag={HeadingTag}
        />
      ) : (
        <></>
      )}
      {showSection ? <RichText field={props.fields.description} /> : <></>}
      <Placeholder name={props?.placeholder} rendering={props.rendering}></Placeholder>
      <div className="pm-button-stack">
        <CustomLink CTA={props?.fields?.CTA} dataVariant="" className="button variant-tertiary" />
      </div>
    </section>
  );
};
