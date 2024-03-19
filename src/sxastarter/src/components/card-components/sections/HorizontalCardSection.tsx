import {
  RouteData,
  ComponentRendering,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { CardSectionProps, CardSection } from '@components/card-components/sections/CardSection';
import { CardSectionFields } from '@components/card-components/cards/CardSectionFields';

type HorizontalCardSectionProps = ComponentProps &
  CardSectionProps & {
    rendering: ComponentRendering | RouteData;
    fields: CardSectionFields;
    params: { [key: string]: string };
  };

const HorizontalCardSection = (props: HorizontalCardSectionProps): JSX.Element => (
  <CardSection
    placeholder="hor-cards-col-placeholder"
    params={props.params}
    rendering={props.rendering}
    fields={props.fields}
  />
);

export default withDatasourceCheck()<HorizontalCardSectionProps>(HorizontalCardSection);
