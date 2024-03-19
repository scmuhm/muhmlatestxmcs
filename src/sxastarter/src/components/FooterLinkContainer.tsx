import { Text, Field, Placeholder, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import styles from '@styles/blocks/footer.module.css';

type FooterLinkContainerProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const FooterLinkContainer = (props: FooterLinkContainerProps): JSX.Element => (
  <div>
    <div className={styles.columnHeading}>
      <Text field={props.fields.heading} />
    </div>
    <div>
      <Placeholder name="footer-links-placeholder-col1" rendering={props?.rendering} />
    </div>
  </div>
);

export default withDatasourceCheck()<FooterLinkContainerProps>(FooterLinkContainer);
