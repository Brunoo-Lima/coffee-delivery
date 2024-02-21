import { combineReducers } from 'redux';
import cardReducer, { CardState } from './card/reducer';

export type RootState = {
  cardReducer: CardState;
};

const rootReducer = combineReducers({ cardReducer });

export default rootReducer;
