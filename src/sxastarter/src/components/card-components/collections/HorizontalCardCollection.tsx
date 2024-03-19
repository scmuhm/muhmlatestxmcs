import { Text, Image, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { HorizontalCard } from '@components/card-components/cards/HorizontalCard';
import { BlankCard } from '@components/card-components/cards/BlankCard';
import CardTitleField from '@components/card-components/cards/CardTitleField';
import { EditCard } from '@components/card-components/cards/EditCard';
import RTFDescription from '@components/RTFDescription';
import { CustomLink } from '@components/CustomLink';
import { useContext } from 'react';
import { PageContext } from '@src/pages/[[...path]]';

type HorizontalCardCollectionProps = ComponentProps & {
  fields: {
    items: HorizontalCard[];
  };
};

const HorizontalCardCollection = (props: HorizontalCardCollectionProps): JSX.Element => {
  console.log(props);
  const setCardCount = useContext(PageContext);
  const cardCount = props?.fields?.items?.length;
  if (setCardCount !== null && setCardCount.setCardCount) setCardCount.setCardCount(cardCount);
  return (
    <div className="pm-card-collection">
      {props?.fields?.items?.map(
        (item, key) =>
          key < 3 && (
            <div
              key={key}
              className={`pm-card image-hover-effect`}
              data-variant="horizontal-card"
              data-image-alignment={item?.fields?.leftImage?.value ? 'left' : 'right'}
            >
              <div className="copy-container">
                <span className="pm-small-tag">
                  <Text field={item?.fields?.tag} />
                </span>
                <div className="copy-group flow --flow-s">
                  <div className="title">
                    <CardTitleField
                      rendering={props?.rendering}
                      params={props?.params}
                      item={item}
                    />
                  </div>
                  <RTFDescription rendering={props?.rendering} params={props?.params} item={item} />
                </div>
                <div className="pm-button-stack">
                  <CustomLink
                    className="button cta"
                    dataVariant="tertiary"
                    CTA={item?.fields?.CTA}
                  />
                </div>
                <EditCard params={props?.params} rendering={props?.rendering} card={item} />
              </div>
              <Image field={item?.fields?.image} className="image" />
            </div>
          )
      )}
      <BlankCard />
    </div>
  );
};

export default withDatasourceCheck()<HorizontalCardCollectionProps>(HorizontalCardCollection);
