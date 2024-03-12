import { Placeholder } from "@sitecore-jss/sitecore-jss-nextjs";
import { ComponentProps } from "lib/component-props";

export const AccordionSection = (props: ComponentProps): JSX.Element => {
    const placeholderName = 'pm-small-accord-placeholder';
    
    return (
        <Placeholder name={placeholderName} rendering={props?.rendering} />
    )
}

