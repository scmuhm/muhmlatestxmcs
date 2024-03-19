import { Text, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { ResultsCard } from '@components/card-components/cards/ResultsCard';
import { BlankCard } from '@components/card-components/cards/BlankCard';
import styles from '@styles/blocks/card.results.module.css';
import { EditCard } from '@components/card-components/cards/EditCard';
import CardTitleField from '@components/card-components/cards/CardTitleField';
import RTFDescription from '@components/RTFDescription';
import { CustomLink } from '@components/CustomLink';
import { useContext } from 'react';
import { PageContext } from '@src/pages/[[...path]]';

type ResultsCardCollectionProps = ComponentProps & {
  fields: {
    items: ResultsCard[];
  };
};

const ResultsCardCollection = (props: ResultsCardCollectionProps): JSX.Element => {
  const setCardCount = useContext(PageContext);
  const cardCount = props?.fields?.items?.length;
  if (setCardCount !== null && setCardCount.setCardCount) setCardCount.setCardCount(cardCount);
  return (
    <div className={styles.cards}>
      {props?.fields?.items?.map(
        (item, key) =>
          key < 3 && (
            <div
              key={key}
              className={`${styles.card} rcard ${
                item?.fields?.showSpecialty?.value ? ' ' : styles.noSpecialty
              }`}
            >
              <div className={styles.specialty}>
                <Text field={item?.fields?.Specialty} />
              </div>
              <div className={styles.copyContent}>
                <div className={styles.content}>
                  <CardTitleField rendering={props?.rendering} params={props?.params} item={item} />
                  <RTFDescription rendering={props?.rendering} params={props?.params} item={item} />
                </div>
                <div className={styles.ctaContainer}>
                  <CustomLink CTA={item?.fields?.CTA} />
                </div>
                <EditCard params={props?.params} rendering={props?.rendering} card={item} />
              </div>
            </div>
          )
      )}
      <BlankCard />
    </div>
  );
};

export default withDatasourceCheck()<ResultsCardCollectionProps>(ResultsCardCollection);
