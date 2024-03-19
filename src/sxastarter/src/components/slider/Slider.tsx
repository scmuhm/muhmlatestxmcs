import {
  RouteData,
  ComponentRendering,
  Placeholder,
  withDatasourceCheck,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { useContext, useState } from 'react';
import { PageContext } from '@src/pages/[[...path]]';
import { SliderFields } from '@components/slider/SliderFields';
import { Default as TitleBlock } from '@components/TitleBlock';

export type SliderProps = ComponentProps & {
  placeholder: string;
  rendering: ComponentRendering | RouteData;
  fields: SliderFields;
};

export const Slider = (props: SliderProps): JSX.Element => {
  const setCardCount = useContext(PageContext);
  const { sitecoreContext } = useSitecoreContext();
  if (
    sitecoreContext.pageEditing ||
    sitecoreContext.pageState === 'preview' ||
    sitecoreContext.pageState === 'normal'
  ) {
    // set count here using page context only if we are editing, previewing or viewing; all other cases(storybook and outside of sitecore we set in mock)
    props.fields.cardCount = setCardCount?.cardCount;
  }

  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= props?.fields?.cardCount) {
      newIndex = props?.fields?.cardCount - 1;
    }
    setActiveIndex(newIndex);
  };
  const arrToMap = new Array(props?.fields?.cardCount).fill(0);
  const hideTitle = props?.params?.styles.includes('hide-title');
  const hideSubheading = props?.params?.styles.includes('hide-subheading');

  return (
    <section className="pm-slider">
      <TitleBlock {...props} hideTitle={hideTitle} hideSubheading={hideSubheading}></TitleBlock>
      <div className="inner" style={{ transform: `translate(-${activeIndex * 100}%)` }}>
        <Placeholder name="slider-placeholder" rendering={props.rendering} />
      </div>
      <div className="slider-buttons">
        <div className="indicators">
          {arrToMap.map((item, index) => {
            return (
              <button
                key={item}
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <div
                  className={`${
                    index === activeIndex ? 'indicator-symbol-active' : 'indicator-symbol'
                  }`}
                ></div>
              </button>
            );
          })}
        </div>

        <div className="slider-navigation">
          <button
            type="button"
            className={'icon-button arrow-icon slider-navigate-left-button button-arrow'}
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
            disabled={activeIndex === 0 ? true : false}
          ></button>
          <button
            type="button"
            className="icon-button arrow-icon button-arrow"
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
            disabled={activeIndex === props?.fields?.cardCount - 1 ? true : false}
          ></button>
        </div>
      </div>
    </section>
  );
};

export default withDatasourceCheck()<SliderProps>(Slider);
