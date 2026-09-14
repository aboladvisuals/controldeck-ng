export function naira(value: number, compact = false): string {
  if (compact) {
    const abs = Math.abs(value)
    if (abs >= 1_000_000_000) {
      return `₦${(value / 1_000_000_000).toLocaleString('en-NG', { maximumFractionDigits: 2 })}B`
    }
    if (abs >= 1_000_000) {
      return `₦${(value / 1_000_000).toLocaleString('en-NG', { maximumFractionDigits: 1 })}M`
    }
    if (abs >= 1_000) {
      return `₦${(value / 1_000).toLocaleString('en-NG', { maximumFractionDigits: 0 })}K`
    }
  }
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(value)
}

export function num(value: number): string {
  return new Intl.NumberFormat('en-NG').format(value)
}

export function pct(value: number, digits = 1): string {
  return `${value.toFixed(digits)}%`
}
