import { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { queryBreadCrumbs } from '@services/sitecore-service';

type item = {
  id: string;
  name: string;
  url: {
    path: string;
  };
  navigationTitle: {
    name: string;
    value: string;
  };
  shortTitle: {
    name: string;
    value: string;
  };
  ancestors: item[];
};

type data = {
  item: item;
};
type props = {
  fields: {
    data: data;
  };
};

const BreadcrumbRendering = (props: props): JSX.Element => {
  // console.log('Props:' + JSON.stringify(props));
  return (
    <div>
      <Breadcrumb>
        {props?.fields?.data?.item?.ancestors?.reverse()?.map((item, key) => (
          <Breadcrumb.Item href={item?.url?.path} key={key}>
            {item?.navigationTitle?.value === ''
              ? item?.shortTitle?.value
              : item?.navigationTitle?.value}
          </Breadcrumb.Item>
        ))}
        <Breadcrumb.Item active>
          {' '}
          {props?.fields?.data?.item?.navigationTitle?.value === ''
            ? props?.fields?.data?.item?.shortTitle?.value
            : props?.fields?.data?.item?.navigationTitle?.value}
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

/* eslint-disable */
export const getStaticProps: GetStaticComponentProps = async (rendering, _) => {
  const query = rendering?.dataSource;
  const data = await queryBreadCrumbs(query!);

  return {
    data,
  };
};

export default BreadcrumbRendering;
