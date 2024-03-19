import { withDatasourceCheck, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import BulletTextProps from '@components/BulletText';

export type BulletTextContainerProps = ComponentProps & {
  fields: {
    items: BulletTextProps[];
  };
};

const shouldHideField = (styles: string, nameOfHiddenField: string): ' display-none' | '' =>
  styles !== undefined && styles.indexOf(nameOfHiddenField) > -1 ? ' display-none' : '';

const getListTypeFromSitecoreStyles = (styles: string): string => {
  const list_styles: string[] = ['list-shield', 'list-checkmark'];
  const filteredStyles = list_styles.filter(
    (list_style) => styles !== undefined && styles.indexOf(list_style) > -1
  );
  return filteredStyles.length > 0 ? filteredStyles[0] : '';
};

const getColumnCountFromSitecoreStlyes = (styles: string): string => {
  const column_counts: string[] = ['column-2', 'column-1'];
  const filteredStyles = column_counts.filter(
    (column_count) => styles !== undefined && styles.indexOf(column_count) > -1
  );
  return filteredStyles.length > 0 ? filteredStyles[0] : '';
};

const buildBulletsList = (bullets: BulletTextProps[]) => {
  return bullets.map((bullet: BulletTextProps, index: number) => (
    <li key={index}>
      <div className="text-container">
        <RichText field={bullet.fields.text} className="text" />
        {bullet.fields.subText?.value ? (
          <span className="subtext">{bullet.fields.subText?.value}</span>
        ) : null}
      </div>
    </li>
  ));
};

export const BulletTextContainer = (props: BulletTextContainerProps): JSX.Element => (
  <ul
    className={`${getColumnCountFromSitecoreStlyes(
      props.params?.styles
    )} ${getListTypeFromSitecoreStyles(props?.params?.styles)} ${shouldHideField(
      props?.params?.styles,
      'hide-bulletsList'
    )}`}
  >
    {buildBulletsList(props?.fields?.items)}
  </ul>
);

export default withDatasourceCheck()<BulletTextContainerProps>(BulletTextContainer);
