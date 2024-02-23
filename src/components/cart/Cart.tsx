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

const Cart = () => {
  return (
    <section className="py-10">
      <Container>
        <div className="grid grid-cols-cart">
          <div className="w-[640px]">
            <h1 className="text-subtitle font-bold text-lg font-baloo2 mb-4">
              Complete seu pedido
            </h1>

            <div className="bg-base_card p-10 rounded-md">
              <div className="flex gap-2 px-2">
                <MapPinLine size={20} className="text-yellow_dark" />
                <div className="mb-6">
                  <h2 className="font-roboto font-normal text-base text-base_text">
                    Endereço de Entrega
                  </h2>
                  <p className="font-roboto text-sm text-base_text font-normal">
                    Informe o endereço onde deseja receber seu pedido
                  </p>
                </div>
              </div>

              <Address />
            </div>

            <div className="mt-4">
              <div className="bg-base_card p-10 rounded-md">
                <div className="flex gap-2 px-2">
                  <CurrencyDollar size={20} className="text-purple" />

                  <div className="mb-6">
                    <h2 className="font-roboto font-normal text-base text-base_subtitle">
                      Pagamento
                    </h2>

                    <p className="font-roboto text-sm text-base_text font-normal">
                      O pagamento é feito na entrega. Escolha a forma que deseja
                      pagar
                    </p>
                  </div>
                </div>

                <ul className="flex gap-4 justify-around">
                  <Radio icon={CreditCard} text={'Cartão de Crédito'} />
                  <Radio icon={Bank} text={'Cartão de Débito'} />
                  <Radio icon={Money} text={'Dinheiro'} />
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h1>Cafés selecionados</h1>

            <div></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cart;
