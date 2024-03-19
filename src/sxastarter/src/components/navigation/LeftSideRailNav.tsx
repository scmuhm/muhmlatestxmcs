import { executeSitecoreQueryWithEnv } from '@services/sitecore-service';
import {
  ComponentRendering,
  GetStaticComponentProps,
  LayoutServiceData,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { leftNavQuery } from '@services/queries/leftnav-queries';
import { useState } from 'react';
import { CCollapse } from '@coreui/react';

export type LeftSideRailNavProps = {
  data: data;
};
type data = {
  item: {
    navigationTitle: { value: string };
    name: string;
    mobileHeading: { value: string };
    children: children;
  };
};
type children = {
  results: result[];
};

type result = {
  id: string;
  name: string;
  navigationTitle: { value: string };
  showInLeftNav: {
    jsonValue: {
      value: string;
    };
  };
  url: {
    path: string;
  };
};

const getTitle = (name: string, navigationTitle: string) => {
  return navigationTitle === '' ? name : navigationTitle;
};

export const LeftSideRailNav = (props: LeftSideRailNavProps): JSX.Element => {
  const [visible, setVisible] = useState(false);
  const condition = visible ? 'open' : 'closed';
  const renderedResults = props?.data?.item?.children?.results
    .filter((x) => Boolean(x?.showInLeftNav?.jsonValue?.value)?.valueOf())
    .map((item, key) => (
      <li key={key}>
        <a href={item?.url?.path}>{getTitle(item?.name, item?.navigationTitle?.value)}</a>
      </li>
    ));
  const navtitle = getTitle(props?.data?.item?.name, props?.data?.item?.navigationTitle?.value);
  return (
    <section className="pm-left-nav">
      <ul>
        <div className="collapseable">
          <li
            className="title"
            onClick={(event) => {
              event.preventDefault();
              setVisible(!visible);
            }}
          >
            <span className="title-text">{props?.data?.item?.mobileHeading?.value}</span>
            <div className={`chevron ${condition}`}>
              <div className="icon-chevron"></div>
            </div>
          </li>
          <CCollapse visible={visible}>
            <li>{navtitle}</li>
            {renderedResults}
          </CCollapse>
        </div>
        <nav className="expanded">
          <li>{navtitle}</li>
          {renderedResults}
        </nav>
      </ul>
    </section>
  );
};
/* eslint-disable */
export const getStaticProps: GetStaticComponentProps = async (
  context: ComponentRendering,
  rendering: LayoutServiceData
) => {
  console.log('Context-' + context);
  let query = leftNavQuery;
  query = query?.replace('$path', rendering?.sitecore?.route?.itemId!);
  query = query?.replace('$templateIds', rendering?.sitecore?.route?.templateId!);
  console.log('Modified Query-' + query);
  const GraphQLEndpoint: string = process.env.NEXT_PUBLIC_GRAPH_QL_ENDPOINT as string;
  const ApiKey: string = process.env.NEXT_PUBLIC_SITECORE_API_KEY as string;
  const data = await executeSitecoreQueryWithEnv(query, GraphQLEndpoint, ApiKey);
  return {
    data,
  };
};
export default LeftSideRailNav;
