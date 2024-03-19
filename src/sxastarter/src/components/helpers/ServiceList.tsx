import {
  ImageField,
  Field,
  Item,
  withDatasourceCheck,
  RouteData,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import styles from '@styles/blocks/service.module.css';

type ServiceListProps = ComponentProps & {
  rendering: ComponentRendering | RouteData;
  serviceList: Item[];
  maxLength: number;
};

const ServiceList = (props: ServiceListProps): JSX.Element => (
  <ul>
    {props?.serviceList?.slice(0, props?.maxLength)?.map((sItem, sKey) => (
      <li key={sKey}>
        <div className={styles.tags}>
          <div className={styles.tag}>
            <div className={styles.icon}>
              <img src={(sItem?.fields?.iconCard as ImageField)?.value?.src} alt="wifi" />
            </div>
            {(sItem?.fields?.title as Field<string>).value}
          </div>
        </div>
      </li>
    ))}
  </ul>
);

export default withDatasourceCheck()<ServiceListProps>(ServiceList);
