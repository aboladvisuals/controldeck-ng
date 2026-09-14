import { AlertTriangle, Bell, CheckCircle2, MessageCircle } from 'lucide-react'
import { Card, SectionTitle, Badge, StatCard } from '../components/ui'
import { alerts } from '../data/mockData'

const order = { critical: 0, warning: 1, normal: 2 } as const

export default function ExecutiveAlerts() {
  const sorted = [...alerts].sort((a, b) => order[a.severity] - order[b.severity])
  const counts = {
    critical: alerts.filter((a) => a.severity === 'critical').length,
    warning: alerts.filter((a) => a.severity === 'warning').length,
    normal: alerts.filter((a) => a.severity === 'normal').length,
  }

  return (
    <div>
      <SectionTitle
        title="Executive Alerts"
        subtitle="Critical · Warning · Normal — ranked for CEO attention"
      />

      <div className="mb-4 grid grid-cols-3 gap-3">
        <StatCard label="Critical" value={String(counts.critical)} tone="danger" />
        <StatCard label="Warning" value={String(counts.warning)} tone="warning" />
        <StatCard label="Normal" value={String(counts.normal)} tone="success" />
      </div>

      <p className="mb-4 flex flex-wrap items-center gap-2 text-xs text-cream/45">
        <MessageCircle className="h-3.5 w-3.5 text-success" />
        WhatsApp notify available on flagged alerts (mock — tap hint only, no live send).
      </p>

      <div className="space-y-3">
        {sorted.map((a) => {
          const Icon =
            a.severity === 'critical' ? AlertTriangle : a.severity === 'warning' ? Bell : CheckCircle2
          const border =
            a.severity === 'critical'
              ? 'border-danger/30 bg-danger/5'
              : a.severity === 'warning'
                ? 'border-warning/30 bg-warning/5'
                : 'border-success/20 bg-success/5'
          const iconColor =
            a.severity === 'critical' ? 'text-danger' : a.severity === 'warning' ? 'text-warning' : 'text-success'
          const badgeTone =
            a.severity === 'critical' ? 'danger' : a.severity === 'warning' ? 'warning' : 'success'

          return (
            <Card key={a.id} className={`p-4 sm:p-5 ${border}`}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-3">
                  <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${iconColor}`} />
                  <div>
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <Badge tone={badgeTone}>{a.severity}</Badge>
                      <span className="text-[11px] text-cream/40">{a.area}</span>
                      <span className="text-[11px] text-cream/30">· {a.time}</span>
                    </div>
                    <h3 className="text-base font-semibold text-cream">{a.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-cream/55">{a.detail}</p>
                  </div>
                </div>
                {a.whatsapp && (
                  <button
                    type="button"
                    className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-lg border border-success/30 bg-success/10 px-3 py-1.5 text-xs font-medium text-success hover:bg-success/20"
                    title="Mock WhatsApp notify — not live"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    WhatsApp notify
                  </button>
                )}
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
