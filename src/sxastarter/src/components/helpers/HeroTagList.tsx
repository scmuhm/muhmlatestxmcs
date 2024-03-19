import { Field, Item, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import styles from '@styles/blocks/herotag.module.css';

type TagListProps = ComponentProps & {
  //rendering: ComponentRendering | RouteData;
  tagList: Item[];
  maxLength: number;
};

const TagList = (props: TagListProps): JSX.Element => (
  <ul className={styles.tagListParent}>
    {props?.tagList?.slice(0, props?.maxLength)?.map((tItem, tKey) => (
      <li key={tKey} className={styles.tags}>
        <div className={styles.tagItem}>{(tItem?.fields?.title as Field<string>).value}</div>
      </li>
    ))}
  </ul>
);

export default withDatasourceCheck()<TagListProps>(TagList);
