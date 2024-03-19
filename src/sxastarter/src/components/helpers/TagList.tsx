import {
  LinkField,
  Item,
  withDatasourceCheck,
  RouteData,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from 'styles/blocks/tag.module.css';
import { CustomLink } from 'components/CustomLink';

type TagListProps = ComponentProps & {
  rendering: ComponentRendering | RouteData;
  tagList: Item[];
  maxLength: number;
};

const TagList = (props: TagListProps): JSX.Element => (
  <ul className={styles.tagListParent}>
    {props?.tagList?.slice(0, props?.maxLength)?.map((tItem, tKey) => (
      <li key={tKey}>
        <div className={styles.tags}>
          <div className={styles.tagItem}>
            <CustomLink CTA={tItem?.fields?.cta as LinkField} className={styles.linkItem} />
          </div>
        </div>
      </li>
    ))}
  </ul>
);

export default withDatasourceCheck()<TagListProps>(TagList);
