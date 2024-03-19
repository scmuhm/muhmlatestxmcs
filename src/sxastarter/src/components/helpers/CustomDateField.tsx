import { DateField, Field, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';

export type CustomDateFieldProps = ComponentProps & {
  fields: {
    date: Field<string>;
  };
};

export const CustomDateField = (props: CustomDateFieldProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const date = new Date(props?.fields?.date?.value);
  date.setUTCHours(0, 0, 0, 0);
  const dateWithoutTime = date?.toUTCString()?.split('00:00:00 GMT')[0];
  return (
    <span>
      {sitecoreContext?.pageEditing ? (
        <div>
          <DateField field={props.fields.date} editable={true} />
        </div>
      ) : (
        <span>{dateWithoutTime}</span>
      )}
    </span>
  );
};

export default CustomDateField;
