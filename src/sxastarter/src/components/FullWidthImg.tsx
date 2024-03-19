import {
  Text,
  Field,
  withDatasourceCheck,
  Image,
  ImageField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';

type FullWidthImgProps = ComponentProps & {
  fields: {
    image: ImageField;
    caption: Field<string>;
  };
};

const FullWidthImg = (props: FullWidthImgProps): JSX.Element => (
  <section className={`pm-fwimg ${props?.params?.styles}`}>
    <figure>
      <picture>
        <Image field={props?.fields?.image} />
      </picture>
      <Text field={props?.fields?.caption} classname="pm-caption" tag="figcaption" />
    </figure>
  </section>
);

export default withDatasourceCheck()<FullWidthImgProps>(FullWidthImg);
