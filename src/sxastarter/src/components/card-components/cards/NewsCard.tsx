import { Text, RichText, Image, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import AuthorDateField from '@components/AuthorDateField';
import { NewsHubCardCollectionProps } from '@components/card-components/cards/NewsHubCard';
import CardTitleField from '@components/card-components/cards/CardTitleField';
import { CustomLink } from '@components/CustomLink';
import { useContext } from 'react';
import { PageContext } from '@src/pages/[[...path]]';

const NewsCard = (props: NewsHubCardCollectionProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const isEditing = sitecoreContext.pageEditing && !props?.isSearchCard;
  const maxCount = props?.isSearchCard ? props?.cards?.length : 4;
  const cards = props?.isSearchCard ? props?.cards : props?.fields?.cards;
  const setCardCount = useContext(PageContext);
  let cardCount = 0;
  if (cards !== undefined) cardCount = cards.length;
  if (setCardCount !== null && setCardCount.setCardCount) setCardCount.setCardCount(cardCount);
  // if (props?.cards != null) console.log('Props:' + JSON.stringify(props?.cards[0]));
  return (
    <div
      className={`pm-card-collection newshub-card-collection ${props.class} ${props.params.styles}`}
    >
      {cards?.map(
        (item, key) =>
          maxCount != null &&
          key < maxCount && (
            <div key={key} className="pm-card newshub-card">
              <div className="image-container">
                <div
                  className={
                    item?.fields?.cardIcon?.fields?.svgtext?.value != null ? 'icon-container' : ''
                  }
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item?.fields?.cardIcon?.fields?.svgtext?.value as string,
                    }}
                  />
                </div>
                <Image field={item?.fields?.image} className="card-image" editable={false} />
              </div>
              <div className="content flow --flow-m">
                {sitecoreContext?.pageEditing ? (
                  <Text field={item?.fields?.tag} editable={false} />
                ) : item?.fields?.tag?.value ? (
                  <span className="tags">
                    <Text field={item?.fields?.tag} editable={false} />
                  </span>
                ) : (
                  <></>
                )}
                <div className="title">
                  <CardTitleField
                    rendering={props?.rendering}
                    params={props?.params}
                    item={item}
                    titleIsLink={true}
                  />
                </div>
                <p className="copy">
                  <RichText field={item?.fields?.description} editable={false} />
                </p>
                {!props?.isSearchCard ? (
                  <p className="news-link">
                    <CustomLink
                      CTA={item?.fields?.CTA}
                      dataVariant=""
                      editable={false}
                      className=""
                    />
                  </p>
                ) : (
                  <></>
                )}
                <AuthorDateField
                  params={props.params}
                  rendering={props.rendering}
                  fields={item.fields}
                />
              </div>
            </div>
          )
      )}
      {isEditing ? <div>Add cards here</div> : <></>}
    </div>
  );
};

export default NewsCard;
