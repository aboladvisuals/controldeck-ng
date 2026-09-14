import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Card, CardHeader, ExceptionBanner, SectionTitle, StatCard, Badge } from '../components/ui'
import { costCategories, costTrend, kpi } from '../data/mockData'
import { naira, pct } from '../utils/format'

const chartTooltip = {
  contentStyle: {
    background: '#0b1f3a',
    border: '1px solid #1a3a5c',
    borderRadius: 8,
    fontSize: 12,
  },
}

export default function CostProfitability() {
  const foodBev = costCategories
    .filter((c) => c.category === 'Food & Kitchen' || c.category === 'Beverages')
    .reduce((s, c) => s + c.share, 0)

  const budgetData = costCategories.map((c) => ({
    name: c.category.replace(' & Kitchen', ''),
    actual: Math.round(c.actual / 1_000_000),
    budget: Math.round(c.budget / 1_000_000),
    variance: Math.round((c.actual - c.budget) / 1_000_000),
  }))

  return (
    <div>
      <SectionTitle
        title="Cost & Profitability"
        subtitle="Food · Beverage · Labour · Rent · Utilities · Other"
      />

      <ExceptionBanner>
        Expense recording collapsed from April 2026 onward — posted food/bev costs drop sharply while sales continue. Apparent margin is unreliable until data quality is restored.
      </ExceptionBanner>

      <div className="mb-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard label="YTD Payments" value={naira(kpi.payments, true)} />
        <StatCard label="Food + Beverages" value={pct(foodBev)} hint="≈ 58.9% of payments" tone="warning" />
        <StatCard label="Reported gross margin" value={pct(kpi.grossMargin)} hint="Inflated by expense gap" tone="danger" />
        <StatCard label="Labour vs budget" value="Under" hint="₦382M vs ₦390M budget" tone="success" />
      </div>

      <div className="mb-4 overflow-x-auto rounded-xl border border-navy-700/80">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-navy-900 text-[11px] uppercase tracking-wider text-cream/45">
            <tr>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Actual</th>
              <th className="px-4 py-3 font-medium">Budget</th>
              <th className="px-4 py-3 font-medium">Variance</th>
              <th className="px-4 py-3 font-medium">Share of payments</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-700/60 bg-navy-900/50">
            {costCategories.map((c) => {
              const varN = c.actual - c.budget
              return (
                <tr key={c.category} className="hover:bg-navy-800/40">
                  <td className="px-4 py-3 font-medium text-cream">{c.category}</td>
                  <td className="px-4 py-3 tabular-nums text-cream">{naira(c.actual, true)}</td>
                  <td className="px-4 py-3 tabular-nums text-cream/60">{naira(c.budget, true)}</td>
                  <td className="px-4 py-3">
                    <Badge tone={varN > 0 ? 'warning' : varN < 0 ? 'success' : 'neutral'}>
                      {varN > 0 ? '+' : ''}
                      {naira(varN, true)}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 tabular-nums text-cream/70">{pct(c.share)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader title="Actual vs budget" subtitle="₦ millions" />
          <div className="h-72 p-3 sm:p-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={budgetData}>
                <CartesianGrid stroke="#1a3a5c" strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fill: '#f5f0e680', fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#f5f0e680', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip {...chartTooltip} />
                <Legend />
                <Bar dataKey="budget" name="Budget" fill="#254a72" radius={[4, 4, 0, 0]} />
                <Bar dataKey="actual" name="Actual" fill="#d4a017" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <CardHeader title="Cost trend" subtitle="₦M · collapse visible from Apr" />
          <div className="h-72 p-3 sm:p-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={costTrend}>
                <CartesianGrid stroke="#1a3a5c" strokeDasharray="3 3" />
                <XAxis dataKey="month" tick={{ fill: '#f5f0e680', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#f5f0e680', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip {...chartTooltip} />
                <Legend />
                <Area type="monotone" dataKey="food" name="Food" stackId="1" stroke="#d4a017" fill="#d4a01788" />
                <Area type="monotone" dataKey="bev" name="Beverage" stackId="1" stroke="#e8c547" fill="#e8c54766" />
                <Area type="monotone" dataKey="labour" name="Labour" stackId="1" stroke="#5b9fd4" fill="#5b9fd466" />
                <Area type="monotone" dataKey="other" name="Other" stackId="1" stroke="#254a72" fill="#254a72aa" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  )
}
