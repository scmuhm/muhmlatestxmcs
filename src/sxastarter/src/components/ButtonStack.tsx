import { withDatasourceCheck, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { ButtonProps } from '@components/Button';

type ButtonStackProps = ComponentProps & {
  fields: {
    items: ButtonProps[];
  };
};

const ButtonStack = (props: ButtonStackProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const pageId = sitecoreContext.itemId;
  const url =
    '/?sc_mode=edit&sc_itemid= ' + pageId + '&sc_lang=en&sc_version=1&sc_site=PennMedicine&sc_ce=1';
  console.log(props);
  return (
    <div className={`pm-button-stack ${props.params.styles}`}>
      {sitecoreContext?.pageEditing && !props?.fields?.items.at(0) ? (
        <a href={url} className="button no-icon bg-warning">
          Add Button to Stack
        </a>
      ) : (
        <></>
      )}
      {props?.fields?.items?.map(
        (item, key) =>
          key < 2 && (
            <a
              key={key}
              href={item?.fields?.link?.value?.href}
              className="button"
              data-variant={item?.fields?.variant?.fields?.variant?.value}
            >
              {item?.fields?.link?.value?.text}
            </a>
          )
      )}
    </div>
  );
};

export default withDatasourceCheck()<ButtonStackProps>(ButtonStack);
