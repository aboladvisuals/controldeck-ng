import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { AlertTriangle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card, CardHeader, SectionTitle, StatCard, Badge } from '../components/ui'
import { alerts, branches, businessUnits, kpi, revenueTrend } from '../data/mockData'
import { naira, pct } from '../utils/format'

const chartTooltip = {
  contentStyle: {
    background: '#0b1f3a',
    border: '1px solid #1a3a5c',
    borderRadius: 8,
    fontSize: 12,
  },
  labelStyle: { color: '#f5f0e6' },
}

export default function CeoHome() {
  const critical = alerts.filter((a) => a.severity === 'critical').slice(0, 3)

  return (
    <div>
      <SectionTitle
        title="CEO Home"
        subtitle="Today’s pulse · YTD grounded in ₦2.888B sales analysis"
      />

      <div className="mb-4 grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-6">
        <StatCard label="Today revenue" value={naira(kpi.todayRevenue, true)} tone="gold" />
        <StatCard label="Today payments" value={naira(kpi.todayPayments, true)} />
        <StatCard label="Cash / POS on hand" value={naira(kpi.todayCash, true)} />
        <StatCard label="Today expenses" value={naira(kpi.todayExpenses, true)} />
        <StatCard label="Gross margin" value={pct(kpi.grossMargin)} hint="Treat with caution — expense quality" tone="warning" />
        <StatCard label="Receivables" value={naira(kpi.receivables, true)} />
      </div>

      <div className="mb-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard label="YTD Sales" value={naira(kpi.sales, true)} tone="gold" hint="Analysis figure" />
        <StatCard label="YTD Receipts" value={naira(kpi.receipts, true)} />
        <StatCard label="YTD Payments" value={naira(kpi.payments, true)} />
        <StatCard label="Cash / Bank" value={naira(kpi.cashBank, true)} hint="Position" tone="success" />
      </div>

      <div className="mb-4 grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader title="Revenue & expense trend" subtitle="₦ millions · note expense collapse Apr 2026+" />
          <div className="h-64 p-3 sm:h-72 sm:p-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueTrend}>
                <defs>
                  <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#d4a017" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#d4a017" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="exp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#5b9fd4" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#5b9fd4" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#1a3a5c" strokeDasharray="3 3" />
                <XAxis dataKey="month" tick={{ fill: '#f5f0e680', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#f5f0e680', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip {...chartTooltip} />
                <Area type="monotone" dataKey="revenue" name="Revenue" stroke="#d4a017" fill="url(#rev)" strokeWidth={2} />
                <Area type="monotone" dataKey="expenses" name="Expenses" stroke="#5b9fd4" fill="url(#exp)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <CardHeader
            title="Critical alerts"
            action={
              <Link to="/alerts" className="text-xs text-gold-400 hover:underline">
                View all
              </Link>
            }
          />
          <ul className="space-y-3 p-4">
            {critical.map((a) => (
              <li key={a.id} className="rounded-lg border border-danger/25 bg-danger/5 p-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-danger" />
                  <div>
                    <p className="text-sm font-medium text-cream">{a.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-cream/50">{a.detail}</p>
                    <p className="mt-1.5 text-[10px] text-cream/35">{a.area} · {a.time}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {branches.map((b) => (
          <Card key={b.id} className="p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-cream">{b.name}</h3>
              <Badge tone={b.status === 'strong' ? 'success' : b.status === 'watch' ? 'warning' : 'neutral'}>
                {b.status}
              </Badge>
            </div>
            <p className="mt-3 text-2xl font-semibold tabular-nums text-gold-400">{naira(b.revenue, true)}</p>
            <div className="mt-3 flex gap-4 text-xs text-cream/50">
              <span>Growth {b.growth >= 0 ? '+' : ''}{pct(b.growth)}</span>
              <span>Margin {pct(b.margin)}</span>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
        {businessUnits.map((u) => (
          <Card key={u.unit} className="p-3">
            <p className="text-[11px] uppercase tracking-wider text-cream/45">{u.unit}</p>
            <p className="mt-1 text-sm font-semibold tabular-nums text-cream">{naira(u.revenue, true)}</p>
            <p className="mt-0.5 text-[11px] text-cream/40">{pct(u.share)} of revenue</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
