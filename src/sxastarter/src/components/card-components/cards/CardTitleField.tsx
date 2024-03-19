import {
  Text,
  RouteData,
  ComponentRendering,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import styles from '@styles/blocks/cardcontainer.module.css';
import { Card } from '@components/card-components/cards/Card';

type CardTitleFieldProps = ComponentProps & {
  rendering: ComponentRendering | RouteData;
  item: Card;
  shouldEncode?: false;
  titleIsLink?: boolean;
};

const CardTitleField = (props: CardTitleFieldProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  return (
    <div className={`${styles.title}`}>
      {sitecoreContext?.pageEditing ? (
        <Text field={props?.item?.fields?.shortTitle} editable={false} />
      ) : props?.titleIsLink ? (
        <a href={props?.item?.fields?.url?.value} title={props?.item?.fields?.shortTitle?.value}>
          {props?.item?.fields?.shortTitle?.value}
        </a>
      ) : (
        props?.item?.fields?.shortTitle?.value
      )}
    </div>
  );
};

export default CardTitleField;
