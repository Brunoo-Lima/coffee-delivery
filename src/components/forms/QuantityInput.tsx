import { Minus, Plus } from '@phosphor-icons/react';

const QuantityInput = () => {
  return (
    <div className="flex justify-between items-center gap-2 bg-base_button w-[4.8rem] px-2 rounded-md">
      <button>
        <Minus
          size={13}
          className="text-purple hover:text-purple_dark transition duration-300"
        />
      </button>
      <p className="text-base">1</p>
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
