import { Field, ImageField, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { PageContext } from 'src/pages/[[...path]]';
import { Keywords } from 'src/pages/[[...path]]';
import { useContext, useState } from 'react';

type SearchByKeywordProps = ComponentProps & {
  fields: {
    backgroundImage: ImageField;
    searchButtonText: Field<string>;
    placeholder: Field<string>;
  };
};

/* eslint-disable */
export const SearchByKeyword = (props: SearchByKeywordProps): JSX.Element => {
  const [inputField, setInput] = useState('');

  const handleClick = () => {
    const keywords: Keywords = {
      generic: inputField,
      condition: '',
      zip: '',
    };

    setSearchParams(keywords);
    return false;
  };

  const handleChangeKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams(keyword);
    setInput(event?.currentTarget?.value);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  const { keyword, setSearchParams = () => console.log('Method not invoked') } =
    useContext(PageContext);

  return (
    <section
      className={`${props?.params?.styles} pm-banner theme-dark search-by-keyword-header col-12`}
      style={{
        backgroundImage: 'url(' + props?.fields?.backgroundImage?.value?.src + ')',
        backgroundPosition: 'top right',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="cta-container">
        <form className="pm-form flow --flow-m" onSubmit={(e) => e.preventDefault()}>
          <input
            name="searchBox"
            className="search-box"
            type="text"
            placeholder={props?.fields?.placeholder?.value}
            onChange={handleChangeKeyword}
            onKeyDown={handleKeyDown}
            value={inputField}
          />
          <button
            type="button"
            className="button no-icon"
            data-variant="primary"
            onClick={() => handleClick()}
          >
            {props?.fields?.searchButtonText?.value}
          </button>
        </form>
      </div>
    </section>
  );
};
export default withDatasourceCheck()<SearchByKeywordProps>(SearchByKeyword);
