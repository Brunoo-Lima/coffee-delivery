import Input from './Input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from 'react-redux';
import { saveFormData } from '../../redux/forms/actions';

const createAddressUserSchema = z.object({
  zipCode: z.coerce.string({ invalid_type_error: 'Informe o CEP' }),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Informe o número'),
  complement: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe a UF'),
});

type CreateAddressUserFormData = z.infer<typeof createAddressUserSchema>;

const FormInputs = () => {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm<CreateAddressUserFormData>({
    resolver: zodResolver(createAddressUserSchema),
  });
  const dispatch = useDispatch();
  // const selectPaymentMethod = watch('paymentMethod');

  const createAddress = (data: CreateAddressUserFormData) => {
    dispatch(saveFormData(data));
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(createAddress)}>
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

      <button
        className="bg-yellow py-1 px-2 ml-2 mt-4 w-24 rounded-md hover:bg-yellow_dark "
        type="submit"
      >
        <p className="text-white text-base font-roboto font-bold uppercase">
          Salvar
        </p>
      </button>
    </form>
  );
};

export default FormInputs;
