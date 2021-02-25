export default function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  };

  // Checar se o valor não possui cents
  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }
  const formatter = new Intl.NumberFormat('pt-br', options);
  return formatter.format(amount / 100);
}
