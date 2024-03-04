import cartActionTypes from './action-types';

interface Coffee {
  id: number;
  title: string;
  image: string;
  altImg: string;
  tags: string[];
  description: string;
  price: number;
}

export const addProductToCart = (payload: Coffee) => ({
  type: cartActionTypes.ADD_PRODUCT,
  payload,
});

export const removeProduct = (payload: number) => ({
  type: cartActionTypes.REMOVE_PRODUCT,
  payload,
});

export const increaseProductQuantity = (payload: number) => ({
  type: cartActionTypes.INCREASE_PRODUCT_QUANTITY,
  payload,
});

export const decreaseProductQuantity = (payload: number) => ({
  type: cartActionTypes.DECREASE_PRODUCT_QUANTITY,
  payload,
});

export const clearCart = () => ({
  type: cartActionTypes.ClEAR_CART,
});
