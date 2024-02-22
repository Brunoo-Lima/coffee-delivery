import Input from './Input';
import { MapPinLine } from '@phosphor-icons/react';

const Address = () => {
  return (
    <form>
      <div className="bg-base_card p-10">
        <div className="flex gap-2">
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

        <div className="grid grid-cols-1">
          <div className="w-[200px]">
            <Input type="text" placeholder="CEP" />
          </div>
          <Input type="text" placeholder="Rua" />

          <div className="grid grid-cols-3 gap-16">
            <div className="w-[200px]">
              <Input type="text" placeholder="Número" />
            </div>
            <div className="col-span-2">
              <Input type="text" placeholder="Complemento" />
            </div>
          </div>

          <div className="grid grid-cols-forms gap-2">
            <div className="w-[200px]">
              <Input type="text" placeholder="Bairro" />
            </div>
            <div className="col-start-2 col-end-3">
              <Input type="text" placeholder="Cidade" />
            </div>
            <div className="w-[60px]">
              <Input type="text" placeholder="UF" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Address;
