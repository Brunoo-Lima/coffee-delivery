import { Trash } from '@phosphor-icons/react';
import capuccino from '/images/coffees/americano.png';
import QuantityInput from '../forms/QuantityInput';

const CartItems = () => {
  return (
    <li className="border-b border-b-base_button">
      <div className="flex md:justify-between justify-evenly md:gap-4 gap-0 md:w-[368px] my-6">
        <div className="max-sm:hidden">
          <img src={capuccino} alt="Icone" width={64} height={64} />
        </div>

        <div>
          <div className="flex md:gap-x-16 gap-x-12 flex-wrap">
            <p className="mb-2 font-roboto font-normal text-base text-base_subtitle">
              Expresso Tradicional
            </p>

            <p className="font-roboto font-base font-bold text-base_text">
              R$ 19,80
            </p>
          </div>
          <div className="flex gap-2">
            <QuantityInput />
            <button className="bg-base_button px-1 flex items-center gap-1 rounded-md w-[91px] h-8">
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
