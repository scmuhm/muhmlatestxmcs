import {
  Text,
  Field,
  RouteData,
  ComponentRendering,
  RichText,
  RichTextField,
  LinkField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { BaseBanner } from '@components/banner/BaseBanner';
import { DropTreeWithSvg } from '@components/DropTreeWithSvg';
import { CustomLink } from '@components/CustomLink';

type BannerTaskProps = ComponentProps &
  BaseBanner & {
    rendering: ComponentRendering | RouteData;
    fields: {
      bannerIcon: DropTreeWithSvg;
      secondbannerIcon: DropTreeWithSvg;
      secondtitle: Field<string>;
      secondarydescription: RichTextField;
      secondaryCTA: LinkField;
    };
  };

export const Default = (props: BannerTaskProps): JSX.Element => {
  console.log(JSON.stringify(props.fields.bannerIcon?.fields?.svgtext?.value) + ' 1');
  console.log(JSON.stringify(props.fields.secondbannerIcon?.fields?.svgtext?.value) + ' 2');
  return (
    <section className={`pm-banner banner-task ${props?.params?.styles}`}>
      <div className="task-wrapper">
        <div
          dangerouslySetInnerHTML={{
            __html: props?.fields?.bannerIcon?.fields?.svgtext?.value as string,
          }}
          className="icon"
        />
        <div className="text-content flow --flow-xs">
          <h1 className="heading">
            <Text field={props?.fields?.title} className="heading" />
          </h1>
          <RichText field={props?.fields?.description} className="description" line-clamp="3" />
        </div>
        <div className="cta-container">
          <CustomLink CTA={props?.fields?.primaryCTA} dataVariant="" className="" />
        </div>
      </div>
      <div className="task-wrapper">
        <div
          dangerouslySetInnerHTML={{
            __html: props?.fields?.secondbannerIcon?.fields?.svgtext.value as string,
          }}
          className="icon"
        />
        <div className="text-content flow --flow-xs">
          <h1 className="heading">
            <Text field={props?.fields?.secondtitle} className="heading" />
          </h1>
          <RichText
            field={props?.fields?.secondarydescription}
            className="description"
            line-clamp="3"
          />
        </div>
        <div className="cta-container">
          <CustomLink CTA={props?.fields?.secondaryCTA} dataVariant="" className="" />
        </div>
      </div>
    </section>
  );
};
