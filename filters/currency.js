export default function currencyFilter(value, currency = 'EUR') {
  return new Intl.NumberFormat('lv-LV', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2
  }).format(value)
}