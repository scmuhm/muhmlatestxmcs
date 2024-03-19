import {
  RouteData,
  ComponentRendering,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { CardSectionProps, CardSection } from '@components/card-components/sections/CardSection';
import { CardSectionFields } from '@components/card-components/cards/CardSectionFields';
type ButtonCardSectionProps = ComponentProps &
  CardSectionProps & {
    rendering: ComponentRendering | RouteData;
    fields: CardSectionFields;
    params: { [key: string]: string };
  };

const ButtonCardSection = (props: ButtonCardSectionProps): JSX.Element => (
  <CardSection
    placeholder="button-cards-placeholder"
    params={props.params}
    rendering={props.rendering}
    fields={props.fields}
  />
);

export default withDatasourceCheck()<ButtonCardSectionProps>(ButtonCardSection);
