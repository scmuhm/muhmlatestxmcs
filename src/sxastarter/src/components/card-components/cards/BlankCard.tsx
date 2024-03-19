import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';

type BlankCardProps = {
  hideButton?: boolean;
};

export const BlankCard = (props: BlankCardProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const pageId = sitecoreContext.itemId;
  const url = `/?sc_mode=edit&sc_itemid=${pageId}&sc_lang=en&sc_version=1&sc_site=PennMedicine&sc_ce=1`;
  console.log(props);
  return (
    <>
      {sitecoreContext?.pageEditing ? (
        <article className="blank-card">
          <a href={url} className="button">
            Add New Card
          </a>
        </article>
      ) : (
        <></>
      )}
    </>
  );
};
