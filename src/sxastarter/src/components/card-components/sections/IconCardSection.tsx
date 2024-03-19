import {
  RouteData,
  ComponentRendering,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { CardSection } from '@components/card-components/sections/CardSection';
import { CardSectionFields } from '@components/card-components/cards/CardSectionFields';
import { useContext } from 'react';
import { PageContext } from '@src/pages/[[...path]]';

type IconCardContainerProps = ComponentProps & {
  rendering: ComponentRendering | RouteData;
  fields: CardSectionFields;
  params: { [key: string]: string };
};

const IconCardContainer = (props: IconCardContainerProps): JSX.Element => {
  const setCardCount = useContext(PageContext);
  props.fields.cardCount = setCardCount.cardCount;
  return (
    <CardSection
      placeholder="icon-cards-col-placeholder"
      params={props.params}
      rendering={props.rendering}
      fields={props.fields}
    />
  );
};

export default withDatasourceCheck()<IconCardContainerProps>(IconCardContainer);
