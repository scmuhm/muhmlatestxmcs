import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';

export type SubscribeFormProps = ComponentProps & {
  fields: {
    label: Field<string>;
  };
};

export const SubscribeForm = (props: SubscribeFormProps) => {
  const label = props.fields.label;
  const formLabel = label.value.replace(' ', '-');

  return (
    <form className="pm-form">
      <div className="pm-form-field">
        <label htmlFor={formLabel}>{label.value}</label>
        <div className="pm-inline-field">
          <div className="pm-input-group">
            <input type="text" id={formLabel} name={formLabel} placeholder="" required />
          </div>
          <input type="submit" className="button variant-primary" value="Subscribe" />
        </div>
      </div>
    </form>
  );
};

export default withDatasourceCheck()<SubscribeFormProps>(SubscribeForm);
