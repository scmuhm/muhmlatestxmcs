import { Placeholder, RouteData, ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';

type NewsHubArticleHeaderPlaceholderProps = ComponentProps & {
  rendering: ComponentRendering | RouteData;
  params: { [key: string]: string };
};

const NewsHubArticleHeaderPlaceholder = (
  props: NewsHubArticleHeaderPlaceholderProps
): JSX.Element => (
  <div className="newshub-placeholder">
    <Placeholder
      name="newshub-article-header-placeholder"
      rendering={props?.rendering}
    ></Placeholder>
  </div>
);

export default NewsHubArticleHeaderPlaceholder;
