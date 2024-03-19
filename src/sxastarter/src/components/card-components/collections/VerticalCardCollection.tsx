import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { VerticalCard, VerticalCardProps } from '@components/card-components/cards/VerticalCard';
import { BlankCard } from '@components/card-components/cards/BlankCard';
import { useContext } from 'react';
import { PageContext } from '@src/pages/[[...path]]';

export type VerticalCardCollectionProps = ComponentProps & {
  fields: {
    items: VerticalCardProps[];
  };
};
const VerticalCardCollection = (props: VerticalCardCollectionProps): JSX.Element => {
  const setCardCount = useContext(PageContext);
  const cardCount = props?.fields?.items?.length;
  if (setCardCount !== null && setCardCount.setCardCount) setCardCount.setCardCount(cardCount);
  return (
    <div className="pm-card-collection" data-row-size="3">
      {props?.fields?.items?.map(
        (item, key) => key < 6 && <VerticalCard key={key} {...item}></VerticalCard>
      )}
      <BlankCard />
    </div>
  );
};
export default withDatasourceCheck()<VerticalCardCollectionProps>(VerticalCardCollection);
