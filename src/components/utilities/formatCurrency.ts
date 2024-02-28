export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-br', {
    currency: 'BRL',
    style: 'currency',
  }).format(value);
};

export const formatCurrency2 = (value: number, value2: number) => {
  return new Intl.NumberFormat('pt-br', {
    currency: 'BRL',
    style: 'currency',
  }).format(value + value2);
};
