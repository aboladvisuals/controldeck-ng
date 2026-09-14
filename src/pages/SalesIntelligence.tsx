import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from 'recharts'
import { Card, CardHeader, SectionTitle, Badge, StatCard } from '../components/ui'
import { businessUnits, paymentMethods, kpi } from '../data/mockData'
import { naira, num, pct } from '../utils/format'

const chartTooltip = {
  contentStyle: {
    background: '#0b1f3a',
    border: '1px solid #1a3a5c',
    borderRadius: 8,
    fontSize: 12,
  },
}

export default function SalesIntelligence() {
  const restClub = businessUnits
    .filter((u) => u.unit === 'Restaurant' || u.unit === 'Club/Lounge')
    .reduce((s, u) => s + u.share, 0)

  return (
    <div>
      <SectionTitle
        title="Sales Intelligence"
        subtitle="Restaurant · Bar · Bakery · Club/Lounge · Delivery · Campus · Other"
      />

      <div className="mb-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard label="YTD Sales" value={naira(kpi.sales, true)} tone="gold" />
        <StatCard label="Restaurant + Club" value={pct(restClub)} hint="≈ 66.5% of revenue" tone="success" />
        <StatCard label="Total transactions" value={num(businessUnits.reduce((s, u) => s + u.txns, 0))} />
        <StatCard label="Blended avg ticket" value={naira(Math.round(kpi.sales / businessUnits.reduce((s, u) => s + u.txns, 0)))} />
      </div>

      <div className="mb-4 overflow-x-auto rounded-xl border border-navy-700/80">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-navy-900 text-[11px] uppercase tracking-wider text-cream/45">
            <tr>
              <th className="px-4 py-3 font-medium">Unit</th>
              <th className="px-4 py-3 font-medium">Revenue</th>
              <th className="px-4 py-3 font-medium">Txns</th>
              <th className="px-4 py-3 font-medium">Avg ticket</th>
              <th className="px-4 py-3 font-medium">Growth</th>
              <th className="px-4 py-3 font-medium">Margin</th>
              <th className="px-4 py-3 font-medium">Share</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-700/60 bg-navy-900/50">
            {businessUnits.map((u) => (
              <tr key={u.unit} className="hover:bg-navy-800/40">
                <td className="px-4 py-3 font-medium text-cream">{u.unit}</td>
                <td className="px-4 py-3 tabular-nums text-gold-400">{naira(u.revenue, true)}</td>
                <td className="px-4 py-3 tabular-nums text-cream/80">{num(u.txns)}</td>
                <td className="px-4 py-3 tabular-nums text-cream/80">{naira(u.avgTicket)}</td>
                <td className="px-4 py-3">
                  <Badge tone={u.growth >= 5 ? 'success' : u.growth < 0 ? 'warning' : 'neutral'}>
                    {u.growth >= 0 ? '+' : ''}
                    {pct(u.growth)}
                  </Badge>
                </td>
                <td className="px-4 py-3 tabular-nums text-cream/80">{pct(u.margin)}</td>
                <td className="px-4 py-3 tabular-nums text-cream/60">{pct(u.share)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader title="Revenue by unit" subtitle="₦ millions" />
          <div className="h-72 p-3 sm:p-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={businessUnits.map((u) => ({ ...u, revM: Math.round(u.revenue / 1_000_000) }))}>
                <CartesianGrid stroke="#1a3a5c" strokeDasharray="3 3" />
                <XAxis dataKey="unit" tick={{ fill: '#f5f0e680', fontSize: 10 }} axisLine={false} tickLine={false} interval={0} angle={-20} textAnchor="end" height={60} />
                <YAxis tick={{ fill: '#f5f0e680', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip {...chartTooltip} />
                <Bar dataKey="revM" name="Revenue ₦M" fill="#d4a017" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <CardHeader title="Payment methods" subtitle="Cash · POS · Transfer · Card · USSD" />
          <div className="h-72 p-3 sm:p-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={paymentMethods}>
                <CartesianGrid stroke="#1a3a5c" strokeDasharray="3 3" />
                <XAxis dataKey="method" tick={{ fill: '#f5f0e680', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#f5f0e680', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip
                  {...chartTooltip}
                  formatter={(v, _n, item) => {
                    const row = item?.payload as { share?: number } | undefined
                    return [`${naira(Number(v), true)} (${pct(row?.share ?? 0)})`, 'Amount']
                  }}
                />
                <Legend />
                <Bar dataKey="amount" name="Amount" fill="#5b9fd4" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  )
}
