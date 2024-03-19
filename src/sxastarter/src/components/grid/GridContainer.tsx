import { Placeholder, ComponentRendering, RouteData } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';

export type GridContainerProps = ComponentProps & {
  params: { [key: string]: string };
  rendering: ComponentRendering | RouteData;
};

export const Default = (props: GridContainerProps): JSX.Element => {
  console.log(props);
  return (
    <div className={`pm-grid-container ${props?.params?.styles}`}>
      <div className="pm-inner-grid">
        <div className="column-span-12">
          <Placeholder
            name="grid-container-placeholder-main"
            rendering={props.rendering}
          ></Placeholder>
        </div>
      </div>
    </div>
  );
};
export const OneColumnEight = (props: GridContainerProps): JSX.Element => {
  console.log(props);
  return (
    <div className={`pm-grid-container ${props?.params?.styles}`}>
      <div className="pm-inner-grid">
        <div className="column-span-8">
          <Placeholder
            name="grid-container-placeholder-main"
            rendering={props.rendering}
          ></Placeholder>
        </div>
      </div>
    </div>
  );
};
export const TwoColumns = (props: GridContainerProps): JSX.Element => {
  console.log(props);
  return (
    <div className={`pm-grid-container ${props?.params?.styles}`}>
      <div className="pm-inner-grid">
        <div className="column-span-4">
          <Placeholder
            name="grid-container-placeholder-aside"
            rendering={props.rendering}
          ></Placeholder>
        </div>
        <div className="column-span-8">
          <Placeholder
            name="grid-container-placeholder-main"
            rendering={props.rendering}
          ></Placeholder>
        </div>
      </div>
    </div>
  );
};
