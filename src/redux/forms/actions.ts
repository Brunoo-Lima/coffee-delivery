import { formActionTypes } from './action-types';

interface FormData {
  zipCode: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: 'Crédito' | 'Débito' | 'Dinheiro';
}

export const saveFormData = (payload: FormData) => ({
  type: formActionTypes.SAVE_FORMS,
  payload,
});
