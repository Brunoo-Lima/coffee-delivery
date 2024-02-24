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

const Cart = () => {
  const navigate = useNavigate();

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

            <div className="bg-base_card p-10 rounded-md">
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <MapPinLine size={20} className="text-yellow_dark" />
                  <h2 className="font-roboto font-normal text-base text-base_text">
                    Endereço de Entrega
                  </h2>
                </div>
                <div className="mb-6 ml-7">
                  <p className="font-roboto text-sm text-base_text font-normal">
                    Informe o endereço onde deseja receber seu pedido
                  </p>
                </div>
              </div>

              <Address />
            </div>

            <div className="mt-4">
              <div className="bg-base_card p-10 rounded-md mt-4">
                <div className="flex flex-col">
                  <div className="flex flex-wrap gap-2 px-2">
                    <CurrencyDollar size={20} className="text-purple" />
                    <h2 className="font-roboto font-normal text-base text-base_subtitle">
                      Pagamento
                    </h2>
                  </div>

                  <div className="mb-6 ml-9">
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

          <div className="md:mt-0 mt-12 md:w-[448px] w-full">
            <h1 className="text-subtitle font-bold text-lg font-baloo2 mb-4">
              Cafés selecionados
            </h1>

            <div className="bg-base_card p-10 rounded-se-[4rem] rounded-es-[4rem] rounded-md">
              <ul className="">
                <CartItems />
                <CartItems />
              </ul>

              <div className="mt-8">
                <div className="flex flex-col gap-y-2">
                  <div className="flex justify-between">
                    <p className="font-roboto font-normal text-sm text-base_text">
                      Total dos itens
                    </p>
                    <p className="font-roboto text-base_text text-base">
                      R$ 29,70
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-roboto font-normal text-sm text-base_text">
                      Entrega
                    </p>
                    <p className="font-roboto text-base_text text-base">
                      R$ 3,50
                    </p>
                  </div>

                  <div className="flex justify-between">
                    <p className="font-roboto text-base_text text-xl font-bold">
                      Total
                    </p>
                    <p className="font-roboto text-base_text text-xl font-bold">
                      R$ 33,20
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
