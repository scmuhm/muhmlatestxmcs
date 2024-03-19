import { PageParams } from 'src/pages/[[...path]]';

export function CreateSearchKeyword(props: PageParams) {
  if (props?.keyword?.generic !== '') return 'keyword=' + props.keyword.generic;
  else if (props?.keyword?.condition !== '' || props?.keyword?.zip) {
    return 'condition=' + props?.keyword?.condition + '&zip=' + props?.keyword?.zip;
  }
  return '';
}
