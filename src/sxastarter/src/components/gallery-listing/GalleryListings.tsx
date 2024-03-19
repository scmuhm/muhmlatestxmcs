import {
  withDatasourceCheck,
  Image,
  ImageField,
  ComponentRendering,
  RouteData,
  LinkField,
  Field,
  Link,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { DefaultVariant as TitleBlock, TitleBlockProps } from '@components/TitleBlock';
import { ButtonLessVariant as ButtonLessTitleBlock } from '@components/TitleBlock';
export type GalleryListingsProps = ComponentProps &
  TitleBlockProps & {
    rendering: ComponentRendering | RouteData;
    fields: {
      primaryImage: ImageField;
      secondaryImage: ImageField;
      galleryList: GalleryListItem[];
      bottomCTA: LinkField;
    };
  };
export type GalleryListItem = {
  fields: {
    name: Field<string>;
    link: LinkField;
  };
};
const DefaultVariant = (props: GalleryListingsProps): JSX.Element => {
  const hideCTA = props?.params?.styles?.includes('hide-cta');
  const withoutBottomCta = props?.params?.styles?.includes('bottom-cta');
  const galleryRight = props?.params?.styles?.includes('gallery-right');
  return (
    <section className="pm-gallery-listing">
      <div className="gallery-titleblock">
        {!hideCTA ? (
          <TitleBlock rendering={props.rendering} params={props.params} fields={props.fields} />
        ) : (
          <ButtonLessTitleBlock {...props} />
        )}
      </div>
      <div className={`wrapper-content-${galleryRight ? 'gal-right' : 'gal-left'}`}>
        <div className="list-card">
          <ul>
            {props?.fields?.galleryList?.map((item, key) => (
              <li key={key}>
                <Link className="button " data-variant="tertiary" field={item?.fields?.link} />
              </li>
            ))}
          </ul>
        </div>
        <div className="image-parent">
          <div className="blue-bg"></div>
          <div className="secondary">
            <Image field={props?.fields?.secondaryImage} className="background-image" />
          </div>
          <div className="primary">
            <Image field={props?.fields?.primaryImage} className="foreground-image" />
          </div>
        </div>
      </div>
      <div className="bottomcta">
        {props?.fields?.bottomCTA && !withoutBottomCta && (
          <div className="bottom-button">
            <Link className="button " data-variant="tertiary" field={props?.fields?.bottomCTA} />
          </div>
        )}
      </div>
    </section>
  );
};
export const Default = withDatasourceCheck()<GalleryListingsProps>(DefaultVariant);

const TopImageVariant = (props: GalleryListingsProps): JSX.Element => {
  const hideCTA = props?.params?.styles?.includes('hide-cta');
  const withoutBottomCta = props?.params?.styles?.includes('bottom-cta');
  return (
    <section className="pm-gallery-listing-top-image">
      <div className="topwrapper">
        {!hideCTA ? (
          <TitleBlock rendering={props.rendering} params={props.params} fields={props.fields} />
        ) : (
          <ButtonLessTitleBlock {...props} />
        )}
        <div className="primary">
          <Image field={props?.fields?.primaryImage} className="foreground-image" />
        </div>
      </div>
      <div className="gal-list">
        <ul>
          {props?.fields?.galleryList?.map((item, key) => (
            <li key={key}>
              <Link
                className="button "
                data-variant="tertiary"
                field={item?.fields?.link}
                line-clamp="1"
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="bottomcta">
        {props?.fields?.bottomCTA && !withoutBottomCta && (
          <div className="bottom-button">
            <Link className="button " data-variant="tertiary" field={props?.fields?.bottomCTA} />
          </div>
        )}
      </div>
    </section>
  );
};
export const TopImage = withDatasourceCheck()<GalleryListingsProps>(TopImageVariant);

const SingleImageVariant = (props: GalleryListingsProps): JSX.Element => {
  const withoutBottomCta = props?.params?.styles?.includes('bottom-cta');
  return (
    <section className="pm-gallery-listing-singleimg">
      <Image field={props?.fields?.primaryImage} className="foreground-image" />
      <ButtonLessTitleBlock {...props} />
      <div className="si-wrapper">
        <ul>
          {props?.fields?.galleryList?.map((item, key) => (
            <li key={key}>
              <Link
                className="button "
                data-variant="tertiary"
                field={item?.fields?.link}
                line-clamp="1"
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="bottomcta">
        {props?.fields?.bottomCTA && !withoutBottomCta && (
          <div className="bottom-button">
            <Link className="button " data-variant="tertiary" field={props?.fields?.bottomCTA} />
          </div>
        )}
      </div>
    </section>
  );
};
export const SingleImage = withDatasourceCheck()<GalleryListingsProps>(SingleImageVariant);
