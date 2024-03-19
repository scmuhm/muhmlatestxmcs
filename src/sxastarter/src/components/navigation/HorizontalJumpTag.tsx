import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { HorizontalJumpTagLink } from '@components/navigation/HorizontalJumpTagLink';
import { useState } from 'react';

export type HorizontalJumpTagProps = ComponentProps & {
  fields: {
    items: HorizontalJumpTagLink[];
  };
};

const HorizontalJumpTag = (props: HorizontalJumpTagProps): JSX.Element => {
  const [navId, setClass] = useState('');
  const uniqueObjArray = [
    ...new Map(props?.fields?.items.map((item) => [item.fields.jumptagText?.value, item])).values(),
  ];

  console.log('Unique ' + JSON.stringify(uniqueObjArray));
  const handleLinkClick = (clickedId: string) => {
    if (navId !== clickedId) {
      setClass(clickedId);
    } else {
      setClass('');
    }
  };
  return (
    <nav className="horizontal-jump-tag">
      <ul className="pm-center">
        {uniqueObjArray?.map(
          (linkBookmark, linkKey) =>
            linkKey < 7 && (
              <li key={linkKey}>
                <a
                  className={`${
                    navId === linkBookmark?.fields?.jumptagText?.value ? 'highlighted' : ''
                  }`}
                  onClick={() => handleLinkClick(linkBookmark?.fields?.jumptagText?.value)}
                  href={'#' + linkBookmark?.fields?.jumptagText?.value}
                >
                  {linkBookmark?.fields?.jumptagText?.value}
                </a>
              </li>
            )
        )}
      </ul>
    </nav>
  );
};

export default withDatasourceCheck()<HorizontalJumpTagProps>(HorizontalJumpTag);
