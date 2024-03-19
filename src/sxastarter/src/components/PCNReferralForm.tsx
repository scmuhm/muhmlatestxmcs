import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@lib/component-props';
import {
  IPCNReferralForm,
  PCNReferralForm,
  PCNReferralFormValidation,
} from '@interfaces/IPCNReferralForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

type PCNReferralFormProps = ComponentProps & {
  props: IPCNReferralForm;
  fields: {
    formTitle: Field<string>;
    networkSiteLbl: Field<string>;
    physicianFirstNameLbl: Field<string>;
    physicianLastNameLbl: Field<string>;
    staffMemberFirstNameLbl: Field<string>;
    staffMemberLastNameLbl: Field<string>;
    staffMemberEmailAddressLbl: Field<string>;
    staffMemberPhoneNumberLbl: Field<string>;
    patientFirstNameLbl: Field<string>;
    patientLastNameLbl: Field<string>;
    patientDOBLbl: Field<string>;
    patientAddressLbl: Field<string>;
    patientPhoneNumberLbl: Field<string>;
    patientDiagnosisLbl: Field<string>;
    reasonForReferralLbl: Field<string>;
    preferredProviderLbl: Field<string>;
    schedulingPreferencesLbl: Field<string>;
    isClinicalTrialReferralEvaluationLbl: Field<string>;
    isClinicalTrialReferralLbl: Field<string>;
    doesPatientKnowReferralLbl: Field<string>;
    commentsLbl: Field<string>;
  };
};

const PCNReferralFormComponent = (props: PCNReferralFormProps): JSX.Element => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }, // get errors of the form
  } = useForm<PCNReferralForm>({
    resolver: yupResolver(PCNReferralFormValidation),
    mode: 'onTouched', // default is "onSubmit"
  });

  const onSubmitHandler = (values: PCNReferralForm) => {
    console.log(JSON.stringify(values, null, 2));
    //TODO: WHEN CALLING SAVE API, PUT reasonForTheReferralOther INTO reasonForTheReferral
  };
  const styles = {
    errorMessage: {
      color: 'red',
    },
  };
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="form">
      <div>
        <Text field={props.fields.formTitle} tag="h1" />
      </div>

      <h2>Referring Provider Information</h2>
      <div>
        {/* <span><Text  field={props.fields.networkSiteLbl} /></span>
      <span><input type="text" name= {props.fields.networkSite}/></span> */}
        {/*TODO: REFACTOR*/}
        <label htmlFor="networkSite">
          Referring Network Site <sup>*</sup>
        </label>
        <select
          {...register('centerID')}
          id="networkSite"
          defaultValue={''}
          onChange={(e) => setValue('centerID', parseInt(e.target.value), { shouldValidate: true })}
        >
          <option value="" disabled>
            Please Select...
          </option>
          <option value="1">TODO: Get from API!</option>
        </select>
        {errors.centerID && (
          <p style={styles.errorMessage} className="error-message">
            {errors.centerID.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="physicianFirstName">
          Referring Physician&apos;s First Name <sup>*</sup>
        </label>
        <input {...register('physicianFirstName')} id="physicianFirstName" type="text" />
        {errors.physicianFirstName && (
          <p style={styles.errorMessage} className="error-message">
            {errors.physicianFirstName.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="physicianLastName">
          Referring Physician&apos;s Last Name <sup>*</sup>
        </label>
        <input {...register('physicianLastName')} id="physicianLastName" type="text" />
        {errors.physicianLastName && (
          <p style={styles.errorMessage} className="error-message">
            {errors.physicianLastName.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="staffFirstName">
          Referring Staff Member&apos;s First Name <sup>*</sup>
        </label>
        <input {...register('staffFirstName')} id="staffFirstName" type="text" />
        {errors.staffFirstName && (
          <p style={styles.errorMessage} className="error-message">
            {errors.staffFirstName.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="staffLastName">
          Referring Staff Member&apos;s Last Name <sup>*</sup>
        </label>
        <input {...register('staffLastName')} id="staffLastName" type="text" />
        {errors.staffLastName && (
          <p style={styles.errorMessage} className="error-message">
            {errors.staffLastName.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="staffEmail">
          Referring Staff Member&apos;s Email Address <sup>*</sup>
        </label>
        <input {...register('staffEmail')} id="staffEmail" type="text" />
        {errors.staffEmail && (
          <p style={styles.errorMessage} className="error-message">
            {errors.staffEmail.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="staffPhone">
          Referring Staff Member&apos;s Phone <sup>*</sup>
        </label>
        <input {...register('staffPhone')} id="staffPhone" type="text" />
        {errors.staffPhone && (
          <p style={styles.errorMessage} className="error-message">
            {errors.staffPhone.message}
          </p>
        )}
      </div>
      <h2>Patient Information</h2>
      <div>
        <label htmlFor="patientFirstName">
          First Name <sup>*</sup>
        </label>
        <input {...register('patientFirstName')} id="patientFirstName" type="text" />
        {errors.patientFirstName && (
          <p style={styles.errorMessage} className="error-message">
            {errors.patientFirstName.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="patientLastName">
          Last Name <sup>*</sup>
        </label>
        <input {...register('patientLastName')} id="patientLastName" type="text" />
        {errors.patientLastName && (
          <p style={styles.errorMessage} className="error-message">
            {errors.patientLastName.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="dob">
          Date Of Birth <sup>*</sup>
        </label>
        <input {...register('dob')} id="dob" type="text" />
        {errors.dob && (
          <p style={styles.errorMessage} className="error-message">
            {errors.dob.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="patientAddress">
          Address <sup>*</sup>
        </label>
        <input {...register('patientAddress')} id="PatientAddress" type="text" />
        {errors.patientAddress && (
          <p style={styles.errorMessage} className="error-message">
            {errors.patientAddress.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="patientPhone">
          Phone <sup>*</sup>
        </label>
        <input {...register('patientPhone')} id="patientPhone" type="text" />
        {errors.patientPhone && (
          <p style={styles.errorMessage} className="error-message">
            {errors.patientPhone.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="diagnosis">
          Patient Diagnosis <sup>*</sup>
        </label>
        <input {...register('diagnosis')} id="diagnosis" type="text" />
        {errors.diagnosis && (
          <p style={styles.errorMessage} className="error-message">
            {errors.diagnosis.message}
          </p>
        )}
      </div>
      <div>
        {/*TODO: REFACTOR*/}
        <label>
          Is this a:<sup>*</sup>
          <span>(choose one or more)</span>
        </label>
        <br />
        <input
          type="checkbox"
          {...register('newReoccMetastasis')}
          id="DiagType_0"
          value="New Diagnosis"
        />
        <label htmlFor="DiagType_0">New Diagnosis</label>
        <br />
        <input
          type="checkbox"
          {...register('newReoccMetastasis')}
          id="DiagType_1"
          value="Metastasis"
        />
        <label htmlFor="DiagType_1">Metastasis</label>
        <br />
        <input
          type="checkbox"
          {...register('newReoccMetastasis')}
          id="DiagType_2"
          value="Recurrence"
        />
        <label htmlFor="DiagType_2">Recurrence</label>
        <br />
        {errors.newReoccMetastasis && (
          <p style={styles.errorMessage} className="error-message">
            {errors.newReoccMetastasis.message}
          </p>
        )}
      </div>
      <div>
        {/*TODO: REFACTOR*/}
        <label>
          Reason for Referral<sup>*</sup>
          <span>(choose all that apply)</span>
        </label>
        <br />
        <input
          type="checkbox"
          {...register('reasonForTheReferral')}
          id="ReferralReason_0"
          value="2nd Opinion"
        />
        <label htmlFor="ReferralReason_0">2nd Opinion</label>
        <br />
        <input
          type="checkbox"
          {...register('reasonForTheReferral')}
          id="ReferralReason_1"
          value="Clinical Trial"
        />
        <label htmlFor="ReferralReason_1">Clinical Trial</label>
        <br />
        <input
          type="checkbox"
          {...register('reasonForTheReferral')}
          id="ReferralReason_2"
          value="..."
        />
        <label htmlFor="ReferralReason_1">...</label>
        <br />
        <input
          type="checkbox"
          {...register('reasonForTheReferral')}
          id="ReferralReason_111"
          value="Other procedure"
        />
        <label htmlFor="ReferralReason_111">Other procedure</label>
        <br />
        <input type="text" {...register('reasonForTheReferralOther')} id="OtherProcedure" />
        {errors.reasonForTheReferral && (
          <p style={styles.errorMessage} className="error-message">
            {errors.reasonForTheReferral.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="preferredProvider">Preferred Provider and/or Specialty, if known:</label>
        <textarea {...register('preferredProvider')} id="preferredProvider" />
      </div>
      <div>
        <label htmlFor="schedulingPreferences">Scheduling Preferences:</label>
        <textarea {...register('schedulingPreferences')} id="schedulingPreferences" />
      </div>
      <div>
        <label>Is this referral for clinical trial evaluation?</label>
        <br />
        <label htmlFor="ClinicalTrial_Option1">
          <input
            value="yes"
            {...register('referralForClinicalTrial')}
            type="radio"
            id="ClinicalTrial_Option1"
          />
          <span>Yes</span>
        </label>
        <br />
        <label htmlFor="ClinicalTrial_Option2">
          <input
            value="no"
            {...register('referralForClinicalTrial')}
            type="radio"
            id="ClinicalTrial_Option2"
          />
          <span>No</span>
        </label>
      </div>
      <div>
        <label>If referred for Clinical Trial:</label>
        <br />
        <label htmlFor="CT_Eligible_Option1">
          <input
            value="yes"
            {...register('wouldRefProvBeOkWith')}
            type="radio"
            id="CT_Eligible_Option1"
          />
          <span>OK with a chart review for eligibility</span>
        </label>
        <br />
        <label htmlFor="ClinicalTrial_Option2">
          <input
            value="no"
            {...register('wouldRefProvBeOkWith')}
            type="radio"
            id="ClinicalTrial_Option2"
          />
          <span>Would like patient to be seen regardless of eligibility</span>
        </label>
      </div>
      <div>
        <label>Does the patient know about the Referral?</label>
        <br />
        <label htmlFor="Patient_Knows_About_Referral_Option1">
          <input
            value="yes"
            {...register('patientKnowsAboutReferral')}
            type="radio"
            id="Patient_Knows_About_Referral_Option1"
          />
          <span>Yes, the patient knows</span>
        </label>
        <br />
        <label htmlFor="Patient_Knows_About_Referral_Option1">
          <input
            value="no"
            {...register('patientKnowsAboutReferral')}
            type="radio"
            id="Patient_Knows_About_Referral_Option2"
          />
          <span>No, the patient is unaware</span>
        </label>
      </div>
      <div>
        <label htmlFor="Comments">Comments</label>
        <textarea {...register('comments')} id="Comments" />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default withDatasourceCheck()<PCNReferralFormProps>(PCNReferralFormComponent);
