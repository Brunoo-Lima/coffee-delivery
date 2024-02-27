import { RootState } from '../root-reducer';

export const selectProductsCount = (rootReducer: RootState) => {
  return rootReducer.cartReducer.products.reduce(
    (acc: number, curr: { quantity: number }) => acc + curr.quantity,
    0
  );
};
