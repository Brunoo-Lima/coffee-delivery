import { Trash } from '@phosphor-icons/react';
import QuantityInput from '../forms/QuantityInput';
import { useDispatch } from 'react-redux';
import {
  decreaseProductQuantity,
  increaseProductQuantity,
  removeProduct,
} from '../../redux/cart/actions';
import { formatCurrency } from '../utilities/formatCurrency';

type CartItemsProps = {
  product: {
    id: number;
    image: string;
    altImg: string;
    tags: string[];
    title: string;
    description: string;
    price: number;
    quantity: number;
  };
};

const CartItems = ({ product }: CartItemsProps) => {
  const dispatch = useDispatch();

  const handleIncreaseProductQuantity = () => {
    dispatch(increaseProductQuantity(product.id));
  };

  const handleDecreaseProductQuantity = () => {
    dispatch(decreaseProductQuantity(product.id));
  };

  const handleRemoveProductToCart = () => {
    dispatch(removeProduct(product.id));
  };

  return (
    <li className="border-b border-b-base_button">
      <div className="flex md:justify-between justify-center gap-4 md:w-[348px] my-6 px-5">
        <img src={product.image} alt={product.altImg} className="size-16" />

        <div className="flex md:flex-row md:justify-between flex-col flex-wrap">
          <p className="mb-2 font-roboto font-normal text-base text-base_subtitle">
            {product.title}
          </p>

          <p className="font-roboto font-base font-bold text-base_text mb-2">
            {formatCurrency(product.price)}
          </p>

          <div className="flex gap-2">
            <QuantityInput
              handleIncreaseProductQuantity={handleIncreaseProductQuantity}
              handleDecreaseProductQuantity={handleDecreaseProductQuantity}
              quantity={product.quantity}
            />
            <button
              className="bg-base_button px-1 flex justify-center items-center gap-1 rounded-md md:w-[91px] w-12 h-8 hover:bg-base_hover"
              onClick={handleRemoveProductToCart}
            >
              <Trash size={16} className="text-purple" />
              <p className="md:block hidden font-roboto font-normal text-xs text-base_text uppercase">
                Remover
              </p>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItems;
