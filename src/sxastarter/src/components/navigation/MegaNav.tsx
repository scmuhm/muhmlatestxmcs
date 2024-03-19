import { Link, GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';
// import { queryMegaNav } from '@services/sitecore-service';
import { useState } from 'react';
import { megaMenuQuery } from '@services/queries/megamenu-queries';
import { executeSitecoreQueryWithEnv } from '@services/sitecore-service';

type data = {
  item: {
    name: string;
    children: children;
  };
};

export type MegaNavProps = {
  data: data;
};

type children = {
  results: result[];
};

type result = {
  id: string;
  menuTitle: {
    name: string;
    value: string;
  };
  ViewAllLink: {
    name: string;
    value: string;
    jsonValue: {
      value: {
        href: string;
        text: string;
        anchor: string;
        linktype: string;
        class: string;
        title: string;
        targe: string;
        querystring: string;
        id: string;
      };
    };
  };
  hideLink: {
    name: string;
    value: string;
  };
  link: {
    name: string;
    value: string;
    jsonValue: {
      value: {
        href: string;
        text: string;
        anchor: string;
        linktype: string;
        class: string;
        title: string;
        target: string;
        querystring: string;
        id: string;
      };
    };
  };
  children: children;
};

export const MegaNav = (props: MegaNavProps): JSX.Element => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const expand = (clickedId: string) => {
    if (expandedId === clickedId) {
      setExpandedId(null); // Collapse if already expanded
    } else {
      setExpandedId(clickedId); // Expand the clicked submenu
    }
  };
  console.log(props);
  return (
    <div className="mega-nav-container">
      <nav className="mega-nav pm-center">
        <ul className="parent-nav">
          {props?.data?.item?.children?.results?.map((megaNavItem, key) =>
            megaNavItem.children?.results?.length > 0 ? (
              <li key={key} onClick={() => expand(megaNavItem?.id)}>
                <button type="button" className="variant-navigation drop-down">
                  {megaNavItem.menuTitle.value}
                </button>
                {megaNavItem.id === expandedId && (
                  <div className="mega-nav-open pm-center">
                    {megaNavItem.children.results.map((result, key) => (
                      <div key={key} className="submenu">
                        <span className="submenu-title">{result.menuTitle.value}</span>
                        <ul
                          data-children-count={
                            result.children.results.length + (result?.ViewAllLink?.value ? 1 : 0)
                          }
                        >
                          {result.children.results.map((result, key) => (
                            <li key={key}>
                              <Link field={result.link.jsonValue.value} />
                            </li>
                          ))}
                          {result?.ViewAllLink?.value ? (
                            <li className="view-all-link">
                              <Link
                                className="button variant-tertiary justify-start"
                                field={result.ViewAllLink.jsonValue.value}
                              />
                            </li>
                          ) : null}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ) : (
              <li key={key}>
                <a href="/" className="button variant-navigation">
                  {megaNavItem.menuTitle.value}
                </a>
              </li>
            )
          )}
        </ul>
        <button
          type="button"
          id="site-search"
          data-variant="tertiary"
          className="icon-before-magnifying-glass"
        >
          Search
        </button>
      </nav>
    </div>
  );
};

/* eslint-disable */
export const getStaticProps: GetStaticComponentProps = async (rendering) => {
  console.log('<h1>Rendering : ' + rendering + '</h1>');
  const query = megaMenuQuery;
  const GraphQLEndpoint: string = process.env.NEXT_PUBLIC_GRAPH_QL_ENDPOINT as string;
  const ApiKey: string = process.env.NEXT_PUBLIC_SITECORE_API_KEY as string;

  // console.log("Query:" + query);

  const data = await executeSitecoreQueryWithEnv(query, GraphQLEndpoint, ApiKey);
  // const data = await queryMegaNav(query!);
  // console.log("data:" + JSON.stringify(data));

  return {
    data,
  };
};

export default MegaNav;
