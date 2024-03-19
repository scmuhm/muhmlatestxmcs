import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import SearchInput, { SearchInputProps } from '@components/search/SearchInput';

export type SearchBlockProps = SearchInputProps &
  ComponentProps & {
    fields: {
      label?: Field<string>;
      placeholderText?: Field<string>;
      buttonText: Field<string>;
    };
  };

export const SearchBlock = (props: SearchBlockProps) => {
  const label = props.fields.label;
  const formLabel = label?.value.replace(' ', '-');
  const buttonText = props.fields.buttonText;

  return (
    //data-theme="dark"
    <section className="search">
      <form className="pm-form">
        <div className="pm-form-field">
          <label htmlFor={formLabel}>{props.fields.label?.value}</label>
          <div className="pm-inline-field">
            <SearchInput {...props}></SearchInput>
            <input type="submit" className="button variant-primary" value={buttonText.value} />
          </div>
        </div>
      </form>
    </section>
  );
};

export default withDatasourceCheck()<SearchBlockProps>(SearchBlock);
