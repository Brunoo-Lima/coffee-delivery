import Container from '../utilities/Container';
import Delivery from '/images/delivery.svg';

import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';

const OrderFinished = () => {
  return (
    <section className="pt-10">
      <Container>
        <div className="flex md:justify-between relative md:px-0 px-6">
          <div className="relative">
            <h1 className="font-extrabold md:text-3xl text-2xl text-yellow_dark">
              Uhu! Pedido confirmado
            </h1>
            <p className="font-normal font-roboto text-xl text-base_subtitle my-1">
              Agora é só aguardar que logo o café chegará até você
            </p>

            <div className="mt-8 bg-gradient-to-r from-yellow_dark to-purple rounded-se-[3rem] rounded-es-[3rem] rounded-md p-0.5">
              <div className="p-9 bg-white rounded-se-[2.8rem] rounded-es-[2.8rem] rounded-[4px]">
                <div className="flex sm:flex-row items-center gap-2 ">
                  <div className="bg-purple p-2 rounded-full">
                    <MapPin size={20} weight="fill" color="#ffffff" />
                  </div>

                  <p className="sm:w-3/5 font-roboto text-base_text text-base">
                    Entrega em <strong>Rua João Daniel Martinelli, 102 </strong>
                    Farrapos - Porto Alegre, RS
                  </p>
                </div>

                <div className="flex items-center gap-2 my-8">
                  <div className="bg-yellow p-2 rounded-full">
                    <Timer size={20} weight="fill" color="#ffffff" />
                  </div>
                  <p className="w-36 font-roboto text-base_text text-base">
                    Previsão de entrega <strong>20 min - 30 min</strong>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-yellow_dark p-2 rounded-full">
                    <CurrencyDollar size={20} color="#ffffff" />
                  </div>
                  <p className="w-44 font-roboto text-base_text text-base">
                    Pagamento na entrega <strong>Cartão de Crédito</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute xl:block hidden bottom-0 -mb-4 right-0">
            <img
              src={Delivery}
              alt="Imagem de entrega"
              width={492}
              height={293}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OrderFinished;
