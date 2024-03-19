import { BaseCard } from '@components/card-components/cards/BaseCard';
import { Item } from '@sitecore-jss/sitecore-jss-nextjs';

export type ServicesCard = BaseCard & {
  fields: {
    serviceList: Item[];
  };
};
