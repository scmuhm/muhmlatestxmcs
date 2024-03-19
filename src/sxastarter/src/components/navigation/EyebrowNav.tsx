import { LinkField, Link, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';

export type EyebrowNavProps = ComponentProps & {
  fields: {
    phone: LinkField;
    secondarytext: LinkField;
  };
};

export const EyebrowNav = (props: EyebrowNavProps): JSX.Element => {
  return (
    <div id="eyebrow-nav" className="theme-dark">
      <div className="pm-center">
        <Link
          field={props?.fields?.phone}
          className={`small ${props?.fields?.phone?.value?.class}`}
        />
        <Link
          field={props?.fields?.secondarytext}
          className={`button variant-patient-login ${props?.fields?.secondarytext?.value?.class}`}
        />
      </div>
    </div>
  );
};

export default withDatasourceCheck()<EyebrowNavProps>(EyebrowNav);
