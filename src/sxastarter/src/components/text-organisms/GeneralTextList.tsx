import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { GeneralTextProps } from '@components/text-organisms/GeneralText';
import GeneralText from '@components/text-organisms/GeneralText';

type GeneralTextListProps = ComponentProps & {
  fields: {
    items: GeneralTextProps[];
  };
};

const GeneralTextList = (props: GeneralTextListProps): JSX.Element => (
  <div className="general-text-list">
    {props?.fields?.items?.map((gt, key) => (
      <GeneralText
        key={key}
        params={props?.params}
        rendering={props?.rendering}
        fields={gt?.fields}
      />
    ))}
  </div>
);

export default withDatasourceCheck()<GeneralTextListProps>(GeneralTextList);
