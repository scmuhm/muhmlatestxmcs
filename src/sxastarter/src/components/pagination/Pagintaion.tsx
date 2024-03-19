import { useRouter } from 'next/router';

export const GetActivePageNumber = async () => {
  const sp = useRouter();
  const origin =
    typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';

  const url = origin.concat(sp.asPath);
  console.log(url);
  try {
    const p = new URL(url).search;
    const params = new URLSearchParams(p);
    const pageNumber = params.get('pageNumber');
    return pageNumber;
  } catch (e) {
    console.log('Error' + e);
    return '0';
  }
};
