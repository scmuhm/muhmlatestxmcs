import { Placeholder, RouteData, ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';

type EightByFourPlaceholderProps = ComponentProps & {
  rendering: ComponentRendering | RouteData;
  params: { [key: string]: string };
};

const EightByFourPlaceholder = (props: EightByFourPlaceholderProps): JSX.Element => (
  <div className="eightbyfour-placeholder col-12">
    <div className="col-9">
      <Placeholder name="eight-col-placeholder" rendering={props?.rendering}></Placeholder>
    </div>
    <div className="col-3">
      <Placeholder name="four-col-placeholder" rendering={props?.rendering}></Placeholder>
    </div>
  </div>
);

export default EightByFourPlaceholder;
