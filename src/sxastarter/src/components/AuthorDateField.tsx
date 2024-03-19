import { Text, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import CustomDateField from '@components/helpers/CustomDateField';

type AuthorDateFieldProps = ComponentProps & {
  fields: {
    author: Field<string>;
    date: Field<string>;
  };
};

const AuthorDateField = (props: AuthorDateFieldProps): JSX.Element => (
  <div className="author-and-date">
    <span className="author">
      <Text field={props?.fields?.author} editable={false} />
    </span>
    {props?.fields?.author?.value !== null &&
    props?.fields?.author?.value !== '' &&
    new Date(props?.fields?.date?.value)?.getFullYear() !== 0 ? (
      <span>&nbsp;|&nbsp;</span>
    ) : (
      <></>
    )}
    {new Date(props?.fields?.date?.value)?.getFullYear() !== 0 ? (
      <span className="date">
        <CustomDateField params={props.params} rendering={props.rendering} fields={props.fields} />
      </span>
    ) : (
      <></>
    )}
  </div>
);

export default AuthorDateField;
