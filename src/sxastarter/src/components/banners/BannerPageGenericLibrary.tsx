import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import {
  BannerGeneric,
  BannerGenericLargeImage,
  BannerGenericProps,
} from '@components/banners/BannerGeneric';
import { ComponentProps } from '@lib/component-props';

export type BannerPageGenericLibraryProps = ComponentProps & {
  fields: {
    items: BannerGenericProps;
  };
};

export const BannerLibraryGenericDefault = (props: BannerPageGenericLibraryProps): JSX.Element => {
  console.log('Props:' + JSON.stringify(props));
  return props?.fields?.items !== null ? (
    <BannerGeneric
      variant="banner-background-large"
      fields={props?.fields?.items?.fields}
      params={props?.params}
      rendering={props?.rendering}
    />
  ) : (
    <span className="pm-button-stack">
      <a href="#" className="button" data-variant="secondary">
        Please choose a data source from the Library
      </a>
    </span>
  );
};
export const Default = withDatasourceCheck()<BannerPageGenericLibraryProps>(
  BannerLibraryGenericDefault
);

const BannerLibraryGenericLargeImageVariant = (
  props: BannerPageGenericLibraryProps
): JSX.Element => {
  return (
    <BannerGenericLargeImage
      variant="banner-image-left"
      fields={props?.fields?.items?.fields}
      params={props?.params}
      rendering={props?.rendering}
    />
  );
};
export const BannerLibraryGenLargeImage = withDatasourceCheck()<BannerPageGenericLibraryProps>(
  BannerLibraryGenericLargeImageVariant
);
