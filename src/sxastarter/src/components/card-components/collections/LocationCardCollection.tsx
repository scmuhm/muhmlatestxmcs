import {
  Text,
  Image,
  withDatasourceCheck,
  Item,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { LocationCard } from '@components/card-components/cards/LocationCard';
import styles from '@styles/blocks/card.location.module.css';
import { BlankCard } from '@components/card-components/cards/BlankCard';
import CardTitleField from '@components/card-components/cards/CardTitleField';
import ServiceList from '@components/helpers/ServiceList';
import RTFDescription from '@components/RTFDescription';
import { CustomLink } from '@components/CustomLink';
import { useContext } from 'react';
import { PageContext } from '@src/pages/[[...path]]';

type LocationCardCollectionProps = ComponentProps &
  Item & {
    fields: {
      items: LocationCard[];
    };
  };

const LocationCardCollection = (props: LocationCardCollectionProps): JSX.Element => {
  const setCardCount = useContext(PageContext);
  const { sitecoreContext } = useSitecoreContext();
  const cardCount = props?.fields?.items?.length;

  if (setCardCount !== null && setCardCount.setCardCount) setCardCount.setCardCount(cardCount);
  return (
    <div className={`${styles.cards} ${styles.location}`}>
      {props?.fields?.items?.map((item, key) => (
        <div key={key} className={styles.card}>
          <div className={styles.photo}>
            <Image field={item?.fields?.image} />
          </div>
          <div className={styles.content}>
            <div className={styles.info}>
              <div className={styles.text}>
                <CardTitleField rendering={props?.rendering} params={props?.params} item={item} />
                <RTFDescription rendering={props?.rendering} params={props?.params} item={item} />
              </div>
              <div className={styles.contact}>
                <div className={styles.address}>
                  <a
                    href={
                      'https://maps.google.com/maps?q=' +
                      item?.fields?.streetAddress?.value +
                      ' ' +
                      item?.fields?.city?.value +
                      ' ' +
                      item?.fields?.state?.value +
                      ' ' +
                      item?.fields?.zipCode?.value
                    }
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M12 12.634C13.7182 12.634 15.1111 11.2714 15.1111 9.59052C15.1111 7.90965 13.7182 6.54704 12 6.54704C10.2818 6.54704 8.88889 7.90965 8.88889 9.59052C8.88889 11.2714 10.2818 12.634 12 12.634Z"
                        stroke="#0055A4"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.657 15.6905L13.414 21.6212C13.039 21.9913 12.5306 22.1992 12.0005 22.1992C11.4704 22.1992 10.962 21.9913 10.587 21.6212L6.343 15.6905C6.343 15.6905 4.46234 13.177 4.15369 11.644C3.84504 10.1109 4.00349 8.52191 4.60901 7.07784C5.21452 5.63376 6.2399 4.39949 7.55548 3.5311C8.87107 2.66272 10.4178 2.19922 12 2.19922C13.5822 2.19922 15.1289 2.66272 16.4445 3.5311C17.7601 4.39949 18.7855 5.63376 19.391 7.07784C19.9965 8.52191 20.155 10.1109 19.8463 11.644C19.5377 13.177 17.657 15.6905 17.657 15.6905Z"
                        stroke="#0055A4"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                  <div className={styles.addressLine}>
                    <div>
                      <Text field={item?.fields?.streetAddress} />,
                    </div>
                    <div>
                      <Text field={item?.fields?.city} />,
                    </div>
                    <div>
                      <Text field={item?.fields?.state} />
                    </div>
                    <div>
                      <Text field={item?.fields?.zipCode} />
                    </div>
                  </div>
                </div>
                <div className={styles.phone}>
                  <a href={'tel: ' + item?.fields?.phoneNumber}></a>
                  <Text field={item?.fields?.phoneNumber} />
                </div>
              </div>
              <div className={styles.services}>
                <ServiceList
                  rendering={props?.rendering}
                  serviceList={item?.fields?.serviceList}
                  params={props?.params}
                  maxLength={3}
                />
              </div>
              <div className={styles.symptoms}>
                <Text field={item?.fields?.symptomsTitleLabel} />
                <div className={styles.items}>
                  <Text field={item?.fields?.symptomOneLabel} />{' '}
                  {item?.fields?.symptomTwoLabel.value != '' ? '|' : ''}
                  <Text field={item?.fields?.symptomTwoLabel} />{' '}
                  {item?.fields?.symptomThreeLabel.value != '' ? '|' : ''}
                  <Text field={item?.fields?.symptomThreeLabel} />
                </div>
              </div>
            </div>
            <div className={`${styles.ctaContainer}`}>
              {sitecoreContext.pageEditing || item?.fields?.CTA?.value?.href ? (
                <CustomLink CTA={item?.fields?.CTA} dataVariant="" className={styles.cardCTA} />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      ))}
      <BlankCard />
    </div>
  );
};

export default withDatasourceCheck()<LocationCardCollectionProps>(LocationCardCollection);
