import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';

type BannerErrorProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const BannerError = (props: BannerErrorProps): JSX.Element => {
  return (
    <div>
      <p>BannerError Component</p>
      <Text field={props.fields.heading} />
    </div>
  );
};

export default withDatasourceCheck()<BannerErrorProps>(BannerError);
