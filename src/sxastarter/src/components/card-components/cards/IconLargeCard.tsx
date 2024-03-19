import { DropTreeWithSvg } from '@components/DropTreeWithSvg';
import { IconCardProps } from '@components/card-components/cards/IconCard';

export type IconLargeCard = IconCardProps & {
  fields: {
    mode: DropTreeWithSvg;
    cardIcon: DropTreeWithSvg;
  };
};
