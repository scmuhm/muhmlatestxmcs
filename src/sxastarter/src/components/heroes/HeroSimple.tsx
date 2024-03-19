import {
  RouteData,
  ComponentRendering,
  LinkField,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { Hero } from '@components/heroes/Hero';
import { ButtonsRight as TitleBlock } from '@components/TitleBlock';

export type HeroSimpleProps = ComponentProps &
  Hero & {
    rendering: ComponentRendering | RouteData;
    fields: {
      secondaryCTA?: LinkField;
    };
  };

const DefaultVariant = (props: HeroSimpleProps): JSX.Element => {
  return (
    <section className={`pm-hero hero-simple ${props?.params?.styles}`}>
      <div className="pm-center">
        <TitleBlock {...props}></TitleBlock>
      </div>
    </section>
  );
};
export const Default = withDatasourceCheck()<HeroSimpleProps>(DefaultVariant);

const HeroUnderlineVariant = (props: HeroSimpleProps): JSX.Element => {
  return (
    <section className={`pm-hero hero-underline ${props?.params?.styles}`}>
      <div className="pm-center">
        <TitleBlock {...props} hideDescription={true}></TitleBlock>
      </div>
    </section>
  );
};
export const HeroUnderline = withDatasourceCheck()<HeroSimpleProps>(HeroUnderlineVariant);
