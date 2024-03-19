import {
  Link,
  Field,
  LinkField,
  Text,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';

export type SocialMediaBarProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    items: SocialLink[];
  };
};

export type SocialLink = {
  id: Field<string>;
  fields: {
    icon: Field<string>;
    link: LinkField;
  };
};
const SocialMediaBar = (props: SocialMediaBarProps): JSX.Element => {
  const hideTitle = props?.params?.styles?.includes('hide-title');

  return (
    <section className="pm-social-bar">
      {!hideTitle ? <Text tag="h2" field={props.fields.heading} className="heading" /> : <></>}
      <ul>
        {props?.fields?.items?.map((item, key) => (
          <li key={key} className="social-item">
            <Link field={item.fields.link.value}>
              <div
                dangerouslySetInnerHTML={{
                  __html: item.fields.icon.value,
                }}
              ></div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default withDatasourceCheck()<SocialMediaBarProps>(SocialMediaBar);
