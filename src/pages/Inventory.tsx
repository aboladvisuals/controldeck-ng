import { Card, CardHeader, ExceptionBanner, SectionTitle, StatCard, Badge } from '../components/ui'
import { inventory } from '../data/mockData'
import { naira, num } from '../utils/format'

export default function Inventory() {
  const low = inventory.items.filter((i) => i.status === 'low')
  const totalValue = inventory.items.reduce((s, i) => s + i.value, 0)
  const j = inventory.jollofVariance

  return (
    <div>
      <SectionTitle title="Inventory" subtitle="Stock · movements · wastage · expected vs actual" />

      <ExceptionBanner>
        Jollof Rice example — expected {naira(j.expected)} vs actual {naira(j.actual)} (variance {naira(j.variance)}). Yield / portioning exception requiring management review.
      </ExceptionBanner>

      <div className="mb-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard label="Stock value" value={naira(totalValue, true)} tone="gold" />
        <StatCard label="SKUs tracked" value={String(inventory.items.length)} />
        <StatCard label="Low stock" value={String(low.length)} tone="warning" hint={low.map((i) => i.name).join(', ')} />
        <StatCard label="Jollof variance" value={naira(j.variance, true)} tone="danger" hint="Expected vs actual COGS" />
      </div>

      <div className="mb-4 grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2 overflow-hidden">
          <CardHeader title="Stock levels" subtitle="Reorder flags highlighted" />
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-navy-800/50 text-[11px] uppercase tracking-wider text-cream/45">
                <tr>
                  <th className="px-4 py-3 font-medium">SKU</th>
                  <th className="px-4 py-3 font-medium">Item</th>
                  <th className="px-4 py-3 font-medium">Stock</th>
                  <th className="px-4 py-3 font-medium">Reorder</th>
                  <th className="px-4 py-3 font-medium">Value</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-700/60">
                {inventory.items.map((i) => (
                  <tr key={i.sku} className="hover:bg-navy-800/40">
                    <td className="px-4 py-3 font-mono text-xs text-cream/50">{i.sku}</td>
                    <td className="px-4 py-3 text-cream">{i.name}</td>
                    <td className="px-4 py-3 tabular-nums text-cream">
                      {num(i.stock)} {i.unit}
                    </td>
                    <td className="px-4 py-3 tabular-nums text-cream/50">{num(i.reorder)}</td>
                    <td className="px-4 py-3 tabular-nums text-gold-400">{naira(i.value, true)}</td>
                    <td className="px-4 py-3">
                      <Badge tone={i.status === 'low' ? 'warning' : 'success'}>{i.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader title="Expected vs actual" subtitle="Jollof Rice COGS (week)" />
            <div className="space-y-3 p-4">
              <div className="flex justify-between text-sm">
                <span className="text-cream/50">Expected</span>
                <span className="tabular-nums text-cream">{naira(j.expected)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-cream/50">Actual</span>
                <span className="tabular-nums text-cream">{naira(j.actual)}</span>
              </div>
              <div className="flex justify-between border-t border-navy-700/60 pt-3 text-sm">
                <span className="font-medium text-danger">Variance</span>
                <span className="tabular-nums font-semibold text-danger">{naira(j.variance)}</span>
              </div>
              <p className="text-xs leading-relaxed text-cream/40">{j.note}</p>
            </div>
          </Card>

          <Card>
            <CardHeader title="Wastage (week)" />
            <ul className="divide-y divide-navy-700/60 px-4">
              {inventory.wastage.map((w) => (
                <li key={w.item} className="flex items-center justify-between py-3 text-sm">
                  <span className="text-cream/70">{w.item}</span>
                  <span className="tabular-nums text-cream">
                    {naira(w.value, true)} <span className="text-cream/40">({w.pct}%)</span>
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader title="Recent movements" />
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-navy-800/50 text-[11px] uppercase tracking-wider text-cream/45">
              <tr>
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 font-medium">Item</th>
                <th className="px-4 py-3 font-medium">Type</th>
                <th className="px-4 py-3 font-medium">Qty</th>
                <th className="px-4 py-3 font-medium">Branch</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-700/60">
              {inventory.movements.map((m, idx) => (
                <tr key={idx} className="hover:bg-navy-800/40">
                  <td className="px-4 py-3 text-cream/60">{m.date}</td>
                  <td className="px-4 py-3 text-cream">{m.item}</td>
                  <td className="px-4 py-3">
                    <Badge tone={m.type === 'Receipt' ? 'success' : 'info'}>{m.type}</Badge>
                  </td>
                  <td className={`px-4 py-3 tabular-nums ${m.qty < 0 ? 'text-warning' : 'text-success'}`}>
                    {m.qty > 0 ? '+' : ''}
                    {m.qty}
                  </td>
                  <td className="px-4 py-3 text-cream/70">{m.branch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
