import {
  RouteData,
  ComponentRendering,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { Banner } from '@components/banners/BannerBase';
import { ButtonsRight as TitleBlock } from '@components/TitleBlock';
import SubscribeForm from '@components/helpers/SubscribeForm';

export type BannerCTAFooterProps = ComponentProps &
  Banner & {
    rendering: ComponentRendering | RouteData;
  };

const DefaultVariant = (props: BannerCTAFooterProps): JSX.Element => {
  console.log(props);
  const theme = props?.params?.styles.includes('theme-light') ? 'theme-light' : 'theme-dark';
  return (
    <section className={`pm-banner banner-cta-footer ${theme} ${props?.params?.styles}`}>
      <div className="pm-center">
        <TitleBlock
          {...props}
          primaryCTAVariant="primary"
          secondaryCTAVariant="secondary"
        ></TitleBlock>
      </div>
    </section>
  );
};
export const Default = withDatasourceCheck()<BannerCTAFooterProps>(DefaultVariant);

const MinimalVariant = (props: BannerCTAFooterProps): JSX.Element => {
  return (
    <section className={`pm-banner banner-cta-footer`} data-variant="minimal">
      <div className="pm-center">
        <TitleBlock {...props} primaryCTAVariant="tertiary"></TitleBlock>
      </div>
    </section>
  );
};
export const Minimal = withDatasourceCheck()<BannerCTAFooterProps>(MinimalVariant);

const SubscribeVariant = (props: BannerCTAFooterProps): JSX.Element => {
  delete props.fields.primaryCTA;
  delete props.fields.secondaryCTA;
  return (
    <section className={`pm-banner banner-cta-footer`} data-variant="subscribe">
      <div className="pm-center">
        <TitleBlock {...props}></TitleBlock>
        <SubscribeForm
          {...props}
          fields={{ label: { value: 'Your email address' } }}
        ></SubscribeForm>
      </div>
    </section>
  );
};
export const Subscribe = withDatasourceCheck()<BannerCTAFooterProps>(SubscribeVariant);

/*
  const HeroUnderlineVariant = (props: BannerCTAFooterProps): JSX.Element => {
    return (
      <section className={`pm-hero hero-underline ${props?.params?.styles}`}>
        <div className="pm-center">
          <TitleBlock {...props}></TitleBlock>
        </div>
      </section>
    );
  };
  export const HeroUnderline = withDatasourceCheck()<BannerCTAFooterProps>(HeroUnderlineVariant);
  */
