import {
  RouteData,
  ComponentRendering,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { Hero } from '@components/heroes/Hero';
import { Default as TitleBlock, TitleBlockProps } from '@components/TitleBlock';

import {
  FilterAtoZFull,
  FilterAtoZScrolled,
  FilterAtoZProps,
} from '@components/filters/FilterAtoZ';
import InputSearch, { SearchBlockProps } from '@components/search/Search';

export type HeroConditionProps = ComponentProps &
  Hero &
  TitleBlockProps &
  FilterAtoZProps &
  SearchBlockProps & {
    //SearchByConditionProps & {
    rendering: ComponentRendering | RouteData;
    fields: {
      //search: Pick<SearchByConditionProps, 'fields'>;
    };
  };

const DefaultVariant = (props: HeroConditionProps): JSX.Element => {
  return (
    <div>
      <section data-theme="dark" className={`pm-hero hero-condition ${props?.params?.styles}`}>
        <div className="pm-center">
          <div className="title-filter">
            <div className="title-block">
              <TitleBlock {...props} />
            </div>
            <div className="filter">
              <FilterAtoZFull {...props}></FilterAtoZFull>
            </div>
          </div>
          <InputSearch {...props}></InputSearch>
        </div>
      </section>
    </div>
  );
};
export const HeroConditionFull = withDatasourceCheck()<HeroConditionProps>(DefaultVariant);

const HeroConditionScrolledVariant = (props: HeroConditionProps): JSX.Element => {
  return (
    <section data-theme="dark" className={`pm-hero hero-condition ${props?.params?.styles}`}>
      <div className="pm-center">
        <div className="title-block">
          <TitleBlock {...props} />
        </div>
        <div className="filter">
          <FilterAtoZScrolled {...props}></FilterAtoZScrolled>
        </div>
      </div>
    </section>
  );
};
export const HeroConditionScrolled = withDatasourceCheck()<HeroConditionProps>(
  HeroConditionScrolledVariant
);
