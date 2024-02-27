import { combineReducers } from 'redux';
import cartReducer, { CartState } from './cart/reducer';

export type RootState = {
  cartReducer: CartState;
};

const rootReducer = combineReducers({ cartReducer });

export default rootReducer;
