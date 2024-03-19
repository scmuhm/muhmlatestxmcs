import {
  Text,
  Field,
  LinkField,
  withDatasourceCheck,
  Placeholder,
  RouteData,
  ComponentRendering,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { CustomLink } from '@components/CustomLink';
import { HorizontalJumpTagLink } from '@components/navigation/HorizontalJumpTagLink';
import { Default as TitleBlock } from '@components/TitleBlock';

export type BulletTextListProps = ComponentProps & {
  params: { [key: string]: string };
  rendering: ComponentRendering | RouteData;
  fields: {
    title: Field<string>;
    description: Field<string>;
    topBody: Field<string>;
    bottomBody: Field<string>;
    CTA: LinkField;
    jumpTag: HorizontalJumpTagLink[];
  };
};

const shouldHideField = (styles: string, nameOfHiddenField: string): ' display-none' | '' =>
  styles !== undefined && styles.indexOf(nameOfHiddenField) > -1 ? ' display-none' : '';

export const BulletTextSection = (props: BulletTextListProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const hideTitle = props?.params?.styles.includes('hide-title');
  const hideDescription = props?.params?.styles.includes('hide-description');
  const buttonClass = sitecoreContext.pageEditing
    ? 'button'
    : props?.fields?.CTA?.value?.href !== ''
    ? 'button'
    : '';
  return (
    <section className="pm-general-text flow copy-container bullet-list">
      <TitleBlock {...props} hideTitle={hideTitle} hideDescription={hideDescription}></TitleBlock>
      <div className={`topBody${shouldHideField(props?.params?.styles, 'hide-topBody')}`}>
        <Text field={props.fields.topBody} />
      </div>
      <Placeholder
        name="blt-txt-con-placeholder"
        rendering={props?.rendering}
        params={props?.params}
      ></Placeholder>
      <div className={`bottomBody${shouldHideField(props?.params?.styles, 'hide-bottomBody')}`}>
        <Text field={props.fields.bottomBody} />
      </div>
      <CustomLink
        CTA={props?.fields?.CTA}
        dataVariant="tertiary"
        className={`${buttonClass} ${shouldHideField(props?.params?.styles, 'hide-cta')}`}
      />
    </section>
  );
};

export default withDatasourceCheck()<BulletTextListProps>(BulletTextSection);
