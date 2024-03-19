'use client';
import NewsCard from '@components/card-components/cards/NewsCard';
import { NewsHubCardCollectionProps } from '@components/card-components/cards/NewsHubCard';
import { NewsHubCardProps } from '@components/card-components/cards/NewsHubCard';
import { executeSitecoreQueryWithEnv } from '@services/sitecore-service';
import { mapNewsHubData } from '@services/map-data';
import { INewsResultCard } from '@interfaces/INewsResultCard';
import { useState, useContext } from 'react';
import { getNewsResultCardsQuery } from '@services/queries/news-results-queries';
import { SearchResultsPagination } from '@components/pagination/SearchResultsPagination';
import { PageContext } from 'src/pages/[[...path]]';
import { CreateSearchKeyword } from '@components/search/CreateSearchKeyword';
import { ComponentRendering, ComponentParams } from '@sitecore-jss/sitecore-jss-nextjs';
import { GetActivePageNumber } from '@components/pagination/Pagintaion';

const NewsResultList = (props: NewsHubCardCollectionProps): JSX.Element => {
  const intialData: NewsHubCardProps[] = [];
  const resultsPerPage = 4; // Fetch only 5 results per page
  let keyword = '';
  const cardItems: NewsHubCardCollectionProps = {
    rendering: props?.rendering,
    params: props?.params,
    class: '',
    isSearchCard: false,
    total: 0,
    pageInfo: {
      hasNext: false,
      endCursor: '',
    },
    fields: props?.fields,
    cards: intialData,
  };

  const [searchResults, setSearchResults] = useState<NewsHubCardCollectionProps>(cardItems);
  const [currentPageNumber, setCurrentPageNumber] = useState('1');
  const searchContext = useContext(PageContext);

  const fetchData = async () => {
    keyword = CreateSearchKeyword(searchContext);
    if (keyword !== null && keyword !== '') {
      const pageNumber = await GetActivePageNumber();
      setCurrentPageNumber(pageNumber !== null ? pageNumber : '1');
      console.log(pageNumber);
      const req = await searchNewsArticles(
        keyword,
        resultsPerPage,
        '',
        props?.rendering,
        props?.params
      );
      setSearchResults(req);
      console.log('Total:' + req.total);
      return req;
    }
    return {};
  };

  fetchData();

  return (
    <section className="news-results-section">
      {searchResults !== undefined &&
      searchResults?.cards != null &&
      searchResults?.cards?.length > 0 ? (
        <div className="search-text">
          {currentPageNumber}-{searchResults?.cards?.length} of {searchResults?.total} Articles for
          <span className="keyword"> {searchContext?.keyword?.generic}</span>
        </div>
      ) : (
        <></>
      )}
      <NewsCard
        class="news-result-cards"
        rendering={props?.rendering}
        params={props?.params}
        cards={searchResults?.cards}
        isSearchCard={true}
        total={props?.total}
        pageInfo={props?.pageInfo}
        fields={props?.fields}
      />
      {searchResults != null && searchResults?.cards != null && searchResults?.cards?.length > 0 ? (
        <SearchResultsPagination
          total={searchResults?.total}
          rendering={props?.rendering}
          currentPageNumber={currentPageNumber}
          params={props?.params}
          countPerPage={
            searchResults?.total / resultsPerPage == 1
              ? 1
              : searchResults?.total / resultsPerPage + 1
          }
        />
      ) : (
        <span></span>
      )}
    </section>
  );
};

async function searchNewsArticles(
  keyword: string,
  resultsPerPage: number,
  cursor: string,
  rendering: ComponentRendering,
  params: ComponentParams
) {
  let props: NewsHubCardCollectionProps = {
    total: 0,
    pageInfo: {
      hasNext: false,
      endCursor: '',
    },
    cards: [],
    isSearchCard: true,
    class: '',
    rendering: rendering,
    params: params,
    fields: {
      cards: [],
    },
  };
  try {
    console.log('Keyword: \n' + keyword);

    let proplist: NewsHubCardProps[] = [];

    let query = getNewsResultCardsQuery;
    query = query?.replace('{first}', resultsPerPage?.toString());
    query = query?.replace('{cursor}', cursor);

    const GraphQLEndpoint: string = process.env.NEXT_PUBLIC_GRAPH_QL_ENDPOINT as string;
    const ApiKey: string = process.env.NEXT_PUBLIC_SITECORE_API_KEY as string;

    // console.log('Query:' + query);

    const results: INewsResultCard = await executeSitecoreQueryWithEnv(
      query,
      GraphQLEndpoint,
      ApiKey
    );
    proplist = await mapNewsHubData(results);
    query = query?.replace('{cursor}', results?.search?.pageInfo?.endCursor?.toString());
    // console.log('Results in list:' + JSON.stringify(proplist));
    props = {
      total: results?.search?.total,
      pageInfo: {
        hasNext: results?.search?.pageInfo?.hasNext,
        endCursor: results?.search?.pageInfo?.endCursor,
      },
      cards: proplist,
      isSearchCard: true,
      class: 'news-result-cards',
      rendering: rendering,
      params: params,
      fields: {
        cards: [],
      },
    };
    return props;
  } catch (error) {
    console.log('Error' + error);
    return props;
  }
}

export default NewsResultList;
