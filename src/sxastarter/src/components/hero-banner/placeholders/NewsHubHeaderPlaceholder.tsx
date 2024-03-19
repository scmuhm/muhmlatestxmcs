import { Placeholder, RouteData, ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';

type NewsHubHeaderPlaceholderProps = ComponentProps & {
  rendering: ComponentRendering | RouteData;
  params: { [key: string]: string };
};

const NewsHubHeaderPlaceholder = (props: NewsHubHeaderPlaceholderProps): JSX.Element => (
  <div className="newshub-placeholder">
    <Placeholder name="newshub-header-placeholder" rendering={props?.rendering}></Placeholder>
  </div>
);

export default NewsHubHeaderPlaceholder;
