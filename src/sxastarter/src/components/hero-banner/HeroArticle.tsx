import {
  Text,
  Field,
  Image,
  ImageField,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { Item } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import styles from '@styles/blocks/heroarticle.module.css';
import HeroTagList from '@components/helpers/HeroTagList';
import CustomDateField from '@components/helpers/CustomDateField';
import { GetPageMetaDataFields } from '@components/GetPageMetaDataFields';

export type HeroArticleProps = ComponentProps & {
  fields: {
    title: Field<string>;
    subTitle: Field<string>;
    image: ImageField;
    tagList: Item[];
    author: Field<string>;
    date: Field<string>;
  };
};

const DefaultVariant = (props: HeroArticleProps): JSX.Element => {
  const pageFields = GetPageMetaDataFields();
  return (
    <section className={styles.heroArticleSection}>
      <div className={styles.heroImg}>
        <Image field={props?.fields?.image} />
      </div>
      <div className={styles.heroArtCont}>
        <div className={styles.heroTagsList}>
          <HeroTagList
            rendering={props?.rendering}
            params={props?.params}
            tagList={props?.fields?.tagList}
            maxLength={props?.fields?.tagList?.length}
          />
        </div>
        <div className={styles.heroTit}>
          <Text field={pageFields.title} editable={false} />
        </div>
        <div className={styles.heroSubTit}>
          <Text field={props?.fields?.subTitle} />
        </div>
        <hr className={styles.divider}></hr>
        <div className={styles.byLine}>
          <div className={styles.heroAuth}>
            <Text field={props.fields.author} />
          </div>
          <div className="date">
            <CustomDateField
              params={props.params}
              rendering={props.rendering}
              fields={{ date: props.fields.date }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export const Default = withDatasourceCheck()<HeroArticleProps>(DefaultVariant);

const GeometricVariant = (props: HeroArticleProps): JSX.Element => {
  const pageFields = GetPageMetaDataFields();
  return (
    <section className={styles.heroGeoArticleSection}>
      <div className={styles.geoCont}>
        <div className={styles.accent}></div>
        <div className={styles.heroGeoImg}>
          <Image field={props?.fields?.image} />
        </div>

        <div className={styles.heroArtGeo}>
          <div className={styles.geoheroTagsList}>
            <HeroTagList
              rendering={props?.rendering}
              params={props?.params}
              tagList={props?.fields?.tagList}
              maxLength={props?.fields?.tagList?.length}
            />
          </div>
          <div className={styles.heroGeoTit}>
            <Text field={pageFields.title} />
          </div>
          <div className={styles.heroGeoSubTit}>
            <Text field={pageFields.description} />
          </div>
          <div className={styles.geoByLine}>
            <div className={styles.heroGeoAuth}>
              <Text field={props.fields.author} />
            </div>
            <div className="date">
              <CustomDateField
                params={props.params}
                rendering={props.rendering}
                fields={props.fields}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export const Geometric = withDatasourceCheck()<HeroArticleProps>(GeometricVariant);
