import { withDatasourceCheck, GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { IconLargeCard } from '@components/card-components/cards/IconLargeCard';
import CardTitleField from '@components/card-components/cards/CardTitleField';
import styles from '@styles/blocks/card.iconlarge.module.css';
import { BlankCard } from '@components/card-components/cards/BlankCard';
import { EditCard } from '@components/card-components/cards/EditCard';
import RTFDescription from '@components/RTFDescription';
import { getCards } from '@services/cardDetails-service';
import { CustomLink } from '@components/CustomLink';
import { useContext } from 'react';
import { PageContext } from '@src/pages/[[...path]]';

type IconLargeCardCollectionProps = ComponentProps & {
  fields: {
    items: IconLargeCard[];
  };
};

const IconLargeCardCollection = (props: IconLargeCardCollectionProps): JSX.Element => {
  console.log('cards' + props?.fields?.items?.length);
  const setCardCount = useContext(PageContext);
  const cardCount = props?.fields?.items?.length;
  if (setCardCount !== null && setCardCount.setCardCount) setCardCount.setCardCount(cardCount);
  return (
    <div className={`${styles.cards} ${styles.largeIconCards}`}>
      {props?.fields?.items?.map(
        (item, key) =>
          key < 6 && (
            <div key={key} className={`${styles.card} ${item?.fields?.mode?.fields?.Value?.value}`}>
              <div className={styles.content}>
                <div className={styles.titleRow}>
                  <div className={styles.iconImage}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item?.fields?.cardIcon?.fields?.svgtext?.value,
                      }}
                    />
                  </div>
                  <div className={`${styles.title}`}>
                    <CardTitleField
                      rendering={props?.rendering}
                      params={props?.params}
                      item={item}
                    />
                  </div>
                </div>
                <RTFDescription rendering={props?.rendering} params={props?.params} item={item} />
              </div>
              <div className={styles.ctaContainer}>
                <CustomLink CTA={item?.fields?.CTA} />
              </div>
              <EditCard params={props?.params} rendering={props?.rendering} card={item} />
            </div>
          )
      )}
      <BlankCard />
    </div>
  );
};

export const getStaticProps: GetStaticComponentProps = async (_rendering) => {
  console.log('************************************');
  try {
    const path = _rendering?.dataSource;
    console.log('Path: \n' + path);
    const props = await getCards(path);
    // console.log('Props:' + JSON.stringify(props));
    return props;
  } catch (error) {
    console.log('Error' + error);
    return null;
  }
};

export default withDatasourceCheck()<IconLargeCardCollectionProps>(IconLargeCardCollection);
