import { Item, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { BaseCard } from '@components/card-components/cards/BaseCard';
import { BlankCard } from '@components/card-components/cards/BlankCard';
import styles from '@styles/blocks/card.listing.module.css';
import { CustomLink } from '@components/CustomLink';
import { useContext } from 'react';
import { PageContext } from '@src/pages/[[...path]]';

type ListingCardCollectionProps = ComponentProps &
  Item & {
    fields: {
      items: BaseCard[];
    };
  };

const ListingCardCollection = (props: ListingCardCollectionProps): JSX.Element => {
  const setCardCount = useContext(PageContext);
  const cardCount = props?.fields?.items?.length;
  if (setCardCount !== null && setCardCount.setCardCount) setCardCount.setCardCount(cardCount);

  return (
    <div className={`${styles.cards} ${styles.listing}`}>
      <div className={styles.row}>
        {props?.fields?.items?.map((item, key) => (
          <div key={key} className={styles.card}>
            <CustomLink CTA={item?.fields?.CTA} dataVariant="" className={styles.cardCTA} />
          </div>
        ))}
      </div>
      <BlankCard />
    </div>
  );
};

export default withDatasourceCheck()<ListingCardCollectionProps>(ListingCardCollection);
