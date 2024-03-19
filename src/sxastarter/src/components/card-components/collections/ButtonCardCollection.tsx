import { Image, withDatasourceCheck, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { ButtonCard } from '@components/card-components/cards/ButtonCard';
import styles from '@styles/blocks/buttoncard.module.css';
import { BlankCard } from '@components/card-components/cards/BlankCard';
import { EditCard } from '@components/card-components/cards/EditCard';
import { CustomLink } from '@components/CustomLink';

type ButtonCardCollectionProps = ComponentProps & {
  fields: {
    items: ButtonCard[];
  };
};

const ButtonCardCollection = (props: ButtonCardCollectionProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  return (
    <div className={styles.buttonCards}>
      {props?.fields?.items?.map(
        (item, key) =>
          key < 3 && (
            <div key={key} className={styles.buttonCardContainer}>
              <div className={styles.butttonCardPhoto}>
                <Image field={item?.fields?.image} className={styles.buttonCardImage} />
                {sitecoreContext?.pageEditing ? (
                  <span></span>
                ) : (
                  <div className={styles.overlay}>
                    <div className={styles.arrow}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="63"
                        height="63"
                        viewBox="0 0 63 63"
                        fill="none"
                      >
                        <path
                          d="M11.25 35.9995H59.8492M59.8492 35.9995L35.5476 11.25M59.8492 35.9995L35.5476 60.7481"
                          stroke="white"
                          stroke-width="4.5"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              <div className={styles.buttonCtaLink}>
                <CustomLink CTA={item?.fields?.CTA} className={styles.buttonCardCTA} />
              </div>
              <EditCard params={props?.params} rendering={props?.rendering} card={item} />
            </div>
          )
      )}
      <BlankCard />
    </div>
  );
};

export default withDatasourceCheck()<ButtonCardCollectionProps>(ButtonCardCollection);
