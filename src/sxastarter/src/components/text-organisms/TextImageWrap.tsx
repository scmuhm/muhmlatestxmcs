import {
  Text,
  withDatasourceCheck,
  RichText,
  RichTextField,
  ImageField,
  Image,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { TextOrganismBase } from '@components/text-organisms/TextOrganismBase';
type TextImageWrapProps = ComponentProps &
  TextOrganismBase & {
    fields: {
      body: RichTextField;
      image: ImageField;
    };
  };

export const TextImageWrap = (props: TextImageWrapProps): JSX.Element => {
  return (
    <section className={`pm-textwrap textwrap ${props?.params?.styles}`}>
      <Image field={props?.fields?.image} />
      <div>
        <h1 className="heading">
          <Text field={props?.fields?.title} className="" />
        </h1>
        <div className="description">
          <RichText classname="" field={props?.fields?.body} />
        </div>
      </div>
    </section>
  );
};
export default withDatasourceCheck()<TextImageWrapProps>(TextImageWrap);
