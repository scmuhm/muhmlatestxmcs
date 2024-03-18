import React, { PropsWithChildren } from 'react';
import { Link as JssLink, LinkField, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';

export interface CTAButtonProps {
    field: LinkField;
    buttonType?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'link';
    iconPosition?: 'left' | 'right';
    size?: 'xsmall' | 'small' | 'medium' | 'large';
    label?: string;
    iconSize?: number | undefined;
    iconColor?: string;
    className?: string;
    iconAnimationClassName?: string;
    renderAsLink?: boolean;
    onClick?: () => void;
    submitForm?: boolean | null;
  }

export const CTAButton = (props: CTAButtonProps) => {
    let adjProps: CTAButtonProps = { ...props };

    return <CTAButtonElement {...adjProps} />;
  };

  export const CTAButtonElement = ({
    field,
    renderAsLink = true
  }: CTAButtonProps): JSX.Element => {
    const { sitecoreContext } = useSitecoreContext();
  
    const RenderElem = ({ children }: PropsWithChildren): JSX.Element | null => {
      return (
        <JssLink
          field={field}
          showLinkTextWithChildrenPresent={false}
        >
          {children}
        </JssLink>
      );
    };

    const Elem = (): JSX.Element | null => {
      if (
        !(sitecoreContext && sitecoreContext.pageEditing) &&
        !field?.value?.href &&
        renderAsLink === true
      ) {
        return null;
      }
  
      return (
        <RenderElem/>
      );
    };
  
    return (
      <>
        {/*
         * XP Editor shows two 'buttons', one is editable (to update link), another one is the <A> itself.
         *   To workaround this, we added an extra wrapper <SPAN.sc-editor-link-wrapper> and use CSS to
         *   hide the the unwanted <A> in XP Editor.
         */}
        {sitecoreContext && sitecoreContext.pageEditing && (
          <span className="sc-editor-link-wrapper">
            <Elem />
          </span>
        )}
  
        {!(sitecoreContext && sitecoreContext.pageEditing) && <Elem />}
      </>
    );
  };
  