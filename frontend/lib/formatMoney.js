export default function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  };

  const formatter = new Intl.NumberFormat('pt-br', options);
  return formatter.format(amount / 100);
}
