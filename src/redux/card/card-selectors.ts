import { RootState } from '../root-reducer';

export const selectProductCount = (rootReducer: RootState) => {
  return rootReducer.cardReducer.products.reduce(
    (acc: number, curr: { quantity: number }) => acc + curr.quantity,
    0
  );
};
