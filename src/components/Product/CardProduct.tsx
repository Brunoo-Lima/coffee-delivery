import { ShoppingCart } from '@phosphor-icons/react';
import QuantityInput from '../forms/QuantityInput';

interface CardProductProps {
  coffee: {
    id: number;
    image: string;
    altImg: string;
    tags: string[];
    title: string;
    description: string;
    price: number;
  };
}

const CardProduct = ({ coffee }: CardProductProps) => {
  return (
    <div className="bg-base_card w-[256px] h-[310px] relative flex p-4 rounded-se-[2.5rem] rounded-es-[2.5rem] rounded-tl-md rounded-br-md">
      <div className="absolute left-[25%] right-[25%] -top-5">
        <img src={coffee.image} alt={coffee.altImg} width={120} height={120} />
      </div>

      <div className="flex flex-col space-y-4 absolute bottom-5 left-0 right-0 px-4">
        <div className="flex flex-row gap-2 justify-center items-center">
          {coffee.tags.map((tags) => (
            <span className="mt-2 uppercase text-yellow_dark font-bold text-[0.625rem] bg-yellow_light text-center p-2 py-1 rounded-full">
              {tags}
            </span>
          ))}
        </div>

        <p className="font-baloo2 font-bold text-xl text-center text-base_subtitle">
          {coffee.title}
        </p>

        <p className="text-base_label font-roboto font-normal text-sm text-center">
          {coffee.description}
        </p>

        <div className="flex justify-between items-center px-2">
          <p className="text-base_text font-baloo2 font-bold text-xl">
            <span className="text-sm font-normal mr-1">R$</span>
            {coffee.price.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>

          <div className="flex gap-x-2">
            <QuantityInput />

            <button className="bg-purple_dark p-2 rounded-md hover:bg-purple transition duration-300">
              <ShoppingCart size={20} fill="#ffffff" weight="fill" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
