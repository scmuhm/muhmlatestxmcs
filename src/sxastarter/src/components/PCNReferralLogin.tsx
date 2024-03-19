import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ComponentProps } from '@lib/component-props';

// import { IPCNReferralLogin } from '../interfaces/IPCNReferralLogin';
import {
  IPCNReferralLogin,
  PCNReferralLogin,
  PCNReferralLoginFormValidation,
} from '@interfaces/IPCNReferralLogin';

type PCNReferralLoginProps = ComponentProps & {
  props: IPCNReferralLogin;
  fields: {
    //Title:
    formTitle: Field<string>;
    //Labels
    blurb: Field<string>;
    usernameLbl: Field<string>;
    passwordLbl: Field<string>;
    loginFailureLbl: Field<string>;
    submitLbl: Field<string>;
  };
};

const PCNReferralLoginComponent = (props: PCNReferralLoginProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PCNReferralLogin>({
    resolver: yupResolver(PCNReferralLoginFormValidation),
    mode: 'onTouched',
  });

  const onSubmitHandler = (values: PCNReferralLogin) => {
    //e.preventDefault();
    console.log(JSON.stringify(values, null, 2));

    console.table(values);
    //TODO: Call the PCNR API to login
    console.log('Submitted');
  };

  return (
    <div>
      {/* PCNReferralLogin */}
      <Text field={props.fields.formTitle} tag="h1" />
      <h2>
        <Text field={props.fields.blurb} tag="h2" />
      </h2>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div>
          <span>
            <Text field={props.fields.usernameLbl} tag="label" />
          </span>
          <span>
            <input type="text" id="un" {...register('un')} />
            {errors.un && <p>{errors.un.message}</p>}
          </span>
        </div>
        <div>
          <span>
            <Text field={props.fields.passwordLbl} tag="label" />
          </span>
          <span>
            <input type="password" id="pw" {...register('pw')} />
            {errors.pw && <p>{errors.pw.message}</p>}
          </span>
        </div>
        <div>
          <input type="submit" value={props.fields.submitLbl.value} />
        </div>
        <div
          id="divLoginErr"
          style={{
            ['display' as string]: 'none',
          }}
        >
          <span>
            <Text field={props.fields.loginFailureLbl} tag="p" />
          </span>
        </div>
      </form>
      <div></div>
      <div></div>
    </div>
  );
};
export default withDatasourceCheck()<PCNReferralLoginProps>(PCNReferralLoginComponent);
