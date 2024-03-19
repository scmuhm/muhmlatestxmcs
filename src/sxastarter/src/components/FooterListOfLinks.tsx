import { Text, Image, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import styles from '@styles/blocks/footer.module.css';
import Fields from '@interfaces/Fields';
import { External } from '@helpers/Constants';
import { CustomLink } from '@components/CustomLink';

type FooterListOfLinksProps = ComponentProps & {
  fields: {
    items: FooterLinkItem[];
  };
};

type FooterLinkItem = {
  fields: Fields;
};

const FooterListOfLinks = (props: FooterListOfLinksProps): JSX.Element => (
  <div>
    <ul className={styles.links}>
      {props?.fields?.items?.map((item, key) => (
        <li key={key}>
          <span className={`${item?.fields?.isTitle?.value ? styles.title : styles.hideTitle}`}>
            <Text field={item?.fields?.title} />
          </span>
          <span className={`${item?.fields?.isTitle?.value ? styles.hideTitle : ' '}`}>
            <CustomLink CTA={item?.fields?.Link} dataVariant="" className="" />
            {
              <span
                className={`${
                  item?.fields?.Link?.value?.linktype == External
                    ? styles.showExtSvg
                    : styles.hideExtSvg
                }`}
              >
                <div className={styles.externalIcon}>
                  <Image field={item?.fields?.externalIcon} />
                </div>
              </span>
            }
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default withDatasourceCheck()<FooterListOfLinksProps>(FooterListOfLinks);
