import { Text, Field, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';

export type TagsProps = {
  fields?: {
    tag?: Field<string>;
  };
};
export const Tags = (props: TagsProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  return sitecoreContext.pageEditing ? (
    <span className="pm-tag">
      <Text field={props?.fields?.tag} />
    </span>
  ) : props?.fields?.tag?.value !== '' ? (
    <span className="pm-tag">
      <Text field={props?.fields?.tag} />
    </span>
  ) : (
    <></>
  );
};

export default Tags;
