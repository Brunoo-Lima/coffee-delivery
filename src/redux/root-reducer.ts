import { combineReducers } from 'redux';
import cartReducer, { CartState } from './cart/reducer';
import formReducer, { FormsState } from './forms/reducer';

export type RootState = {
  cartReducer: CartState;
  formReducer: FormsState;
};

const rootReducer = combineReducers({ cartReducer, formReducer });

export default rootReducer;
