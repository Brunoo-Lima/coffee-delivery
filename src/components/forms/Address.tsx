import Input from './Input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { forwardRef } from 'react';

//TO-DO: resolver bug do zod

const createAddressUserSchema = z.object({
  zipCode: z.number({ invalid_type_error: 'Informe o CEP' }),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Informe o número'),
  complement: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe a UF'),
});

type CreateAddressUserFormData = z.infer<typeof createAddressUserSchema>;

type AddressProps = {
  order: string;
};

const Address = forwardRef<HTMLFormElement, AddressProps>(({ order }, ref) => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<CreateAddressUserFormData>({
    resolver: zodResolver(createAddressUserSchema),
  });

  const createAddress = (data: CreateAddressUserFormData) => {
    console.log({ data });
  };

  return (
    <form id={order} onSubmit={handleSubmit(createAddress)} ref={ref}>
      <div className="grid grid-cols-1 pr-4">
        <div className="md:w-[200px] w-full">
          <Input
            type="text"
            placeholder="CEP"
            {...register('zipCode', { valueAsNumber: true })}
          />
          {/* {errors.zipCode && <span>{errors.zipCode.message}</span>} */}
        </div>
        <div className="w-full">
          <Input
            type="text"
            placeholder="Rua"
            {...register('street', {
              required: 'Informe a rua',
            })}
          />
          {/* {errors.street && <span>{errors.street.message}</span>} */}
        </div>

        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-20 gap-x-2">
          <div className="md:w-[200px]">
            <Input type="text" placeholder="Número" {...register('number')} />
            {/* {errors.number && (
              <span className="w-[200px]">{errors.number.message}</span>
            )} */}
          </div>
          <div className="md:col-span-2">
            <Input
              type="text"
              placeholder="Complemento"
              {...register('complement')}
            />
            {/* {errors.complement && <span>{errors.complement.message}</span>} */}
          </div>
        </div>

        <div className="grid md:grid-cols-forms grid-cols-1 gap-2">
          <div className="w-full">
            <Input
              type="text"
              placeholder="Bairro"
              {...register('neighborhood')}
            />
            {/* {errors.neighborhood && <span>{errors.neighborhood.message}</span>} */}
          </div>
          <div className="grid grid-cols-2 md:gap-x-36 gap-x-2">
            <div className="md:w-[200px] w-full">
              <Input type="text" placeholder="Cidade" {...register('city')} />
              {/* {errors.city && <span>{errors.city.message}</span>} */}
            </div>
            <div className="w-[60px]">
              <Input type="text" placeholder="UF" {...register('state')} />
              {/* {errors.state && <span>{errors.state.message}</span>} */}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
});

export default Address;
