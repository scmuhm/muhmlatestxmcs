import {
  RouteData,
  ComponentRendering,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { CardSectionFields } from '@components/card-components/cards/CardSectionFields';
import { CardSection } from '@components/card-components/sections/CardSection';

type LocationCardSectionProps = ComponentProps & {
  params: { [key: string]: string };
  rendering: ComponentRendering | RouteData;
  fields: CardSectionFields;
};

const LocationCardSection = (props: LocationCardSectionProps): JSX.Element => (
  <CardSection
    placeholder="loc-cards-col-placeholder"
    params={props.params}
    rendering={props.rendering}
    fields={props.fields}
  />
);

export default withDatasourceCheck()<LocationCardSectionProps>(LocationCardSection);
