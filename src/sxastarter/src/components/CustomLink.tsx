import { Link, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

type CustomLinkProps = {
  CTA: LinkField;
  dataVariant?: string;
  className?: string;
  editable?: boolean;
};

export const CustomLink = (props: CustomLinkProps): JSX.Element => {
  return (
    <Link
      field={props?.CTA}
      className={`${props?.className}`}
      data-variant={props?.dataVariant}
      target={props?.CTA?.value?.target}
      editable={props?.editable}
    ></Link>
  );
};
