import {
  RouteData,
  ComponentRendering,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { CardSectionFields } from '@components/card-components/cards/CardSectionFields';
import { CardSection } from '@components/card-components/sections/CardSection';

type ListingCardSectionProps = ComponentProps & {
  params: { [key: string]: string };
  rendering: ComponentRendering | RouteData;
  fields: CardSectionFields;
};

const ListingCardSection = (props: ListingCardSectionProps): JSX.Element => (
  <CardSection
    placeholder="list-cards-col-placeholder"
    params={props.params}
    rendering={props.rendering}
    fields={props.fields}
  />
);

export default withDatasourceCheck()<ListingCardSectionProps>(ListingCardSection);
