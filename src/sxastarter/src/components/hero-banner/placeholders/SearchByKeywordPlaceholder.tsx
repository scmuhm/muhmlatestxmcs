import { Placeholder, RouteData, ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';

type SearchByKeywordPlaceholderProps = ComponentProps & {
  rendering: ComponentRendering | RouteData;
  params: { [key: string]: string };
};
const SearchByKeywordPlaceholder = (props: SearchByKeywordPlaceholderProps): JSX.Element => (
  <div className="search-by-keyword-placeholder">
    <Placeholder name="search-by-keyword" rendering={props?.rendering}></Placeholder>
  </div>
);

export default SearchByKeywordPlaceholder;
