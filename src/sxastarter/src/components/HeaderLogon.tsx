import { Field, LinkField, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { CustomLink } from '@components/CustomLink';
import { ComponentProps } from '@lib/component-props';

type EyebrowNavProps = ComponentProps & {
  fields: {
    primarytext: Field<string>;
    secondarytext: LinkField;
  };
};

export const EyebrowNav = (props: EyebrowNavProps): JSX.Element => {
  return (
    <div id="eyebrow-nav" className="theme-dark">
      <div className="pm-center">
        <a href="tel:8007897366" className="button small" data-variant="tertiary">
          800-789-7366
        </a>
        <CustomLink
          CTA={props?.fields?.secondarytext}
          className={`button variant-patient-login ${props?.fields?.secondarytext?.value?.class}`}
        />
      </div>
    </div>
  );
};

export default withDatasourceCheck()<EyebrowNavProps>(EyebrowNav);
