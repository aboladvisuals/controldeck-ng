import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {
  LayoutDashboard,
  ShieldAlert,
  TrendingUp,
  PieChart,
  Package,
  ShoppingCart,
  Bot,
  Bell,
  Menu,
  X,
  Building2,
} from 'lucide-react'
import { IntegrationBadges } from '../components/ui'

const nav = [
  { to: '/', label: 'CEO Home', icon: LayoutDashboard },
  { to: '/financial', label: 'Financial Control', icon: ShieldAlert },
  { to: '/sales', label: 'Sales Intelligence', icon: TrendingUp },
  { to: '/costs', label: 'Cost & Profitability', icon: PieChart },
  { to: '/inventory', label: 'Inventory', icon: Package },
  { to: '/purchasing', label: 'Purchasing', icon: ShoppingCart },
  { to: '/ai', label: 'AI CEO Assistant', icon: Bot },
  { to: '/alerts', label: 'Executive Alerts', icon: Bell },
]

export default function AppShell() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
      isActive
        ? 'bg-gold-500/15 text-gold-400 border border-gold-500/25'
        : 'text-cream/70 hover:bg-navy-800 hover:text-cream border border-transparent'
    }`

  const sidebar = (
    <div className="flex h-full flex-col">
      <div className="border-b border-navy-700/80 px-4 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-800 border border-gold-500/40">
            <Building2 className="h-5 w-5 text-gold-400" />
          </div>
          <div>
            <p className="font-display text-lg leading-tight text-gold-400">ControlDeck NG</p>
            <p className="text-[10px] uppercase tracking-wider text-cream/40">Restaurant BI & Control</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto p-3">
        {nav.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass} onClick={() => setOpen(false)}>
            <item.icon className="h-4 w-4 shrink-0 opacity-80" />
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="border-t border-navy-700/80 p-4">
        <p className="mb-2 text-[10px] uppercase tracking-wider text-cream/35">Integrations</p>
        <IntegrationBadges />
        <p className="mt-3 text-[10px] text-cream/30">POC · Mock data · Sep 2026</p>
      </div>
    </div>
  )

  return (
    <div className="flex min-h-full bg-navy-950">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-navy-700/80 bg-navy-900 lg:block">
        {sidebar}
      </aside>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <aside className="absolute inset-y-0 left-0 w-72 border-r border-navy-700 bg-navy-900 shadow-2xl">
            <button
              type="button"
              className="absolute right-3 top-4 rounded-lg p-2 text-cream/60 hover:bg-navy-800"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
            {sidebar}
          </aside>
        </div>
      )}

      <div className="flex min-h-full flex-1 flex-col lg:pl-64">
        <header className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-navy-700/80 bg-navy-950/90 px-4 py-3 backdrop-blur sm:px-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="rounded-lg border border-navy-700 p-2 text-cream/70 hover:bg-navy-800 lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="lg:hidden">
              <p className="font-display text-base text-gold-400">ControlDeck NG</p>
            </div>
            <div className="hidden sm:block">
              <p className="text-xs text-cream/45">Abuja Main · Wuse II · Campus Outlet</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden items-center gap-1.5 rounded-full border border-navy-700 bg-navy-900 px-2.5 py-1 text-[11px] text-cream/55 md:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-soft" />
              Offline sync
            </span>
            <span className="rounded-full border border-gold-500/30 bg-gold-500/10 px-2.5 py-1 text-[11px] font-medium text-gold-400">
              CEO Demo
            </span>
          </div>
        </header>
        <main className="flex-1 p-4 sm:p-6 animate-fade-in">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
