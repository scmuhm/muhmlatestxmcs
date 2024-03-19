import {
  Text,
  Field,
  ImageField,
  Placeholder,
  RouteData,
  ComponentRendering,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import styles from '@styles/blocks/footer.module.css';

type FooterProps = ComponentProps & {
  rendering: ComponentRendering | RouteData;
  fields: {
    copyright: Field<string>;
    image: ImageField;
  };
};

/* eslint-disable */
const Footer = (props: FooterProps): JSX.Element => (
  <div className={styles.footer}
  style={{ backgroundImage: 'url(' + props?.fields?.image?.value?.src + ')', backgroundPosition: 'top right', backgroundRepeat: 'no-repeat' }}>
    <div className={styles.gridLayout}>
      <div className={styles.column}>
        <Placeholder name="footer-links-container-placeholder-col1" rendering={props?.rendering} />
      </div>
      <div className={styles.column}>
        <Placeholder name="footer-links-container-placeholder-col2" rendering={props?.rendering} />
      </div>
      <div className={styles.column}>
        <Placeholder name="footer-links-container-placeholder-col3" rendering={props?.rendering} />
      </div>
      <div className={styles.column}>
        <Placeholder
          name="footer-links-container-placeholder-col1-row2"
          rendering={props?.rendering}
        />
      </div>
      <div className={styles.column}>
        <Placeholder
          name="footer-links-container-placeholder-col2-row2"
          rendering={props?.rendering}
        />
      </div>
      <div className={styles.column}>
        <Placeholder
          name="footer-links-container-placeholder-col3-row2"
          rendering={props?.rendering}
        />
      </div>
      <div className={styles.col3Row3}>
        <div className={styles.column}>
          <Placeholder
            name="footer-links-container-placeholder-col3-row3"
            rendering={props?.rendering}
          />
        </div>
      </div>
      <div className={styles.socialMediaLinks}>
        <div className={styles.column}>
          <Placeholder name="footer-social-media-placeholder" rendering={props?.rendering} />
        </div>
      </div>
      <div className={`${styles.fullcolumn} ${styles.horlinks}`}>
        <Placeholder name="footer-hor-links-placeholder" rendering={props?.rendering} />
      </div>
    </div>
    <div>
      <div className={styles.copyright}>
        <Text field={props?.fields?.copyright} />
      </div>
    </div>
  </div>
);

export default withDatasourceCheck()<FooterProps>(Footer);
