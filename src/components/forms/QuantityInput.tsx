import { Minus, Plus } from '@phosphor-icons/react';
import { useSelector } from 'react-redux';
import { selectProductsCount } from '../../redux/cart/cart-selectors';

const QuantityInput = () => {
  const productCount = useSelector(selectProductsCount);

  return (
    <div className="flex justify-between items-center gap-2 bg-base_button w-[4.8rem] px-2 rounded-md">
      <button>
        <Minus
          size={13}
          className="text-purple hover:text-purple_dark transition duration-300"
        />
      </button>
      <p className="text-base">{productCount}</p>
      <button>
        <Plus
          size={13}
          className="text-purple hover:text-purple_dark transition duration-300"
        />
      </button>
    </div>
  );
};

export default QuantityInput;
