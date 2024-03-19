import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { NewsHubCardCollectionProps } from '@components/card-components/cards/NewsHubCard';
import NewsCard from '@components/card-components/cards/NewsCard';

const NewsHubCardCollection = (props: NewsHubCardCollectionProps): JSX.Element => {
  return (
    <NewsCard
      params={props?.params}
      rendering={props?.rendering}
      cards={props?.cards}
      total={0}
      fields={props?.fields}
      pageInfo={props?.pageInfo}
    />
  );
};

export default withDatasourceCheck()<NewsHubCardCollectionProps>(NewsHubCardCollection);
