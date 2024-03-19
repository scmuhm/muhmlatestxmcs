import {
  Text,
  Field,
  Image,
  ImageField,
  withDatasourceCheck,
  LinkField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { CustomLink } from '@components/CustomLink';

export type BannerGenericProps = ComponentProps & {
  variant: string;
  fields: {
    title?: Field<string>;
    description?: Field<string>;
    image: ImageField;
    cta: LinkField;
  };
};

const BannerGenericImageLeftVariant = (props: BannerGenericProps): JSX.Element => {
  return (
    <BannerGeneric
      variant="banner-background-large"
      fields={props?.fields}
      params={props?.params}
      rendering={props?.rendering}
    />
  );
};
export const Default = withDatasourceCheck()<BannerGenericProps>(BannerGenericImageLeftVariant);

const BannerGenericLargeImageVariant = (props: BannerGenericProps): JSX.Element => {
  return (
    <BannerGeneric
      variant="banner-image-left"
      fields={props?.fields}
      params={props?.params}
      rendering={props?.rendering}
    />
  );
};
export const BannerGenericLargeImage = withDatasourceCheck()<BannerGenericProps>(
  BannerGenericLargeImageVariant
);

export const BannerGeneric = (props: BannerGenericProps): JSX.Element => {
  return (
    <section className={`pm-banner banner-generic ${props.variant}`}>
      <Image field={props?.fields?.image} alt={props?.fields?.image?.value?.src} />
      <div className="text-content">
        <div className="title-and-description">
          <hgroup className="title">
            <h1>
              <Text field={props?.fields?.title} />
            </h1>
          </hgroup>
          {props?.fields?.description ? (
            <Text field={props?.fields?.description} tag="p" className="description" />
          ) : (
            ''
          )}
        </div>
        <div className="pm-button-stack">
          {props?.params?.styles?.indexOf('hide-cta') == -1 ? (
            <CustomLink
              CTA={props?.fields?.cta}
              dataVariant="tertiary"
              className={`button ${props?.fields?.cta.value.class}`}
            />
          ) : (
            ''
          )}
        </div>
      </div>
    </section>
  );
};
