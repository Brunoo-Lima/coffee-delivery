import Container from '../utilities/Container';
import { MapPinLine } from '@phosphor-icons/react';

import FormInputs from '../forms/FormInputs';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/cart/actions';
import { useNavigate } from 'react-router-dom';

const OrderForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOrderFinished = () => {
    navigate('/orderFinished');
    dispatch(clearCart());
  };

  return (
    <section className="py-10">
      <Container>
        <div className="flex justify-center md:gap-x-10 gap-x-0 md:px-0 px-6">
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
              <FormInputs handleOrderFinished={handleOrderFinished} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OrderForm;
