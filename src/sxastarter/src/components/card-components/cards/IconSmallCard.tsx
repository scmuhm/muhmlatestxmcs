import { withDatasourceCheck, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';

import { IconCardProps } from '@components/card-components/cards/IconCard';

export type IconSmallCardProps = ComponentProps & IconCardProps;

const IconSmallCard = (props: IconSmallCardProps): JSX.Element => {
  console.log(props);
  return (
    <article className="pm-card pm-icon-card" data-icon-before="heart-scan">
      <div className="text-content">
        <Text field={props?.fields?.shortTitle} tag="h3" />
        <Text field={props?.fields?.description} tag="p" />
      </div>
      <a href="https://pennmedicine.org" className="button variant-primary icon-only"></a>
    </article>
  );
};

export default withDatasourceCheck()<IconSmallCardProps>(IconSmallCard);
