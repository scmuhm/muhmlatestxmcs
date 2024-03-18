import React from 'react';
import { Text as JssText, LinkField, TextField} from '@sitecore-jss/sitecore-jss-nextjs';
import { CTAButton } from './CTAButton';

type ResultsFieldLink = {
  link: {
    jsonValue: LinkField;
  };
};

interface Fields {
  data: {
    item: {
      children: {
        results: ResultsFieldLink[];
      };
      title: {
        jsonValue: TextField;
      };
    };
  };
}

type CardLinkListProps = {
  params: { [key: string]: string };
  fields: Fields;
};

type CardLinkListItemProps = {
  key: string;
  index: number;
  total: number;
  field: LinkField;
};

const CardLinkListItem = (props: CardLinkListItemProps) => {
  let className = `item${props.index}`;
  className += (props.index + 1) % 2 == 0 ? ' even' : ' odd';
  if (props.index == 0) {
    className += ' first';
  }
  if (props.index + 1 == props.total) {
    className += ' last';
  }
  return (
    <li>
      <div>
        <CTAButton
          buttonType={'link'}
          field={props.field}
          size="medium"
          className="w-full [&_.cta-button--label]:flex-grow"
        />
      </div>
    </li>
  );
};

export const CardLinkList = (props: CardLinkListProps): JSX.Element => {
    const datasource = props.fields?.data?.item;
    const styles = `component card-link-list ${props.params.styles}`.trimEnd();
    const id = props.params.RenderingIdentifier;
    const HeadingTag = (props.params?.HeadingTag || 'h2') as keyof JSX.IntrinsicElements;

    if (datasource) {
      const list = datasource.children.results
        .filter((element: ResultsFieldLink) => element?.link?.jsonValue)
        .map((element: ResultsFieldLink, key: number) => (
          <CardLinkListItem
            index={key}
            key={`${key}${element.link.jsonValue}`}
            total={datasource.children.results.length}
            field={element.link.jsonValue}
          />
        ));
  
      return (
        <div className={styles} id={id ? id : undefined}>
          <div className="component-content">
            <HeadingTag>
              <JssText field={datasource?.title?.jsonValue} />
            </HeadingTag>
            {datasource.children.results && datasource.children.results.length > 0 && (
              <ul className={`list-inside pl-0`}>{list}</ul>
            )}
          </div>
        </div>
      );
    }
  
    return (
      <div className={styles} id={id ? id : undefined}>
        <div className="component-content">
          <h3>Card Link List</h3>
        </div>
      </div>
    );
  };
  
  export const Default = CardLinkList;