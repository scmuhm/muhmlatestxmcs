import { Image, useSitecoreContext, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { Card } from '@components/card-components/cards/Card';
import { BlankCard } from '@components/card-components/cards/BlankCard';
import CardTitleField from '@components/card-components/cards/CardTitleField';
import RTFDescription from '@components/RTFDescription';
import Tags from '@components/Tags';
import { CustomLink } from '@components/CustomLink';
import { PageContext } from '@src/pages/[[...path]]';
import { useContext } from 'react';

export type TestimonyCardCollectionProps = ComponentProps & {
  fields: {
    items: Card[];
  };
};

export const TestimonyCardCollection = (props: TestimonyCardCollectionProps): JSX.Element => {
  const setCardCount = useContext(PageContext);
  const { sitecoreContext } = useSitecoreContext();
  const cardCount = props?.fields?.items?.length;
  if (setCardCount !== null && setCardCount.setCardCount) setCardCount.setCardCount(cardCount);
  return (
    <div
      className={`${
        sitecoreContext.pageEditing ? 'pm-card-collection-edit' : 'pm-card-collection'
      }`}
    >
      {props?.fields?.items?.map((item, key) => (
        <div key={key} className={`pm-card image-hover-effect`} data-variant="testimony-card">
          <div className="flow copy-container">
            <Tags fields={item?.fields} />
            <div className="copy-group flow --flow-s">
              <div className="title">
                <CardTitleField rendering={props?.rendering} params={props?.params} item={item} />
              </div>
              <RTFDescription rendering={props?.rendering} params={props?.params} item={item} />
            </div>
            <div className="pm-button-stack">
              <CustomLink
                className="cta button fit-content no-icon"
                dataVariant="tertiary"
                CTA={item?.fields?.CTA}
              />
            </div>
          </div>
          <Image field={item?.fields?.image} className="image" />
        </div>
      ))}
      <BlankCard />
    </div>
  );
};

export default withDatasourceCheck()<TestimonyCardCollectionProps>(TestimonyCardCollection);
