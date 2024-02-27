import { Minus, Plus } from '@phosphor-icons/react';

type QuantityInputProps = {
  handleIncreaseProductQuantity?: () => void;
  handleDecreaseProductQuantity?: () => void;
  quantity?: number;
};

const QuantityInput = ({
  handleIncreaseProductQuantity,
  handleDecreaseProductQuantity,
  quantity,
}: QuantityInputProps) => {
  return (
    <div className="flex justify-between items-center gap-2 bg-base_button w-[4.8rem] px-2 rounded-md">
      <button onClick={handleDecreaseProductQuantity}>
        <Minus
          size={13}
          className="text-purple hover:text-purple_dark transition duration-300"
        />
      </button>
      <p className="text-base">{quantity}</p>
      <button onClick={handleIncreaseProductQuantity}>
        <Plus
          size={13}
          className="text-purple hover:text-purple_dark transition duration-300"
        />
      </button>
    </div>
  );
};

export default QuantityInput;
