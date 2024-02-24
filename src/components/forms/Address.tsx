import Input from './Input';

const Address = () => {
  return (
    <form>
      <div className="grid grid-cols-1">
        <div className="w-[200px]">
          <Input type="text" placeholder="CEP" />
        </div>
        <Input type="text" placeholder="Rua" />

        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-16 gap-x-2">
          <div className="md:w-[200px]">
            <Input type="text" placeholder="Número" />
          </div>
          <div className="md:col-span-2">
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
    </form>
  );
};

export default Address;
