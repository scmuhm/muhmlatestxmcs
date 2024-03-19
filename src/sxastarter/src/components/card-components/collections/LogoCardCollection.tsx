import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { LogoCard, LogoCardProps } from '@components/card-components/cards/LogoCard';
import { BlankCard } from '@components/card-components/cards/BlankCard';

export type LogoCardCollectionProps = ComponentProps & {
  fields: {
    items: LogoCardProps[];
  };
};

const LogoCardCollection = (props: LogoCardCollectionProps): JSX.Element => (
  <div className="pm-logo-cards">
    {props?.fields?.items?.map((item, key) => (
      <LogoCard key={key} {...item}></LogoCard>
    ))}
    <BlankCard />
  </div>
);

export default withDatasourceCheck()<LogoCardCollectionProps>(LogoCardCollection);
