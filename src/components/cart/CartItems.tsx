import { Trash } from '@phosphor-icons/react';
import QuantityInput from '../forms/QuantityInput';
import { useDispatch } from 'react-redux';
import {
  decreaseProductQuantity,
  increaseProductQuantity,
  removeProduct,
} from '../../redux/cart/actions';

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
      <div className="flex md:justify-between justify-evenly md:gap-4 gap-0 md:w-[368px] my-6">
        <img src={product.image} alt={product.altImg} className="size-16" />

        <div className="flex justify-between md:flex-row flex-col flex-wrap">
          <p className="mb-2 font-roboto font-normal text-base text-base_subtitle">
            {product.title}
          </p>

          <p className="font-roboto font-base font-bold text-base_text mb-2">
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>

          <div className="flex gap-2">
            <QuantityInput
              handleIncreaseProductQuantity={handleIncreaseProductQuantity}
              handleDecreaseProductQuantity={handleDecreaseProductQuantity}
              quantity={product.quantity}
            />
            <button
              className="bg-base_button px-1 flex items-center gap-1 rounded-md w-[91px] h-8"
              onClick={handleRemoveProductToCart}
            >
              <Trash size={16} className="text-purple" />
              <p className="font-roboto font-normal text-xs text-base_text uppercase">
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
