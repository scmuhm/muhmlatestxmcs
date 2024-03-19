import { ImageField, Image, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';

export type HeaderProps = ComponentProps & {
  fields: {
    logo: ImageField;
  };
};

const Header = (props: HeaderProps): JSX.Element => (
  <>
    <Placeholder name="header-logon" rendering={props?.rendering} />
    <div className="pm-navigation-logo-bar pm-center">
      <a className="pm-logo" href="/">
        <Image field={props?.fields?.logo} />
      </a>
    </div>
  </>
);

export default withDatasourceCheck()<HeaderProps>(Header);
