import {
  Text,
  RichText,
  RichTextField,
  Field,
  ComponentRendering,
  RouteData,
  LinkField,
  withDatasourceCheck,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { CustomLink } from '@components/CustomLink';
import { HorizontalJumpTagLink } from '@components/navigation/HorizontalJumpTagLink';

export type TitleBlockProps = ComponentProps & {
  rendering: ComponentRendering | RouteData;
  fields: {
    title?: Field<string>;
    subheading?: Field<string>;
    description?: RichTextField;
    primaryCTA?: LinkField;
    secondaryCTA?: LinkField;
    hTag?: Field<string>;
    jumpTag?: HorizontalJumpTagLink[];
  };
  primaryCTAVariant?: string;
  secondaryCTAVariant?: string;
  hideTitle?: boolean;
  hideSubheading?: boolean;
  hideDescription?: boolean;
};

export const DefaultVariant = (props: TitleBlockProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const pageEditing = sitecoreContext?.pageEditing;

  return (
    <div className={`pm-title-block`}>
      <div className="text-content">
        <hgroup>
          {!props.hideTitle && (
            <Text
              field={props.fields.title}
              tag={props.fields.hTag?.value || 'h1'}
              className="pm-title"
            />
          )}
          <div
            id={props?.fields?.jumpTag && props?.fields?.jumpTag[0]?.fields?.jumptagText?.value}
            className="goto-link"
          ></div>
          <Text field={props?.fields?.subheading} tag="p" />
        </hgroup>
        {!props.hideDescription && (
          <RichText field={props.fields.description} tag="p" className="pm-description" />
        )}
      </div>
      {(pageEditing || props.fields.primaryCTA || props.fields.secondaryCTA) && (
        <div className="pm-button-stack">
          {((pageEditing && props.fields.primaryCTA) ||
            (props.fields.primaryCTA && props.fields.primaryCTA.value.href !== '')) && (
            <CustomLink
              CTA={props.fields.primaryCTA}
              className={`button ${props.fields.primaryCTA?.value.class}`}
              dataVariant={props.primaryCTAVariant ? props.primaryCTAVariant : ''}
            />
          )}
          {((pageEditing && props.fields.secondaryCTA) ||
            (props.fields.secondaryCTA && props.fields.secondaryCTA.value.href !== '')) && (
            <CustomLink
              CTA={props.fields.secondaryCTA}
              className={`button ${props.fields.secondaryCTA?.value.class}`}
              dataVariant={props.secondaryCTAVariant ? props.secondaryCTAVariant : 'secondary'}
            />
          )}
        </div>
      )}
    </div>
  );
};

export const Default = withDatasourceCheck()<TitleBlockProps>(DefaultVariant);

const ButtonsRightVariant = (props: TitleBlockProps): JSX.Element => {
  console.log('TITLE BLOCK');
  console.log(props);
  const { sitecoreContext } = useSitecoreContext();
  const pageEditing = sitecoreContext?.pageEditing;
  return (
    <div className={`pm-title-block`} data-variant="buttons-right">
      <div className="text-content">
        <hgroup>
          <Text field={props.fields.title} tag={props.fields.hTag?.value || 'h1'} />
          <Text field={props?.fields?.subheading} tag="p" />
        </hgroup>
        {!props.hideDescription && <Text field={props.fields.description} tag="p" />}
      </div>
      {(pageEditing || props.fields.primaryCTA || props.fields.secondaryCTA) && (
        <div className="pm-button-stack">
          {((pageEditing && props.fields.primaryCTA) ||
            (props.fields.primaryCTA && props.fields.primaryCTA.value.href !== '')) && (
            <CustomLink
              CTA={props.fields.primaryCTA}
              className={`button ${props.fields.primaryCTA?.value.class}`}
              dataVariant={props.primaryCTAVariant ? props.primaryCTAVariant : ''}
            />
          )}
          {((pageEditing && props.fields.secondaryCTA) ||
            (props.fields.secondaryCTA && props.fields.secondaryCTA.value.href !== '')) && (
            <CustomLink
              CTA={props.fields.secondaryCTA}
              className={`button ${props.fields.secondaryCTA?.value.class}`}
              dataVariant={props.secondaryCTAVariant ? props.secondaryCTAVariant : 'secondary'}
            />
          )}
        </div>
      )}
    </div>
  );
};
export const ButtonLessVariant = (props: TitleBlockProps): JSX.Element => {
  return (
    <div className={`pm-title-block`}>
      <div className="text-content">
        <hgroup>
          {!props.hideTitle && (
            <Text
              field={props.fields.title}
              tag={props.fields.hTag?.value || 'h1'}
              className="pm-title"
            />
          )}
          <Text field={props?.fields?.subheading} tag="p" />
        </hgroup>
        {!props.hideDescription && (
          <RichText field={props.fields.description} tag="p" className="pm-description" />
        )}
      </div>
    </div>
  );
};
export const ButtonsRight = withDatasourceCheck()<TitleBlockProps>(ButtonsRightVariant);
