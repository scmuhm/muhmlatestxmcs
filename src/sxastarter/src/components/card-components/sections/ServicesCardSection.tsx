import {
  RouteData,
  ComponentRendering,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { CardSectionFields } from '@components/card-components/cards/CardSectionFields';
import { CardSection } from '@components/card-components/sections/CardSection';

type ServicesCardSectionProps = ComponentProps & {
  params: { [key: string]: string };
  rendering: ComponentRendering | RouteData;
  fields: CardSectionFields;
};

const ServicesCardSection = (props: ServicesCardSectionProps): JSX.Element => (
  <CardSection
    placeholder="services-cards-col-placeholder"
    params={props.params}
    rendering={props.rendering}
    fields={props.fields}
  />
);

export default withDatasourceCheck()<ServicesCardSectionProps>(ServicesCardSection);
