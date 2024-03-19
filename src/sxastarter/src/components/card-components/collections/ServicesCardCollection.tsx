import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { ServicesCardNoImage } from '@components/card-components/cards/ServicesCardNoImage';
import ServiceList from '@components/helpers/ServiceList';
import { BlankCard } from '@components/card-components/cards/BlankCard';
import { EditCard } from '@components/card-components/cards/EditCard';
import styles from '@styles/blocks/service.module.css';
import { useContext } from 'react';
import { PageContext } from '@src/pages/[[...path]]';

type ServicesCardCollectionProps = ComponentProps & {
  fields: {
    items: ServicesCardNoImage[];
  };
};

const ServicesCardCollection = (props: ServicesCardCollectionProps): JSX.Element => {
  const setCardCount = useContext(PageContext);
  const cardCount = props?.fields?.items?.length;
  if (setCardCount !== null && setCardCount.setCardCount) setCardCount.setCardCount(cardCount);
  return (
    <div>
      {props?.fields?.items?.map((item, key) => (
        <div className={styles.servicesCard} key={key}>
          <div className={styles.servicesCardsNoImage}>
            <ServiceList
              rendering={props?.rendering}
              serviceList={item?.fields?.serviceList}
              params={props?.params}
              maxLength={item?.fields?.serviceList?.length}
            />
          </div>
          <EditCard params={props?.params} rendering={props?.rendering} card={item} />
        </div>
      ))}
      <BlankCard />
    </div>
  );
};

export default withDatasourceCheck()<ServicesCardCollectionProps>(ServicesCardCollection);
