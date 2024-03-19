import {
  useSitecoreContext,
  RouteData,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';
import styles from '@styles/blocks/card.iconlarge.module.css';
import { ComponentProps } from '@lib/component-props';
import { BaseCard } from '@components/card-components/cards/BaseCard';

type EditCardProps = ComponentProps & {
  card: BaseCard;
  rendering: ComponentRendering | RouteData;
  hideButton?: boolean;
};

export const EditCard = (props: EditCardProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const pageId = sitecoreContext.itemId;
  const url =
    '/?sc_mode=edit&sc_itemid= ' +
    pageId +
    '&sc_lang=en&sc_version=1&sc_site=PennMedicine&sc_ce=1&sc_ce_uri=sitecore://master/{' +
    props?.card?.id +
    '}';
  return !props?.hideButton ? (
    <div className={styles.editCard}>
      {sitecoreContext?.pageEditing ? (
        <a href={url}>
          <img
            src="/sitecore/shell/-/media/Project/PennMedicine/PennMedicine/Cards/pencil.png"
            alt="Edit"
          />
        </a>
      ) : (
        <span></span>
      )}
    </div>
  ) : (
    <></>
  );
};
