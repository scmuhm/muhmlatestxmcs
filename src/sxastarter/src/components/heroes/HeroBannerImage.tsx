import {
  ImageField,
  Image,
  LinkField,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { Hero } from '@components/heroes/Hero';
import { Default as TitleBlock } from '@components/TitleBlock';

export type HeroBannerImageProps = ComponentProps &
  Hero & {
    fields: {
      image: ImageField;
      primaryCTA: LinkField;
      secondaryCTA: LinkField;
    };
  };

const DefaultVariant = (props: HeroBannerImageProps): JSX.Element => {
  return (
    <section className={`pm-hero ${props?.params?.styles}`}>
      <div className="pm-center">
        <TitleBlock
          {...props}
          primaryCTAVariant="primary"
          secondaryCTAVariant="secondary"
        ></TitleBlock>
      </div>
      <picture>
        <Image field={props.fields?.image} />
      </picture>
    </section>
  );
};

export const Default = withDatasourceCheck()<HeroBannerImageProps>(DefaultVariant);

const ShieldVariant = (props: HeroBannerImageProps): JSX.Element => {
  return (
    <section className={`pm-hero hero-shield ${props?.params?.styles}`}>
      <div className="pm-center">
        <TitleBlock
          {...props}
          primaryCTAVariant="primary"
          secondaryCTAVariant="secondary"
        ></TitleBlock>
      </div>
      <picture>
        <Image field={props.fields?.image} />
      </picture>
      <div className="bg-squares-pattern"></div>
    </section>
  );
};

export const Shield = withDatasourceCheck()<HeroBannerImageProps>(ShieldVariant);

const FindADocVariant = (props: HeroBannerImageProps): JSX.Element => {
  return (
    <section className={`pm-hero hero-fad ${props?.params?.styles}`}>
      <div className="pm-center">
        <TitleBlock {...props}></TitleBlock>
      </div>
      <picture>
        <Image field={props.fields?.image} />
      </picture>
    </section>
  );
};

export const FindADoc = withDatasourceCheck()<HeroBannerImageProps>(FindADocVariant);
