import Input from './Input';
import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from 'react-redux';
import { saveFormData } from '../../redux/forms/actions';
import Radio from './Radio';
import { forwardRef } from 'react';
import { toast } from 'react-toastify';

const createAddressUserSchema = z.object({
  zipCode: z.coerce
    .string()
    .min(8, 'Mínimo de 8 caracteres')
    .max(8, 'Máximo de 8 caracteres'),
  street: z
    .string()
    .min(1, 'Informe a rua')
    .transform((street) => {
      return street
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(' ');
    }),
  number: z.string().min(1, 'Informe o número'),
  complement: z.string(),
  neighborhood: z
    .string()
    .min(1, 'Informe o bairro')
    .transform((neighborhood) => {
      return neighborhood
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(' ');
    }),
  city: z
    .string()
    .min(1, 'Informe a cidade')
    .transform((city) => {
      return city
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(' ');
    }),
  state: z
    .string()
    .min(1, 'Informe a UF')
    .transform((state) => state.toLocaleUpperCase()),
  paymentMethod: z.enum(['Crédito', 'Débito', 'Dinheiro']),
});

type CreateAddressUserFormData = z.infer<typeof createAddressUserSchema>;

const FormInputs = forwardRef<HTMLFormElement>((_props, ref) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAddressUserFormData>({
    resolver: zodResolver(createAddressUserSchema),
  });
  const dispatch = useDispatch();

  const createAddress = (data: CreateAddressUserFormData) => {
    dispatch(saveFormData(data));
    toast.success('Dados salvos!');
  };

  return (
    <form onSubmit={handleSubmit(createAddress)} ref={ref}>
      <div className="grid grid-cols-1 pr-4">
        <div className="md:w-[200px] w-full">
          <Input
            placeholder="CEP"
            {...register('zipCode', { valueAsNumber: true, required: true })}
          />
          {errors.zipCode && (
            <span className="text-base_text text-sm font-semibold ml-2">
              {errors.zipCode.message}
            </span>
          )}
        </div>

        <div className="w-full">
          <Input placeholder="Rua" {...register('street')} />
          {errors.street && (
            <span className="text-base_text text-sm font-semibold ml-2">
              {errors.street.message}
            </span>
          )}
        </div>

        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-20 gap-x-2">
          <div className="md:w-[200px]">
            <Input
              placeholder="Número"
              {...register('number', { required: true })}
            />
            {errors.number && (
              <span className="text-base_text text-sm font-semibold ml-2">
                {errors.number.message}
              </span>
            )}
          </div>
          <div className="md:col-span-2">
            <Input
              placeholder="Complemento (Opcional)"
              {...register('complement')}
            />
            {errors.complement && (
              <span className="text-base_text text-sm font-semibold ml-2">
                {errors.complement.message}
              </span>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-forms grid-cols-1 gap-2">
          <div className="w-full">
            <Input placeholder="Bairro" {...register('neighborhood')} />
            {errors.neighborhood && (
              <span className="text-base_text text-sm font-semibold ml-2">
                {errors.neighborhood.message}
              </span>
            )}
          </div>
          <div className="grid grid-cols-2 md:gap-x-36 gap-x-2">
            <div className="md:w-[200px] w-full">
              <Input placeholder="Cidade" {...register('city')} />
              {errors.city && (
                <span className="text-base_text text-sm font-semibold ml-2">
                  {errors.city.message}
                </span>
              )}
            </div>
            <div className="w-[100px]">
              <div className="w-[60px]">
                <Input placeholder="UF" {...register('state')} />
              </div>
              {errors.state && (
                <span className="text-base_text text-sm font-semibold ml-2">
                  {errors.state.message}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="py-4">
        <div className="bg-base_card rounded-md p-1 mt-4">
          <div className="flex flex-col">
            <div className="flex flex-wrap gap-2 px-1 mb-1">
              <CurrencyDollar size={20} className="text-purple" />
              <h2 className="font-roboto font-normal text-base text-base_subtitle">
                Pagamento
              </h2>
            </div>

            <div className="mb-6 md:ml-9 ml-3">
              <p className="font-roboto text-sm text-base_text font-normal">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>

          <ul className="flex flex-wrap gap-2 justify-around">
            <Radio
              value={'Crédito'}
              icon={CreditCard}
              id={'field-credit'}
              text={'Cartão de Crédito'}
              {...register('paymentMethod')}
            />
            <Radio
              value={'Débito'}
              icon={Bank}
              id={'field-debit'}
              text={'Cartão de Débito'}
              {...register('paymentMethod')}
            />
            <Radio
              value={'Dinheiro'}
              icon={Money}
              id={'field-cash'}
              text={'Dinheiro'}
              {...register('paymentMethod')}
            />
          </ul>
        </div>
      </div>

      <button
        className="bg-yellow p-2 ml-2 mt-4 w-28 rounded-md hover:bg-yellow_dark transition duration-300"
        type="submit"
      >
        <p className="text-white text-base font-roboto font-bold uppercase">
          Salvar
        </p>
      </button>
    </form>
  );
});

export default FormInputs;
