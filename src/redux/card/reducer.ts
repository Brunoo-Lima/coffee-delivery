import Product from '../../components/Product/Products';
import cardActionTypes from './action-types';

interface Product {
  id: number;
  imgUrl: string;
  altImg: string;
  type: string[];
  name: string;
  description: string;
  price: number;
  quantity: number;
}

export type CardState = { products: Product[] };

const initialState: CardState = { products: [] };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Action = { type: string; payload: any };

const cardReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case cardActionTypes.INCREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };

    case cardActionTypes.DECREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: state.products
          .map((product) =>
            product.id === action.payload
              ? { ...product, quantity: product.quantity - 1 }
              : product
          )
          .filter((product) => product.quantity > 0),
      };

    default:
      return state;
  }
};

export default cardReducer;
