import { Image, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { IconSmallCardProps } from '@components/card-components/cards/IconSmallCard';
import CardTitleField from '@components/card-components/cards/CardTitleField';
import styles from '@styles/blocks/card.iconsmall.module.css';
import { BlankCard } from '@components/card-components/cards/BlankCard';
import RTFDescription from '@components/RTFDescription';
import { CustomLink } from '@components/CustomLink';
import { PageContext } from 'src/pages/[[...path]]';
import { useContext } from 'react';

type IconSmallCardCollectionProps = ComponentProps & {
  fields: {
    items: IconSmallCardProps[];
  };
};

const IconSmallCardCollection = (props: IconSmallCardCollectionProps): JSX.Element => {
  const setCardCount = useContext(PageContext);
  const cardCount = props?.fields?.items?.length;
  if (setCardCount !== null && setCardCount.setCardCount) setCardCount.setCardCount(cardCount);
  return (
    <div className={`${styles.cards} ${styles.smallIconCards}`}>
      {props?.fields?.items?.map(
        (item, key) =>
          key < 6 && (
            <div key={key} className={`${styles.card}`}>
              <div className={styles.column1}>
                <Image field={item?.fields?.image} className={styles.icon} />
              </div>
              <div className={styles.column2}>
                <div className={`${styles.title} `}>
                  <CardTitleField rendering={props?.rendering} params={props?.params} item={item} />
                </div>
                <RTFDescription rendering={props?.rendering} params={props?.params} item={item} />
              </div>
              <div className={styles.column3}>
                <div className={`${styles.ctaContainer}`}>
                  <CustomLink CTA={item?.fields?.CTA} dataVariant="" className={styles.cardCTA} />
                </div>
              </div>
            </div>
          )
      )}
      <BlankCard />
    </div>
  );
};

export default withDatasourceCheck()<IconSmallCardCollectionProps>(IconSmallCardCollection);
