import { Placeholder, RouteData, ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';

type NewsHubFooterPlaceholderProps = ComponentProps & {
  rendering: ComponentRendering | RouteData;
  params: { [key: string]: string };
};

const NewsHubFooterPlaceholder = (props: NewsHubFooterPlaceholderProps): JSX.Element => (
  <div className="newshub-placeholder">
    <Placeholder name="newshub-footer-placeholder" rendering={props?.rendering}></Placeholder>
  </div>
);

export default NewsHubFooterPlaceholder;
