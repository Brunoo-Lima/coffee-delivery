import Plus from '../assets/plus.svg';
import Minus from '../assets/minus.svg';
import Cart from '../assets/cart.svg';

type ListProductsProps = {
  imgUrl: string;
  altImg: string;
  type: string[];
  name: string;
  description: string;
  price: number;
};

const ListProduct = ({
  type,
  imgUrl,
  altImg,
  name,
  description,
  price,
}: ListProductsProps) => {
  return (
    <div className="bg-card w-[256px] h-[310px] relative flex p-4">
      <div className="absolute left-[25%] right-[25%] -top-5">
        <img src={imgUrl} alt={altImg} width={120} height={120} className="" />
      </div>

      <div className="flex flex-col space-y-4 absolute bottom-5 left-0 right-0 px-5">
        <div className="flex fle-row gap-2 justify-center items-center">
          {type.map((type) => (
            <span className="mt-2 uppercase text-yellow_dark font-bold text-[0.625rem] bg-yellow_light text-center p-2 py-1 rounded-full">
              {type}
            </span>
          ))}
        </div>

        <p className="text-subtitle font-bold text-xl text-center">{name}</p>

        <p className="text-describe font-second font-normal text-sm text-center">
          {description}
        </p>

        <div className="flex justify-between items-center">
          <p className="text-texts font-second font-bold text-xl">
            {price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>

          <div className="flex gap-x-4">
            <div className="flex items-center gap-2 bg-btn_quantity p-2 rounded-md">
              <img src={Minus} alt="Icone de diminuir quantidade" />
              <span>1</span>
              <img src={Plus} alt="Icone de aumentar quantidade" />
            </div>

            <button className="bg-purple_dark p-2 rounded-md">
              <img src={Cart} alt="Icone de carrinho de compras" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
