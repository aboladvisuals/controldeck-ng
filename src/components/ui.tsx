import type { ReactNode } from 'react'

export function Card({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-xl border border-navy-700/80 bg-navy-900/80 shadow-lg shadow-black/20 ${className}`}
    >
      {children}
    </div>
  )
}

export function CardHeader({
  title,
  subtitle,
  action,
}: {
  title: string
  subtitle?: string
  action?: ReactNode
}) {
  return (
    <div className="flex items-start justify-between gap-3 border-b border-navy-700/60 px-4 py-3 sm:px-5">
      <div>
        <h3 className="text-sm font-semibold tracking-wide text-cream">{title}</h3>
        {subtitle && <p className="mt-0.5 text-xs text-cream/50">{subtitle}</p>}
      </div>
      {action}
    </div>
  )
}

export function StatCard({
  label,
  value,
  hint,
  tone = 'default',
}: {
  label: string
  value: string
  hint?: string
  tone?: 'default' | 'gold' | 'success' | 'warning' | 'danger'
}) {
  const valueColor =
    tone === 'gold'
      ? 'text-gold-400'
      : tone === 'success'
        ? 'text-success'
        : tone === 'warning'
          ? 'text-warning'
          : tone === 'danger'
            ? 'text-danger'
            : 'text-cream'
  return (
    <Card className="p-4 sm:p-5">
      <p className="text-[11px] font-medium uppercase tracking-wider text-cream/45">{label}</p>
      <p className={`mt-1.5 text-xl font-semibold tabular-nums sm:text-2xl ${valueColor}`}>{value}</p>
      {hint && <p className="mt-1 text-xs text-cream/40">{hint}</p>}
    </Card>
  )
}

export function Badge({
  children,
  tone = 'neutral',
}: {
  children: ReactNode
  tone?: 'neutral' | 'gold' | 'success' | 'warning' | 'danger' | 'info'
}) {
  const styles = {
    neutral: 'bg-navy-700 text-cream/80',
    gold: 'bg-gold-500/20 text-gold-400 border border-gold-500/30',
    success: 'bg-success/15 text-success border border-success/25',
    warning: 'bg-warning/15 text-warning border border-warning/25',
    danger: 'bg-danger/15 text-danger border border-danger/25',
    info: 'bg-info/15 text-info border border-info/25',
  }
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium ${styles[tone]}`}>
      {children}
    </span>
  )
}

export function SectionTitle({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-5">
      <h2 className="font-display text-2xl text-cream sm:text-3xl">{title}</h2>
      {subtitle && <p className="mt-1 text-sm text-cream/50">{subtitle}</p>}
    </div>
  )
}

export function ExceptionBanner({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 rounded-lg border border-warning/30 bg-warning/10 px-4 py-3 text-sm text-warning">
      <span className="font-semibold">Exception requiring management review</span>
      <span className="text-warning/80"> — {children}</span>
    </div>
  )
}

export function IntegrationBadges() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge tone="info">Moniepoint · mock</Badge>
      <Badge tone="info">Paystack · mock</Badge>
      <Badge tone="gold">
        <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse-soft" />
        Offline sync ready
      </Badge>
    </div>
  )
}
