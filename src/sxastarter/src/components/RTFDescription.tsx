import { RichText, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import styles from '@styles/blocks/fields.module.css';
import { Card } from '@components/card-components/cards/Card';

type RTFDescriptionProps = ComponentProps & {
  item: Card;
  fields?: {
    shouldEncode?: false;
  };
};

const RTFDescription = (props: RTFDescriptionProps): JSX.Element => (
  <div className={styles.description}>
    <RichText field={props?.item?.fields?.description} />
  </div>
);

export default withDatasourceCheck()<RTFDescriptionProps>(RTFDescription);
