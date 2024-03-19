import { Card } from '@components/card-components/cards/Card';
import { ComponentProps } from '@lib/component-props';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

export type TestimonyCardProps = ComponentProps & Card;

const Default = (): JSX.Element => {
  return (
    <section className="pm-card testimony-card">
      <h1>Test</h1>
    </section>
  );
};
export const TestimonyCard = withDatasourceCheck()<TestimonyCardProps>(Default);
