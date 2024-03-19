import {
  Placeholder,
  RouteData,
  ComponentRendering,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';

type FourByEightPlaceholderProps = ComponentProps & {
  rendering: ComponentRendering | RouteData;
  params: { [key: string]: string };
};

const FourByEightPlaceholder = (props: FourByEightPlaceholderProps): JSX.Element => (
  <div className="fourbyeight-placeholder">
    <div className="col-4">
      <Placeholder name="four-col-placeholder" rendering={props?.rendering}></Placeholder>
    </div>
    <div className="col-8">
      <Placeholder name="eight-col-placeholder" rendering={props?.rendering}></Placeholder>
    </div>
  </div>
);

export default withDatasourceCheck()<FourByEightPlaceholderProps>(FourByEightPlaceholder);
