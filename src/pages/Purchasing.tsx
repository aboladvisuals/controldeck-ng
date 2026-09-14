import { Card, CardHeader, SectionTitle, StatCard, Badge } from '../components/ui'
import { purchasing } from '../data/mockData'
import { naira, pct } from '../utils/format'

export default function Purchasing() {
  const outstandingTotal = purchasing.outstandingPOs.reduce((s, p) => s + p.amount, 0)

  return (
    <div>
      <SectionTitle
        title="Purchasing"
        subtitle="Nigerian suppliers · POs · price changes · recommended buys"
      />

      <div className="mb-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard label="Active suppliers" value={String(purchasing.suppliers.length)} />
        <StatCard label="Outstanding POs" value={naira(outstandingTotal, true)} tone="warning" />
        <StatCard label="Price pressure" value="Rice +8.1%" hint="Chicken +12%" tone="danger" />
        <StatCard label="Top recommended" value="350kg rice" tone="gold" hint="Jollof + Campus stock" />
      </div>

      <div className="mb-4 grid gap-4 lg:grid-cols-2">
        <Card className="overflow-hidden">
          <CardHeader title="Suppliers" subtitle="Local / national partners" />
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-navy-800/50 text-[11px] uppercase tracking-wider text-cream/45">
                <tr>
                  <th className="px-4 py-3 font-medium">Supplier</th>
                  <th className="px-4 py-3 font-medium">Category</th>
                  <th className="px-4 py-3 font-medium">Outstanding</th>
                  <th className="px-4 py-3 font-medium">Reliability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-700/60">
                {purchasing.suppliers.map((s) => (
                  <tr key={s.name} className="hover:bg-navy-800/40">
                    <td className="px-4 py-3">
                      <p className="font-medium text-cream">{s.name}</p>
                      <p className="text-[11px] text-cream/40">Last order {s.lastOrder}</p>
                    </td>
                    <td className="px-4 py-3 text-cream/60">{s.category}</td>
                    <td className="px-4 py-3 tabular-nums text-gold-400">{naira(s.outstanding, true)}</td>
                    <td className="px-4 py-3">
                      <Badge tone={s.reliability >= 95 ? 'success' : 'neutral'}>{pct(s.reliability, 0)}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <CardHeader title="Recommended buys" subtitle="Next week prioritised" />
          <ul className="divide-y divide-navy-700/60">
            {purchasing.recommendedBuys.map((r) => (
              <li key={r.item} className="flex items-start justify-between gap-3 px-4 py-3">
                <div>
                  <p className="font-medium text-cream">{r.item}</p>
                  <p className="text-xs text-gold-400/90">{r.qty}</p>
                  <p className="mt-1 text-xs text-cream/45">{r.reason}</p>
                </div>
                <Badge tone={r.urgency === 'High' ? 'danger' : 'warning'}>{r.urgency}</Badge>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="overflow-hidden lg:col-span-2">
          <CardHeader title="Recent purchases" />
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-navy-800/50 text-[11px] uppercase tracking-wider text-cream/45">
                <tr>
                  <th className="px-4 py-3 font-medium">PO</th>
                  <th className="px-4 py-3 font-medium">Supplier</th>
                  <th className="px-4 py-3 font-medium">Item</th>
                  <th className="px-4 py-3 font-medium">Amount</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-700/60">
                {purchasing.recentPurchases.map((p) => (
                  <tr key={p.po} className="hover:bg-navy-800/40">
                    <td className="px-4 py-3 font-mono text-xs text-cream/50">{p.po}</td>
                    <td className="px-4 py-3 text-cream">{p.supplier}</td>
                    <td className="px-4 py-3 text-cream/70">{p.item}</td>
                    <td className="px-4 py-3 tabular-nums text-gold-400">{naira(p.amount, true)}</td>
                    <td className="px-4 py-3">
                      <Badge
                        tone={
                          p.status === 'Received' ? 'success' : p.status === 'In transit' ? 'info' : 'warning'
                        }
                      >
                        {p.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader title="Price changes" />
            <ul className="divide-y divide-navy-700/60 px-4">
              {purchasing.priceChanges.map((p) => (
                <li key={p.item} className="py-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-cream">{p.item}</span>
                    <Badge tone="danger">+{pct(p.change)}</Badge>
                  </div>
                  <p className="mt-1 text-xs text-cream/45">
                    {naira(p.from)} → {naira(p.to)}
                  </p>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <CardHeader title="Outstanding POs" />
            <ul className="divide-y divide-navy-700/60 px-4">
              {purchasing.outstandingPOs.map((p) => (
                <li key={p.po} className="py-3 text-sm">
                  <div className="flex justify-between">
                    <span className="font-mono text-xs text-cream/50">{p.po}</span>
                    <span className="tabular-nums text-gold-400">{naira(p.amount, true)}</span>
                  </div>
                  <p className="mt-1 text-xs text-cream/60">
                    {p.supplier} · due {p.due}
                  </p>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  )
}
