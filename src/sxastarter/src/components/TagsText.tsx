import {
  Text,
  Field,
  RichText,
  RichTextField,
  LinkField,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { Item } from '@sitecore-jss/sitecore-jss-nextjs';
import TagList from '@components/helpers/TagList';
import { CustomLink } from '@components/CustomLink';

type TagsTextProps = ComponentProps & {
  fields: {
    title: Field<string>;
    description: RichTextField;
    secondDescription: RichTextField;
    CTA: LinkField;
    tagList: Item[];
  };
};

const TagsText = (props: TagsTextProps): JSX.Element => (
  <div className="pm-tags-text flow copy-container">
    <div>
      <Text
        field={props.fields.title}
        tag="h2"
        className={`title${
          props?.params?.styles.indexOf('hide-title') > -1 ? ' display-none' : ''
        }`}
      />
      <RichText field={props.fields.description} className="description" />
    </div>
    <div className="pm-tag">
      <TagList
        rendering={props?.rendering}
        params={props?.params}
        tagList={props?.fields?.tagList}
        maxLength={props?.fields?.tagList?.length}
      />
    </div>
    <RichText
      field={props.fields.secondDescription}
      className={`description${
        props?.params?.styles.indexOf('hide-description') > -1 ? ' display-none' : ''
      }`}
    />
    <CustomLink
      CTA={props?.fields?.CTA}
      dataVariant="tertiary"
      className={`fit-content align-self-end button${
        props?.params?.styles.indexOf('hide-cta') > -1 ? ' display-none' : ''
      }`}
    />
  </div>
);

export default withDatasourceCheck()<TagsTextProps>(TagsText);
