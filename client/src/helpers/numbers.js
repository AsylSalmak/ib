export const formatToCurrencyNumber = (numb) =>
  isNaN(numb) ? numb : (+numb).toLocaleString("ru", { minimumFractionDigits: 2 });
