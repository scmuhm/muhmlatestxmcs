import {
  Text,
  Field,
  RouteData,
  ComponentRendering,
  RichText,
  LinkField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { BaseBanner } from '@components/banner/BaseBanner';
import { CustomLink } from '@components/CustomLink';

export type BannerCTAFooterProps = ComponentProps &
  BaseBanner & {
    rendering: ComponentRendering | RouteData;
    fields: {
      secondaryCTA: LinkField;
      emailLabel: Field<string>;
      emailPlaceholder: Field<string>;
    };
  };

/* eslint-disable */
export const Default = (props: BannerCTAFooterProps): JSX.Element => {
  return (
    <section className={`pm-banner ${props?.params?.styles}`}>
      <div>
        <div className="copy-container flow --flow-m">
          <h1 className="heading">
            <Text field={props?.fields?.title} className="" />
          </h1>
          <RichText field={props?.fields?.description} />
        </div>
        <div className="cta-container">
          <CustomLink CTA={props?.fields?.primaryCTA} dataVariant="primary" />
        </div>
      </div>
    </section>
  );
};

export const BannerTwoCTA = (props: BannerCTAFooterProps): JSX.Element => {
  return (
    <section className={`pm-banner banner-two-cta ${props?.params?.styles}`}>
      <div className="copy-container flow --flow-m">
        <hgroup>
          <Text field={props?.fields?.title} className="heading" tag="h2" />
        </hgroup>
        <RichText field={props?.fields?.description} tag="p" />
      </div>
      <div className="cta-container pm-button-stack">
        <CustomLink CTA={props?.fields?.primaryCTA} dataVariant="primary" />
        <CustomLink CTA={props?.fields?.secondaryCTA} dataVariant="secondary" />
      </div>
    </section>
  );
};

export const BannerCTAText = (props: BannerCTAFooterProps): JSX.Element => (
  <section className={`pm-banner footer-cta-banner ${props?.params?.styles}`}>
    <div>
      <div className="copy-container flow --flow-m">
        <h1 className="heading">
          <Text field={props?.fields?.title} className="" />
        </h1>
        <RichText field={props?.fields?.description} />
      </div>
      <div className="cta-container">
        <form className="pm-form flow --flow-m" action="/subscribe" method="post">
          <label htmlFor="email">
            <Text field={props?.fields?.emailLabel} />
          </label>
          <div className="single-input-with-button">
            <input
              type="email"
              id="email"
              name="email"
              aria-required="true"
              placeholder="Enter your email"
              required
            />
            <button type="submit" className="button no-icon" data-variant="primary">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
);
