import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';

export type SearchInputProps = ComponentProps & {
  fields: {
    label?: Field<string>;
    placeholderText?: Field<string>;
    buttonText: Field<string>;
  };
};

export const SearchInput = (props: SearchInputProps): JSX.Element => {
  const label = props.fields.label;
  const placeholderText = props.fields.placeholderText?.value;
  const formLabel = label?.value.replace(' ', '-');

  return (
    <div className="pm-form-field">
      <div className="pm-input-group" data-type="search">
        <input type="text" id={formLabel} name={formLabel} placeholder={placeholderText} required />
      </div>
    </div>
  );
};
export default withDatasourceCheck()<SearchInputProps>(SearchInput);
