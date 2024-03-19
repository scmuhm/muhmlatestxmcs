import { ComponentProps } from '@lib/component-props';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

type SearchResultsPaginationProps = ComponentProps & {
  countPerPage: number;
  currentPageNumber: string;
  total: number;
};

export const SearchResultsPagination = (props: SearchResultsPaginationProps): JSX.Element => {
  const [prevClassName, setPrevClass] = useState(
    parseInt(props?.currentPageNumber) === 1 ? 'disabled' : ''
  );
  const [nextClassName, setNextClass] = useState(
    Math.floor(props?.countPerPage) === parseInt(props?.currentPageNumber) ? 'disabled' : ''
  );
  const searchParams = useSearchParams();
  const count = props?.countPerPage;
  const paged = Array.from({ length: count }, (x: object, i: number) => {
    console.log(x);
    return i + 1;
  });
  const router = useRouter();

  const setPagePath = (page: number) => {
    if (page <= 0) {
      setPrevClass('disabled');
      return;
    } else if (page > Math.floor(props?.countPerPage)) {
      setNextClass('disabled');
      return;
    }

    if (page === 1) {
      setPrevClass('disabled');
    } else {
      setPrevClass('');
    }
    if (page === Math.floor(props?.countPerPage)) {
      setNextClass('disabled');
    } else {
      setNextClass('');
    }

    if (page !== parseInt(props?.currentPageNumber)) {
      router.replace({
        query: { ...router.query, pageNumber: page },
      });
      searchParams;
    }
  };

  const isActivePage = (page: number) => {
    return page == parseInt(props?.currentPageNumber)
      ? 'page-link page-button active'
      : 'page-link page-button';
  };
  return (
    <div className="pager">
      <ul className="pagination">
        <li className="page-item">
          <a
            className={`page-link prev ${prevClassName}`}
            onClick={() => setPagePath(parseInt(props?.currentPageNumber) - 1)}
          >
            Previous
          </a>
        </li>
        {paged.map((item, key) => (
          <li key={key} className="page-item">
            <a className={isActivePage(item)} onClick={() => setPagePath(item)}>
              {item}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a
            className={`page-link next ${nextClassName}`}
            onClick={() => setPagePath(parseInt(props?.currentPageNumber) + 1)}
          >
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};
