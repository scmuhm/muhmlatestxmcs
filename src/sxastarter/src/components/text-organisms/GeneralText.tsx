import {
  Image,
  RichText,
  RichTextField,
  ImageField,
  withDatasourceCheck,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import { HorizontalJumpTagLink } from '@components/navigation/HorizontalJumpTagLink';
import { CustomLink } from '@components/CustomLink';
import { TextOrganismBase } from '@components/text-organisms/TextOrganismBase';
import { Default as TitleBlock } from '@components/TitleBlock';

export type GeneralTextProps = ComponentProps &
  TextOrganismBase & {
    fields: {
      description: RichTextField;
      image?: ImageField;
      embed?: RichTextField;
      jumpTag: HorizontalJumpTagLink[];
    };
  };

const GeneralText = (props: GeneralTextProps): JSX.Element => {
  const hideTitle = props?.params?.styles.includes('hide-title');
  const hideSubheading = props?.params?.styles.includes('hide-subheading');
  const hideDescription = props?.params?.styles.includes('hide-description');
  const hideImage = props?.params?.styles.includes('hide-image');
  const hideVideo = props?.params?.styles.includes('hide-video');
  const hideCTA = props?.params?.styles.includes('hide-cta');
  const { sitecoreContext } = useSitecoreContext();

  console.log(props);

  return (
    <div className="pm-general-text bullet-list">
      <TitleBlock
        {...props}
        hideTitle={hideTitle}
        hideSubheading={hideSubheading}
        hideDescription={hideDescription}
      ></TitleBlock>
      {props?.fields?.image && !hideImage && (
        <Image className={`mx-auto`} field={props.fields.image} />
      )}
      {props?.fields?.embed && !hideVideo && (
        <RichText className={`mx-auto`} field={props?.fields?.embed} />
      )}
      {sitecoreContext?.pageEditing && props?.fields?.CTA ? (
        <div className="pm-button-stack">
          <CustomLink
            dataVariant="tertiary"
            className={`button fit-content align-self-end`}
            CTA={props?.fields?.CTA}
          />
        </div>
      ) : (
        props?.fields?.CTA?.value?.text &&
        !hideCTA && (
          <div className="pm-button-stack">
            <CustomLink
              dataVariant="tertiary"
              className={`button fit-content align-self-end`}
              CTA={props?.fields?.CTA}
            />
          </div>
        )
      )}
    </div>
  );
};

export default withDatasourceCheck()<GeneralTextProps>(GeneralText);
