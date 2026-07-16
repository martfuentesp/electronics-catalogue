export function formatPrice(value) {
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2,
    }).format(value)
  } catch {
    return `$${Number(value).toFixed(2)}`
  }
}
