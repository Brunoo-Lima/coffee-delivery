import Container from '../utilities/Container';
import Address from '../forms/Address';
import { MapPinLine } from '@phosphor-icons/react';

const Cart = () => {
  return (
    <section className="py-10">
      <Container>
        <div className="grid grid-cols-cart">
          <div className="w-[640px]">
            <h1 className="text-subtitle font-bold text-lg font-baloo2 mb-4">
              Complete seu pedido
            </h1>

            <div className="bg-base_card p-10">
              <div className="flex gap-2 px-2">
                <MapPinLine size={20} className="text-yellow_dark" />
                <div className="mb-6">
                  <h2 className="font-second font-normal text-base text-base_text">
                    Endereço de Entrega
                  </h2>
                  <p className="font-second text-sm text-base_text font-normal">
                    Informe o endereço onde deseja receber seu pedido
                  </p>
                </div>
              </div>

              <Address />
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
