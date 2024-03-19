import {
  Field,
  useComponentProps,
  GetStaticComponentProps,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { IProviderList } from '@interfaces/IProviderList';
import { getProviders } from '@services/provider-service';

type MPDProviderListProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

export default function MPDProviderList(props: MPDProviderListProps): JSX.Element {
  const providerData = useComponentProps<IProviderList>(props?.rendering?.uid) as IProviderList;
  return (
    <div>
      <h1>Provider List</h1>
      <ol>
        {providerData?.output?.map((item, key) => (
          <li key={key}>
            <span>{item?.FirstName}</span> <span>{item?.LastName}</span>{' '}
            <span>({item?.ProviderID})</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export const getStaticProps: GetStaticComponentProps = async () => {
  try {
    const props = await getProviders();
    return props;
  } catch (error) {
    return null;
  }
};
