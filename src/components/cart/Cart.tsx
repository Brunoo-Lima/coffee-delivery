import Container from '../utilities/Container';
import Address from '../forms/Address';

const Cart = () => {
  return (
    <section className="py-10">
      <Container>
        <div className="grid grid-cols-cart">
          <div className="w-[640px]">
            <h1 className="text-subtitle font-bold text-lg font-baloo2 mb-4">
              Complete seu pedido
            </h1>

            <Address />
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
