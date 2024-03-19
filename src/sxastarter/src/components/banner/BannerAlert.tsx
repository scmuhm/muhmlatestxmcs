import {
  Text,
  Field,
  RouteData,
  ComponentRendering,
  withDatasourceCheck,
  Link,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { BaseBanner } from '@components/banner/BaseBanner';

export type BannerAlertProps = ComponentProps &
  BaseBanner & {
    rendering: ComponentRendering | RouteData;
    fields: {
      Body: Field<string>;
    };
  };

const PrimaryVariant = (props: BannerAlertProps): JSX.Element => (
  <section className={`pm-alert ${props?.params?.styles}`} data-variant="primary">
    <Text field={props?.fields?.Body} tag="p" className="" />
    <div className="pm-button-stack">
      <Link
        className="button variant-tertiary"
        data-type="tertiary"
        field={props?.fields?.primaryCTA}
      />
    </div>
  </section>
);

export const BannerAlertPrimary = withDatasourceCheck()<BannerAlertProps>(PrimaryVariant);

const SecondaryVariant = (props: BannerAlertProps): JSX.Element => (
  <section className={`pm-alert ${props?.params?.styles}`} data-variant="secondary">
    <Text field={props?.fields?.Body} tag="p" className="" />
    <div className="pm-button-stack">
      <Link
        className="button variant-tertiary"
        data-type="tertiary"
        field={props?.fields?.primaryCTA}
      />
    </div>
  </section>
);

export const BannerAlertSecondary = withDatasourceCheck()<BannerAlertProps>(SecondaryVariant);

const GreenVariant = (props: BannerAlertProps): JSX.Element => (
  <section className={`pm-alert ${props?.params?.styles}`} data-variant="green">
    <Text field={props?.fields?.Body} tag="p" className="" />
    <div className="pm-button-stack">
      <Link
        className="button variant-tertiary"
        data-type="tertiary"
        field={props?.fields?.primaryCTA}
      />
    </div>
  </section>
);

export const BannerAlertGreen = withDatasourceCheck()<BannerAlertProps>(GreenVariant);
