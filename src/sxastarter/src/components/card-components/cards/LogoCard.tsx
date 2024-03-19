import { Image } from '@sitecore-jss/sitecore-jss-nextjs';
import { BaseCard } from '@components/card-components/cards/BaseCard';
import { ComponentProps } from '@lib/component-props';

export type LogoCardProps = ComponentProps & BaseCard;

export const LogoCard = (props: LogoCardProps): JSX.Element => {
  return (
    <div data-variant="logo-card">
      <picture>
        <Image field={props?.fields?.image} />
      </picture>
    </div>
  );
};
