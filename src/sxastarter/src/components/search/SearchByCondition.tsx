import { Field, ImageField, Text, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { PageContext } from 'src/pages/[[...path]]';
import { Keywords } from 'src/pages/[[...path]]';
import { useContext, useState } from 'react';

export type SearchByConditionProps = ComponentProps & {
  fields: {
    title: Field<string>;
    backgroundImage: ImageField;
    searchButtonText: Field<string>;
    conditionPlaceholder: Field<string>;
    zipCodePlaceholder: Field<string>;
  };
};

/* eslint-disable */
export const SearchByCondition = (props: SearchByConditionProps): JSX.Element => {
  const [condition, setCondition] = useState('');

  const handleClick = () => {
    const keywords: Keywords = {
      generic: '',
      condition: 'condition=' + condition,
      zip: '',
    };

    setSearchParams(keywords);
    return false;
  };

  const handleChangeCondition = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams(keyword);
    setCondition(event?.currentTarget?.value);
  };

  const { keyword, setSearchParams = () => console.log('Method not invoked') } =
    useContext(PageContext);

  return (
    <section
      className={`${props?.params?.styles} pm-banner search-by-keyword-header col-12`}
      style={{
        backgroundImage: 'url(' + props?.fields?.backgroundImage?.value?.src + ')',
        backgroundPosition: 'top right',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="title">
        <h2>
          <Text field={props?.fields?.title} />
        </h2>
      </div>
      <div className="cta-container">
        <form className="pm-form flow --flow-m" onSubmit={(e) => e.preventDefault()}>
          <input
            name="searchBox"
            className="search-box"
            type="text"
            placeholder={props?.fields?.conditionPlaceholder?.value}
            onChange={handleChangeCondition}
          />
          <button
            type="submit"
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

export const SearchByConditionZip = (props: SearchByConditionProps): JSX.Element => {
  const [condition, setCondition] = useState('');
  const [zip, setZip] = useState('');

  const handleClick = () => {
    const keywords: Keywords = {
      generic: '',
      condition: 'condition=' + condition,
      zip: 'zip=' + zip,
    };

    setSearchParams(keywords);
    return false;
  };

  const handleChangeCondition = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams(keyword);
    setCondition(event?.currentTarget?.value);
  };

  const handleChangeZip = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams(keyword);
    setZip(event?.currentTarget?.value);
  };

  const { keyword, setSearchParams = () => console.log('Method not invoked') } =
    useContext(PageContext);

  return (
    <section
      className={`${props?.params?.styles} pm-banner search-by-keyword-header col-12`}
      style={{
        backgroundImage: 'url(' + props?.fields?.backgroundImage?.value?.src + ')',
        backgroundPosition: 'top right',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="title">
        <h2>
          <Text field={props?.fields?.title} />
        </h2>
      </div>
      <div className="cta-container">
        <form className="pm-form flow --flow-m" onSubmit={(e) => e.preventDefault()}>
          <input
            name="searchBox"
            className="search-box"
            type="text"
            placeholder={props?.fields?.conditionPlaceholder?.value}
            onChange={handleChangeCondition}
          />
          <input
            name="searchBox"
            className="search-box"
            type="text"
            placeholder={props?.fields?.zipCodePlaceholder?.value}
            onChange={handleChangeZip}
          />
          <button
            type="submit"
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

export const SearchByZipInsurance = (props: SearchByConditionProps): JSX.Element => {
  const [zip, setZip] = useState('');

  const handleClick = () => {
    const keywords: Keywords = {
      generic: '',
      condition: '',
      zip: 'zip=' + zip,
    };

    setSearchParams(keywords);
    return false;
  };

  const handleChangeZip = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams(keyword);
    setZip(event?.currentTarget?.value);
  };

  const { keyword, setSearchParams = () => console.log('Method not invoked') } =
    useContext(PageContext);

  return (
    <section
      className={`${props?.params?.styles} pm-banner col-12`}
      style={{
        backgroundImage: 'url(' + props?.fields?.backgroundImage?.value?.src + ')',
        backgroundPosition: 'top right',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="title">
        <h2>
          <Text field={props?.fields?.title} editable={true} />
        </h2>
      </div>
      <div className="cta-container">
        <form className="pm-form flow --flow-m" onSubmit={(e) => e.preventDefault()}>
          <input
            name="searchBox"
            className="search-box"
            type="text"
            placeholder={props?.fields?.zipCodePlaceholder?.value}
            onChange={handleChangeZip}
          />
          <button
            type="submit"
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

export const SearchByConditionInsurance = (props: SearchByConditionProps): JSX.Element => {
  const [condition, setCondition] = useState('');

  const handleClick = () => {
    const keywords: Keywords = {
      generic: '',
      condition: 'condition=' + condition,
      zip: '',
    };

    setSearchParams(keywords);
    return false;
  };

  const handleChangeCondition = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams(keyword);
    setCondition(event?.currentTarget?.value);
  };

  const { keyword, setSearchParams = () => console.log('Method not invoked') } =
    useContext(PageContext);

  return (
    <section
      className={`${props?.params?.styles} pm-banner col-12`}
      style={{
        backgroundImage: 'url(' + props?.fields?.backgroundImage?.value?.src + ')',
        backgroundPosition: 'top right',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="title">
        <h2>
          <Text field={props?.fields?.title} />
        </h2>
      </div>
      <div className="cta-container">
        <form className="pm-form flow --flow-m" onSubmit={(e) => e.preventDefault()}>
          <input
            name="searchBox"
            className="search-box"
            type="text"
            placeholder={props?.fields?.conditionPlaceholder?.value}
            onChange={handleChangeCondition}
          />
          <button
            type="submit"
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

export const SearchByZip = (props: SearchByConditionProps): JSX.Element => {
  const [zip, setZip] = useState('');

  const handleClick = () => {
    const keywords: Keywords = {
      generic: '',
      condition: '',
      zip: 'zip=' + zip,
    };

    setSearchParams(keywords);
    return false;
  };

  const handleChangeZip = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams(keyword);
    setZip(event?.currentTarget?.value);
  };

  const { keyword, setSearchParams = () => console.log('Method not invoked') } =
    useContext(PageContext);

  return (
    <section
      className={`${props?.params?.styles} pm-banner col-12`}
      style={{
        backgroundImage: 'url(' + props?.fields?.backgroundImage?.value?.src + ')',
        backgroundPosition: 'top right',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="title">
        <h2>
          <Text field={props?.fields?.title} />
        </h2>
      </div>
      <div className="cta-container">
        <form className="pm-form flow --flow-m" onSubmit={(e) => e.preventDefault()}>
          <input
            name="searchBox"
            className="search-box"
            type="text"
            placeholder={props?.fields?.zipCodePlaceholder?.value}
            onChange={handleChangeZip}
          />
          <button
            type="submit"
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

export const SearchByConditionZipInsurance = (props: SearchByConditionProps): JSX.Element => {
  const [condition, setCondition] = useState('');
  const [zip, setZip] = useState('');

  const handleClick = () => {
    const keywords: Keywords = {
      generic: '',
      condition: 'condition=' + condition,
      zip: 'zip=' + zip,
    };

    setSearchParams(keywords);
    return false;
  };

  const handleChangeCondition = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams(keyword);
    setCondition(event?.currentTarget?.value);
  };

  const handleChangeZip = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams(keyword);
    setZip(event?.currentTarget?.value);
  };

  const { keyword, setSearchParams = () => console.log('Method not invoked') } =
    useContext(PageContext);

  return (
    <section
      className={`${props?.params?.styles} pm-banner col-12`}
      style={{
        backgroundImage: 'url(' + props?.fields?.backgroundImage?.value?.src + ')',
        backgroundPosition: 'top right',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="title">
        <h2>
          <Text field={props?.fields?.title} />
        </h2>
      </div>
      <div className="cta-container">
        <form className="pm-form flow --flow-m" onSubmit={(e) => e.preventDefault()}>
          <input
            name="searchBox"
            className="search-box"
            type="text"
            placeholder={props?.fields?.conditionPlaceholder?.value}
            onChange={handleChangeCondition}
          />
          <input
            name="searchBox2"
            className="search-box"
            type="text"
            placeholder={props?.fields?.zipCodePlaceholder?.value}
            onChange={handleChangeZip}
          />
          <button
            type="submit"
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
export default withDatasourceCheck()<SearchByConditionProps>(SearchByCondition);
