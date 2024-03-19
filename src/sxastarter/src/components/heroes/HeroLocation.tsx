import { Field, Link, LinkField, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import { ButtonsRight as TitleBlock, TitleBlockProps } from '@components/TitleBlock';

import { BannerAlertSecondary, BannerAlertProps } from '@components/banner/BannerAlert';

import { Default as Image, ImageProps } from '@components/Image';

import Map from '@components/maps/Maps';

export type HeroLocationProps = ImageProps &
  TitleBlockProps &
  BannerAlertProps & {
    fields: {
      LinkCTA1: LinkField;
      LinkCTA2: LinkField;
      LinkCTA3: LinkField;
      BannerAlert: Field<string>;
      LocationImage: Field<string>;
      LocationMap: Field<string>;
      Links: Field<string>;
      MapApiKey: Field<string>;
    };
  };

const shouldHideField = (styles: string, nameOfHiddenField: string): ' display-none' | '' =>
  styles !== undefined && styles.indexOf(nameOfHiddenField) > -1 ? ' display-none' : '';

const HeroLocation = (props: HeroLocationProps): JSX.Element => {
  const hideBannerAlert = props?.params?.styles.includes('hide-BannerAlert');
  const hideImage = props?.params?.styles.includes('hide-Image');
  const hideMap = props?.params?.styles.includes('hide-Map');
  const hideLinks = props?.params?.styles.includes('hide-Links');

  return (
    <section className="hero-location">
      <TitleBlock /*secondaryCTAVariant="secondary"*/ {...props} />

      {props?.fields?.BannerAlert && !hideBannerAlert && (
        <BannerAlertSecondary
          params={props.params}
          rendering={props.rendering}
          fields={props.fields}
        />
      )}

      <div className="location-image-map">
        {props?.fields?.LocationImage && !hideImage && (
          <div className="location-image">
            <Image params={props.params} fields={props.fields}></Image>
          </div>
        )}

        {props?.fields?.LocationMap && !hideMap && (
          <div className="location-map">
            <Map
              params={props.params}
              rendering={props.rendering}
              fields={{ apiKey: props.fields.MapApiKey }}
            />
          </div>
        )}
      </div>

      {props?.fields?.Links && !hideLinks && (
        <div className={`location-info ${shouldHideField(props?.params?.styles, 'hide-Links')}`}>
          <Link
            className="button external-link"
            data-variant="tertiary"
            field={props?.fields?.LinkCTA1}
          />
          <Link className="button " data-variant="tertiary" field={props?.fields?.LinkCTA2} />
          <Link
            className="button hours"
            data-icon-before="calendar"
            data-variant="tertiary"
            field={props?.fields?.LinkCTA3}
          />
        </div>
      )}
    </section>
  );
};

export default withDatasourceCheck()<HeroLocationProps>(HeroLocation);
