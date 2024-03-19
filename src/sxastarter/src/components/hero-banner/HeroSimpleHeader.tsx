import {
  Text,
  ImageField,
  RouteData,
  ComponentRendering,
  RichText,
  LinkField,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { HeroBase } from '@components/hero-banner/HeroBase';
import { GetPageMetaDataFields } from '@components/GetPageMetaDataFields';
import { CustomLink } from '@components/CustomLink';

export type HeroUnderlineProps = ComponentProps &
  HeroBase & {
    rendering: ComponentRendering | RouteData;
    fields: {
      backgroundImage: ImageField;
      CTA2: LinkField;
    };
  };

export type HeroSimpleHeaderProps = ComponentProps &
  HeroBase & {
    rendering: ComponentRendering | RouteData;
    fields: {
      backgroundImage: ImageField;
    };
  };

const DefaultVariant = (props: HeroSimpleHeaderProps): JSX.Element => {
  const pageFields = GetPageMetaDataFields();
  return (
    <section className={`pm-hero hero-simple col-12 ${props.params.styles}`}>
      <div className="title-and-button">
        <hgroup className="title">
          <h1>
            <Text field={pageFields.title} />
          </h1>
        </hgroup>
        <div className="pm-button-stack">
          <CustomLink CTA={props?.fields?.CTA} dataVariant="primary" />
        </div>
      </div>
      <RichText className="description" field={pageFields.description} />
    </section>
  );
};
export const Default = withDatasourceCheck()<HeroSimpleHeaderProps>(DefaultVariant);

const HeroUnderlineVariant = (props: HeroUnderlineProps): JSX.Element => {
  const pageFields = GetPageMetaDataFields();
  return (
    <section
      className={`${props?.params?.styles} hero-underline hero-underline-background pm-hero col-12`}
      style={{
        backgroundImage: 'url(' + props?.fields?.backgroundImage?.value?.src + ')',
      }}
    >
      <div className="copy-container flow --flow-m">
        <h1 className="heading">
          <Text field={pageFields.title} className="" />
        </h1>
        <RichText field={pageFields.description} />
      </div>
      <div className="cta-container pm-button-stack">
        <CustomLink CTA={props?.fields?.CTA} dataVariant="primary" />
        <CustomLink CTA={props?.fields?.CTA2} dataVariant="secondary" />
      </div>
    </section>
  );
};
export const HeroUnderline = withDatasourceCheck()<HeroUnderlineProps>(HeroUnderlineVariant);
