import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { useState } from 'react';

export type FilterAtoZProps = ComponentProps & {
  fields: {
    filterTitle: Field<string>;
  };
};

const FilterAtoZScrolledVariant = (props: FilterAtoZProps): JSX.Element => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <section className={`filter-a-to-z ${props?.params?.styles}`} data-variant="scrolled">
      <Text
        onClick={toggleClass}
        field={props?.fields?.filterTitle}
        tag="p"
        className={isActive ? 'title filter-open' : 'title filter-closed'}
      />
      {isActive && (
        <div className="content">
          <a className="item">A</a>
          <a className="item">B</a>
          <a className="item">C</a>
          <a className="item">D</a>
          <a className="item">E</a>
          <a className="item">F</a>
          <a className="item">G</a>
          <a className="item">H</a>
          <a className="item">I</a>
          <a className="item">J</a>
          <a className="item">K</a>
          <a className="item">L</a>
          <a className="item">M</a>
          <a className="item">N</a>
          <a className="item">O</a>
          <a className="item">P</a>
          <a className="item">Q</a>
          <a className="item">R</a>
          <a className="item">S</a>
          <a className="item">T</a>
          <a className="item">U</a>
          <a className="item">V</a>
          <a className="item">W</a>
          <a className="item">X</a>
          <a className="item">Y</a>
          <a className="item">Z</a>
        </div>
      )}
    </section>
  );
};

export const FilterAtoZScrolled = withDatasourceCheck()<FilterAtoZProps>(FilterAtoZScrolledVariant);

const FilterAtoZFullVariant = (props: FilterAtoZProps): JSX.Element => {
  return (
    <section className={`filter-a-to-z ${props?.params?.styles}`} data-variant="full">
      <Text field={props?.fields?.filterTitle} tag="p" className="title" />
      <div className="content">
        <a className="item">A</a>
        <a className="item">B</a>
        <a className="item">C</a>
        <a className="item">D</a>
        <a className="item">E</a>
        <a className="item">F</a>
        <a className="item">G</a>
        <a className="item">H</a>
        <a className="item">I</a>
        <a className="item">J</a>
        <a className="item">K</a>
        <a className="item">L</a>
        <a className="item">M</a>
        <a className="item">N</a>
        <a className="item">O</a>
        <a className="item">P</a>
        <a className="item">Q</a>
        <a className="item">R</a>
        <a className="item">S</a>
        <a className="item">T</a>
        <a className="item">U</a>
        <a className="item">V</a>
        <a className="item">W</a>
        <a className="item">X</a>
        <a className="item">Y</a>
        <a className="item">Z</a>
      </div>
    </section>
  );
};

export const FilterAtoZFull = withDatasourceCheck()<FilterAtoZProps>(FilterAtoZFullVariant);
