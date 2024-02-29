import { formActionTypes } from './action-types';

interface FormData {
  zipCode: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: string[];
}

export type FormsState = { formData: FormData };

const initialState: FormsState = {
  formData: {
    zipCode: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    paymentMethod: [],
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Action = { type: string; payload: any };

const formReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case formActionTypes.SAVE_FORMS:
      return {
        ...state,
        formData: action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;
