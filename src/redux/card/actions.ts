import cardActionTypes from './action-types';

export const increaseProductQuantity = (payload: number) => ({
  type: cardActionTypes.INCREASE_PRODUCT_QUANTITY,
  payload,
});

export const decreaseProductQuantity = (payload: number) => ({
  type: cardActionTypes.INCREASE_PRODUCT_QUANTITY,
  payload,
});
