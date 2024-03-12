import { Placeholder } from "@sitecore-jss/sitecore-jss-nextjs";
import { ComponentProps } from "lib/component-props";

const AccordionSection = (props: ComponentProps): JSX.Element => {
    const placeholderName = 'pm-small-accord-placeholder';
    
    return (
        <Placeholder name={placeholderName} rendering={props?.rendering} />
    )
}

export const Default = (props: ComponentProps): JSX.Element => {
    return(
        <div>
            <h2>test placeholder</h2>
            <AccordionSection {...props} />
        </div>
    )
}
