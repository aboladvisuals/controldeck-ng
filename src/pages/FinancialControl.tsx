import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Card, CardHeader, ExceptionBanner, SectionTitle, StatCard, Badge } from '../components/ui'
import { financialExceptions } from '../data/mockData'
import { naira, num, pct } from '../utils/format'

const chartTooltip = {
  contentStyle: {
    background: '#0b1f3a',
    border: '1px solid #1a3a5c',
    borderRadius: 8,
    fontSize: 12,
  },
}

const exceptionBars = [
  { name: 'No payee', count: financialExceptions.paymentsNoPayee.count, value: financialExceptions.paymentsNoPayee.value },
  { name: 'No reference', count: financialExceptions.receiptsNoReference.count, value: financialExceptions.receiptsNoReference.value },
  { name: 'No description', count: financialExceptions.receiptsNoDescription.count, value: financialExceptions.receiptsNoDescription.value },
  { name: 'Missing Paid By', count: financialExceptions.missingPaidBy.count, value: financialExceptions.missingPaidBy.value },
  { name: 'Unreconciled', count: financialExceptions.unreconciled.count, value: financialExceptions.unreconciled.value },
  { name: 'Duplicates', count: financialExceptions.duplicates.count, value: financialExceptions.duplicates.value },
  { name: 'Mismatches', count: financialExceptions.mismatches.count, value: financialExceptions.mismatches.value },
]

const reconPie = [
  { name: 'Matched', value: financialExceptions.bankRecon.matched, color: '#2dd4a8' },
  { name: 'Pending', value: financialExceptions.bankRecon.pending, color: '#f5a524' },
  { name: 'Exception', value: financialExceptions.bankRecon.exception, color: '#f07178' },
]

export default function FinancialControl() {
  const fx = financialExceptions
  return (
    <div>
      <SectionTitle
        title="Financial Control Centre"
        subtitle="Data-quality exceptions · management review queue — not fraud accusations"
      />

      <ExceptionBanner>
        Language policy: every item below is flagged as an exception requiring management review. Values are from the analysis dataset.
      </ExceptionBanner>

      <div className="mb-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard
          label="Payments no payee"
          value={num(fx.paymentsNoPayee.count)}
          hint={`${naira(fx.paymentsNoPayee.value, true)} value`}
          tone="danger"
        />
        <StatCard
          label="Receipts no reference"
          value={num(fx.receiptsNoReference.count)}
          hint={`${naira(fx.receiptsNoReference.value, true)} value`}
          tone="warning"
        />
        <StatCard
          label="Receipts no description"
          value={num(fx.receiptsNoDescription.count)}
          hint={`${naira(fx.receiptsNoDescription.value, true)} value`}
          tone="warning"
        />
        <StatCard
          label="Missing Paid By"
          value={num(fx.missingPaidBy.count)}
          hint={`${naira(fx.missingPaidBy.value, true)} value`}
        />
      </div>

      <div className="mb-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard label="Unreconciled" value={num(fx.unreconciled.count)} hint={naira(fx.unreconciled.value, true)} tone="warning" />
        <StatCard label="Duplicates" value={num(fx.duplicates.count)} hint={naira(fx.duplicates.value, true)} />
        <StatCard label="Mismatches" value={num(fx.mismatches.count)} hint={naira(fx.mismatches.value, true)} />
        <StatCard label="Bank recon matched" value={pct(fx.bankRecon.matched)} hint={`Last: ${fx.bankRecon.lastRun}`} tone="success" />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader title="Exception values" subtitle="Count of records by exception type" />
          <div className="h-72 p-3 sm:p-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={exceptionBars} layout="vertical" margin={{ left: 8, right: 16 }}>
                <CartesianGrid stroke="#1a3a5c" strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" tick={{ fill: '#f5f0e680', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="name" width={110} tick={{ fill: '#f5f0e6cc', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip
                  {...chartTooltip}
                  formatter={(v, _n, item) => {
                    const row = item?.payload as { value?: number } | undefined
                    return [`${num(Number(v))} · ${naira(row?.value ?? 0, true)}`, 'Count']
                  }}
                />
                <Bar dataKey="count" radius={[0, 6, 6, 0]} fill="#d4a017" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <CardHeader title="Bank reconciliation status" subtitle="Mock Moniepoint / Paystack feeds" />
          <div className="h-48 p-2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={reconPie} dataKey="value" nameKey="name" innerRadius={48} outerRadius={72} paddingAngle={3}>
                  {reconPie.map((e) => (
                    <Cell key={e.name} fill={e.color} />
                  ))}
                </Pie>
                <Tooltip {...chartTooltip} formatter={(v) => [`${Number(v)}%`, 'Share']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <ul className="space-y-2 px-4 pb-4">
            {reconPie.map((r) => (
              <li key={r.name} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-cream/70">
                  <span className="h-2 w-2 rounded-full" style={{ background: r.color }} />
                  {r.name}
                </span>
                <span className="tabular-nums text-cream">{pct(r.value)}</span>
              </li>
            ))}
          </ul>
          <div className="border-t border-navy-700/60 px-4 py-3">
            <Badge tone="warning">Exception requiring management review</Badge>
            <p className="mt-2 text-xs text-cream/45">
              19,146 payments (~₦2.10B) have no payee. Assign ownership before month-end close.
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
