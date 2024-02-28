import Container from '../utilities/Container';
import Address from '../forms/Address';
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react';
import Radio from '../forms/Radio';
import CartItems from './CartItems';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CartState } from '../../redux/cart/reducer';
import { selectProductsTotalPrice } from '../../redux/cart/cart-selectors';
import { formatCurrency, formatCurrency2 } from '../utilities/formatCurrency';

const shippingFee = 3.5;

const Cart = () => {
  const navigate = useNavigate();
  const { products } = useSelector(
    (state: { cartReducer: CartState }) => state.cartReducer
  );

  const productsTotalPrice = useSelector(selectProductsTotalPrice);

  const confirmedBuyClick = () => {
    navigate('/orderFinished');
  };

  return (
    <section className="py-10">
      <Container>
        <div className="flex flex-wrap justify-center md:gap-x-10 gap-x-0 md:px-0 px-6">
          <div className="md:w-[640px] w-full">
            <h1 className="text-subtitle font-bold text-lg font-baloo2 mb-4">
              Complete seu pedido
            </h1>

            <div className="bg-base_card md:p-10 p-6 rounded-md">
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <MapPinLine size={20} className="text-yellow_dark" />
                  <h2 className="font-roboto font-normal text-base text-base_text">
                    Endereço de Entrega
                  </h2>
                </div>
                <div className="mb-6 md:ml-7 ml-2">
                  <p className="font-roboto text-sm text-base_text font-normal">
                    Informe o endereço onde deseja receber seu pedido
                  </p>
                </div>
              </div>

              <Address />
            </div>

            <div className="mt-4">
              <div className="bg-base_card md:p-10 p-6 rounded-md mt-4">
                <div className="flex flex-col">
                  <div className="flex flex-wrap gap-2 px-2 mb-1">
                    <CurrencyDollar size={20} className="text-purple" />
                    <h2 className="font-roboto font-normal text-base text-base_subtitle">
                      Pagamento
                    </h2>
                  </div>

                  <div className="mb-6 md:ml-9 ml-3">
                    <p className="font-roboto text-sm text-base_text font-normal">
                      O pagamento é feito na entrega. Escolha a forma que deseja
                      pagar
                    </p>
                  </div>
                </div>

                <ul className="flex flex-wrap gap-4 justify-around">
                  <Radio icon={CreditCard} text={'Cartão de Crédito'} />
                  <Radio icon={Bank} text={'Cartão de Débito'} />
                  <Radio icon={Money} text={'Dinheiro'} />
                </ul>
              </div>
            </div>
          </div>

          <div className="md:mt-0 mt-12 md:w-[448px] w-[450px]">
            <h1 className="text-subtitle font-bold text-lg font-baloo2 mb-4">
              Cafés selecionados
            </h1>

            <div className="bg-base_card md:p-10 p-8 rounded-se-[4rem] rounded-es-[4rem] rounded-md h-[580px]">
              <div className="overflow-hidden h-[300px]">
                <ul className="h-full overflow-y-auto">
                  {products.map((product) => (
                    <CartItems key={product.id} product={product} />
                  ))}
                </ul>
              </div>

              <div className="py-5">
                <div className="flex flex-col gap-y-2">
                  <div className="flex justify-between">
                    <p className="font-roboto font-normal text-sm text-base_text">
                      Total dos itens
                    </p>
                    <p className="font-roboto text-base_text text-base">
                      {formatCurrency(productsTotalPrice)}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-roboto font-normal text-sm text-base_text">
                      Entrega
                    </p>
                    <p className="font-roboto text-base_text text-base">
                      {formatCurrency(shippingFee)}
                    </p>
                  </div>

                  <div className="flex justify-between">
                    <p className="font-roboto text-base_text text-xl font-bold">
                      Total
                    </p>
                    <p className="font-roboto text-base_text text-xl font-bold">
                      {formatCurrency2(productsTotalPrice, shippingFee)}
                    </p>
                  </div>

                  <button
                    className="mt-4 bg-yellow hover:bg-yellow_dark text-white text-sm font-roboto font-bold uppercase h-12 rounded-md transition duration-300"
                    onClick={confirmedBuyClick}
                  >
                    Confirmar pedido
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cart;
