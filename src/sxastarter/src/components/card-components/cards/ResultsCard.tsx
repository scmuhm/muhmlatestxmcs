import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { Card } from '@components/card-components/cards/Card';

export type ResultsCard = Card & {
  fields: {
    showSpecialty: Field<boolean>;
    Specialty: Field<string>;
  };
};
