import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { Card } from '@components/card-components/cards/Card';
import { ComponentProps } from '@lib/component-props';
import { DropTreeWithSvg } from '@components/DropTreeWithSvg';

export type NewsHubCardProps = Card & {
  fields: {
    cardIcon: DropTreeWithSvg;
    author: Field<string>;
    date: Field<string>;
  };
};

export type NewsHubCardCollectionProps = ComponentProps & {
  class?: string;
  isSearchCard?: boolean;
  total: number;
  pageInfo: {
    hasNext: boolean;
    endCursor: string;
  };
  fields: {
    cards?: NewsHubCardProps[];
  };
  cards?: NewsHubCardProps[];
};
