export const kpi = {
  sales: 2_888_000_000,
  receipts: 2_917_000_000,
  payments: 2_116_000_000,
  cashBank: 795_200_000,
  todayRevenue: 4_820_000,
  todayPayments: 3_140_000,
  todayCash: 1_280_000,
  todayExpenses: 2_450_000,
  grossMargin: 41.2,
  receivables: 48_600_000,
}

export const branches = [
  { id: 'abuja', name: 'Abuja Main', revenue: 1_420_000_000, growth: 8.4, margin: 42.1, status: 'strong' as const },
  { id: 'wuse', name: 'Wuse II', revenue: 968_000_000, growth: 3.2, margin: 39.8, status: 'stable' as const },
  { id: 'campus', name: 'Campus Outlet', revenue: 500_000_000, growth: -2.1, margin: 36.5, status: 'watch' as const },
]

export const paymentMethods = [
  { method: 'POS', amount: 1_120_000_000, share: 38.4 },
  { method: 'Transfer', amount: 890_000_000, share: 30.5 },
  { method: 'Cash', amount: 520_000_000, share: 17.8 },
  { method: 'Card', amount: 280_000_000, share: 9.6 },
  { method: 'USSD', amount: 107_000_000, share: 3.7 },
]

export const revenueTrend = [
  { month: 'Oct 25', revenue: 218, expenses: 142, margin: 42 },
  { month: 'Nov 25', revenue: 231, expenses: 148, margin: 43 },
  { month: 'Dec 25', revenue: 312, expenses: 198, margin: 41 },
  { month: 'Jan 26', revenue: 245, expenses: 165, margin: 40 },
  { month: 'Feb 26', revenue: 238, expenses: 158, margin: 41 },
  { month: 'Mar 26', revenue: 256, expenses: 172, margin: 39 },
  { month: 'Apr 26', revenue: 242, expenses: 95, margin: 48 },
  { month: 'May 26', revenue: 251, expenses: 88, margin: 51 },
  { month: 'Jun 26', revenue: 248, expenses: 82, margin: 52 },
  { month: 'Jul 26', revenue: 235, expenses: 79, margin: 50 },
  { month: 'Aug 26', revenue: 228, expenses: 76, margin: 49 },
  { month: 'Sep 26', revenue: 184, expenses: 61, margin: 47 },
]

export const businessUnits = [
  { unit: 'Restaurant', revenue: 1_120_000_000, txns: 142_800, avgTicket: 7_843, growth: 5.2, margin: 38.4, share: 38.8 },
  { unit: 'Club/Lounge', revenue: 800_000_000, txns: 48_200, avgTicket: 16_598, growth: 12.1, margin: 52.6, share: 27.7 },
  { unit: 'Bar', revenue: 420_000_000, txns: 96_400, avgTicket: 4_357, growth: 4.8, margin: 55.2, share: 14.5 },
  { unit: 'Bakery', revenue: 185_000_000, txns: 78_600, avgTicket: 2_354, growth: -1.4, margin: 34.1, share: 6.4 },
  { unit: 'Delivery', revenue: 168_000_000, txns: 52_100, avgTicket: 3_224, growth: 18.6, margin: 28.9, share: 5.8 },
  { unit: 'Campus', revenue: 125_000_000, txns: 61_300, avgTicket: 2_039, growth: -3.2, margin: 31.5, share: 4.3 },
  { unit: 'Other', revenue: 70_000_000, txns: 12_400, avgTicket: 5_645, growth: 1.1, margin: 40.0, share: 2.4 },
]

export const financialExceptions = {
  paymentsNoPayee: { count: 19_146, value: 2_100_000_000 },
  receiptsNoReference: { count: 33_605, value: 1_840_000_000 },
  receiptsNoDescription: { count: 24_159, value: 1_120_000_000 },
  missingPaidBy: { count: 207, value: 48_200_000 },
  unreconciled: { count: 1_842, value: 126_400_000 },
  duplicates: { count: 384, value: 22_800_000 },
  mismatches: { count: 156, value: 18_600_000 },
  bankRecon: {
    matched: 87.4,
    pending: 8.2,
    exception: 4.4,
    lastRun: '12 Sep 2026, 18:40 WAT',
  },
}

export const costCategories = [
  { category: 'Food & Kitchen', actual: 748_000_000, budget: 720_000_000, share: 35.3 },
  { category: 'Beverages', actual: 498_000_000, budget: 480_000_000, share: 23.5 },
  { category: 'Labour', actual: 382_000_000, budget: 390_000_000, share: 18.1 },
  { category: 'Rent', actual: 168_000_000, budget: 168_000_000, share: 7.9 },
  { category: 'Utilities', actual: 124_000_000, budget: 110_000_000, share: 5.9 },
  { category: 'Other', actual: 196_000_000, budget: 180_000_000, share: 9.3 },
]

export const costTrend = [
  { month: 'Jan', food: 68, bev: 42, labour: 34, other: 38 },
  { month: 'Feb', food: 65, bev: 40, labour: 33, other: 36 },
  { month: 'Mar', food: 72, bev: 45, labour: 35, other: 40 },
  { month: 'Apr', food: 38, bev: 22, labour: 28, other: 12 },
  { month: 'May', food: 35, bev: 20, labour: 29, other: 10 },
  { month: 'Jun', food: 32, bev: 18, labour: 30, other: 9 },
  { month: 'Jul', food: 30, bev: 17, labour: 28, other: 8 },
  { month: 'Aug', food: 28, bev: 16, labour: 29, other: 8 },
  { month: 'Sep', food: 22, bev: 12, labour: 22, other: 6 },
]

export const inventory = {
  items: [
    { sku: 'RICE-50', name: 'Rice (50kg bag)', stock: 420, unit: 'bags', reorder: 200, status: 'ok' as const, value: 84_000_000 },
    { sku: 'JOLLOF-KIT', name: 'Jollof Rice Kit', stock: 86, unit: 'kits', reorder: 100, status: 'low' as const, value: 12_400_000 },
    { sku: 'CHICKEN-W', name: 'Chicken (whole)', stock: 1_240, unit: 'pcs', reorder: 800, status: 'ok' as const, value: 18_600_000 },
    { sku: 'PALM-OIL', name: 'Palm Oil (25L)', stock: 48, unit: 'drums', reorder: 60, status: 'low' as const, value: 4_800_000 },
    { sku: 'HEINEKEN', name: 'Heineken (crate)', stock: 312, unit: 'crates', reorder: 150, status: 'ok' as const, value: 15_600_000 },
    { sku: 'GULDER', name: 'Gulder (crate)', stock: 98, unit: 'crates', reorder: 120, status: 'low' as const, value: 4_200_000 },
    { sku: 'PEPSI-PET', name: 'Pepsi PET (crate)', stock: 540, unit: 'crates', reorder: 200, status: 'ok' as const, value: 6_480_000 },
    { sku: 'FLOUR-25', name: 'Flour (25kg)', stock: 180, unit: 'bags', reorder: 100, status: 'ok' as const, value: 5_400_000 },
  ],
  movements: [
    { date: '12 Sep', item: 'Rice (50kg)', type: 'Issue', qty: -48, branch: 'Abuja Main' },
    { date: '12 Sep', item: 'Heineken', type: 'Issue', qty: -22, branch: 'Wuse II' },
    { date: '11 Sep', item: 'Chicken', type: 'Receipt', qty: 400, branch: 'Abuja Main' },
    { date: '11 Sep', item: 'Palm Oil', type: 'Issue', qty: -12, branch: 'Campus' },
    { date: '10 Sep', item: 'Gulder', type: 'Receipt', qty: 60, branch: 'Wuse II' },
  ],
  wastage: [
    { item: 'Produce / veg', value: 1_240_000, pct: 2.8 },
    { item: 'Prepared food', value: 890_000, pct: 1.9 },
    { item: 'Beverage spoilage', value: 310_000, pct: 0.4 },
  ],
  jollofVariance: {
    expected: 2_400_000,
    actual: 2_750_000,
    variance: 350_000,
    note: 'Expected vs actual COGS for Jollof Rice this week — investigate portioning & yield.',
  },
}

export const purchasing = {
  suppliers: [
    { name: 'Dangote Flour Mills', category: 'Staples', outstanding: 12_400_000, lastOrder: '08 Sep', reliability: 96 },
    { name: 'Chi Limited', category: 'Beverages', outstanding: 8_200_000, lastOrder: '10 Sep', reliability: 94 },
    { name: 'Farm Fresh Abuja', category: 'Produce', outstanding: 3_600_000, lastOrder: '12 Sep', reliability: 88 },
    { name: 'Nigerian Breweries', category: 'Beer', outstanding: 18_800_000, lastOrder: '09 Sep', reliability: 98 },
    { name: 'Honeywell Flour', category: 'Bakery', outstanding: 4_100_000, lastOrder: '07 Sep', reliability: 91 },
    { name: 'Olam Nigeria', category: 'Rice & grains', outstanding: 22_500_000, lastOrder: '05 Sep', reliability: 95 },
  ],
  recentPurchases: [
    { po: 'PO-4821', supplier: 'Olam Nigeria', item: 'Rice 50kg × 200', amount: 40_000_000, status: 'Received' },
    { po: 'PO-4822', supplier: 'Nigerian Breweries', item: 'Heineken + Gulder', amount: 14_200_000, status: 'In transit' },
    { po: 'PO-4823', supplier: 'Farm Fresh Abuja', item: 'Weekly produce', amount: 2_800_000, status: 'Received' },
    { po: 'PO-4824', supplier: 'Chi Limited', item: 'Soft drinks mix', amount: 5_600_000, status: 'Pending' },
  ],
  priceChanges: [
    { item: 'Rice 50kg', from: 185_000, to: 200_000, change: 8.1 },
    { item: 'Chicken (whole)', from: 12_500, to: 14_000, change: 12.0 },
    { item: 'Palm Oil 25L', from: 92_000, to: 98_000, change: 6.5 },
    { item: 'Heineken crate', from: 48_000, to: 49_500, change: 3.1 },
  ],
  outstandingPOs: [
    { po: 'PO-4810', supplier: 'Dangote Flour Mills', amount: 6_200_000, due: '15 Sep' },
    { po: 'PO-4815', supplier: 'Olam Nigeria', amount: 22_500_000, due: '18 Sep' },
    { po: 'PO-4820', supplier: 'Nigerian Breweries', amount: 18_800_000, due: '20 Sep' },
  ],
  recommendedBuys: [
    { item: 'Rice (50kg)', qty: '350kg equiv. / 7 bags', reason: 'Jollof demand + low Campus stock', urgency: 'High' },
    { item: 'Palm Oil 25L', qty: '20 drums', reason: 'Below reorder at Abuja Main', urgency: 'High' },
    { item: 'Gulder crates', qty: '40 crates', reason: 'Weekend club forecast', urgency: 'Medium' },
    { item: 'Chicken (whole)', qty: '600 pcs', reason: 'Restaurant weekend covers', urgency: 'Medium' },
  ],
}

export const alerts = [
  {
    id: 1,
    severity: 'critical' as const,
    title: '19,146 payments missing payee',
    detail: '≈ ₦2.10B in payments lack payee attribution. Exception requiring management review before period close.',
    area: 'Financial Control',
    time: '2h ago',
    whatsapp: true,
  },
  {
    id: 2,
    severity: 'critical' as const,
    title: 'Expense recording collapse (Apr 2026+)',
    detail: 'Food & beverage expense postings dropped sharply from April. Gross margin looks inflated — data quality exception requiring management review.',
    area: 'Cost & Profitability',
    time: '5h ago',
    whatsapp: true,
  },
  {
    id: 3,
    severity: 'critical' as const,
    title: 'Jollof COGS variance ₦350k',
    detail: 'Expected ₦2.4M vs actual ₦2.75M this week. Yield / portioning exception requiring management review.',
    area: 'Inventory',
    time: '8h ago',
    whatsapp: true,
  },
  {
    id: 4,
    severity: 'warning' as const,
    title: '33,605 receipts without reference',
    detail: 'Receipts missing bank/POS reference hinder reconciliation. Exception requiring management review.',
    area: 'Financial Control',
    time: '1d ago',
    whatsapp: false,
  },
  {
    id: 5,
    severity: 'warning' as const,
    title: 'Low stock: Jollof kit, Palm oil, Gulder',
    detail: 'Three SKUs below reorder at one or more branches. Recommended buy list updated.',
    area: 'Purchasing',
    time: '1d ago',
    whatsapp: true,
  },
  {
    id: 6,
    severity: 'warning' as const,
    title: 'Campus Outlet revenue −2.1%',
    detail: 'Campus unit trailing; delivery mix may be offsetting some loss.',
    area: 'Sales',
    time: '2d ago',
    whatsapp: false,
  },
  {
    id: 7,
    severity: 'normal' as const,
    title: 'Bank recon 87.4% matched',
    detail: 'Last run 12 Sep 18:40 WAT. 4.4% in exception queue.',
    area: 'Financial Control',
    time: '3h ago',
    whatsapp: false,
  },
  {
    id: 8,
    severity: 'normal' as const,
    title: 'Club/Lounge +12.1% growth',
    detail: 'Strongest unit growth; Abuja Main leading weekend covers.',
    area: 'Sales',
    time: '1d ago',
    whatsapp: false,
  },
]

export type ChatMessage = { role: 'user' | 'assistant'; text: string }

export const aiSuggestedQuestions = [
  'How did we perform yesterday?',
  'Why did revenue fall?',
  'Where are we losing money?',
  'Which branch/unit is best?',
  'Biggest financial risks?',
  'What should I investigate today?',
  'What should we purchase next week?',
  'What if restaurant sales fall 10%?',
]

export const aiAnswers: Record<string, string> = {
  'How did we perform yesterday?':
    'Yesterday ControlDeck tracked ≈ ₦4.82M revenue across branches, with ₦3.14M in payments and ₦1.28M cash/POS on hand. Gross margin on the day printed ~41%, but treat margin cautiously — expense posting quality has been weak since April 2026. Abuja Main led covers; Club/Lounge weekend spillover helped Wuse II. Receivables sit at ₦48.6M.',
  'Why did revenue fall?':
    'Month-to-date September is softer (~₦184M vs ~₦228M in August on the trend series). Drivers: (1) Campus Outlet −2.1% growth, (2) Bakery slight decline, (3) seasonal post-holiday cooling after Dec/Jan peaks. Restaurant + Club/Lounge still ~66.5% of revenue and remain resilient. Delivery (+18.6%) is partially offsetting campus softness.',
  'Where are we losing money?':
    'Three pressure points: (1) Food+Kitchen and Beverages ≈ 58.9% of payments — watch COGS; (2) Jollof variance expected ₦2.4M vs actual ₦2.75M (₦350k); (3) Utilities and Other over budget. Separately, 19,146 payments (~₦2.10B) lack payee — not a P&L loss yet, but an attribution gap that blocks cost control. Labour is under budget, which is a bright spot.',
  'Which branch/unit is best?':
    'Abuja Main is the strongest branch (≈ ₦1.42B, +8.4%, 42.1% margin). By unit, Club/Lounge leads growth (+12.1%, 52.6% margin) and Bar has the highest margin (55.2%). Restaurant is largest by revenue (₦1.12B) but mid-pack on margin (38.4%). Campus needs management attention.',
  'Biggest financial risks?':
    'Ranked: (1) Payee-less payments at scale (19,146 / ~₦2.10B) — exception requiring management review; (2) Expense recording collapse from Apr 2026 inflating apparent margin; (3) Receipts missing reference (33,605) and description (24,159) blocking bank recon; (4) Unreconciled ₦126.4M; (5) Commodity inflation (rice +8.1%, chicken +12%).',
  'What should I investigate today?':
    'Priority queue: (1) Sample the largest payee-less payments and assign ownership; (2) Confirm whether April+ expense drop is system cutover, incomplete uploads, or process stoppage; (3) Walk Jollof yield at Abuja kitchen (₦350k variance); (4) Clear low-stock Palm Oil / Gulder / Jollof kits; (5) Push bank recon on the 4.4% exception bucket. WhatsApp notify is available on critical alerts.',
  'What should we purchase next week?':
    'Recommended buys: ~350kg rice (7×50kg) for Jollof demand and Campus low stock; 20 drums Palm Oil 25L (below reorder at Abuja Main); 40 Gulder crates for weekend club; 600 whole chicken for restaurant covers. Outstanding POs with Olam (₦22.5M) and Nigerian Breweries (₦18.8M) should be tracked to delivery dates.',
  'What if restaurant sales fall 10%?':
    'Restaurant is ₦1.12B (~38.8% of sales). A 10% drop ≈ −₦112M revenue. At ~38.4% margin, gross profit impact ≈ −₦43M before fixed costs. Group sales would land near ₦2.78B. Offset levers: protect Club/Lounge and Bar (higher margin), grow Delivery (+18.6% already), tighten Food+Bev COGS (58.9% of payments), and pause non-critical Other spend. Labour buffer exists (under budget).',
}

export function matchAiAnswer(question: string): string {
  const normalized = question.trim().toLowerCase()
  for (const [q, a] of Object.entries(aiAnswers)) {
    if (q.toLowerCase() === normalized) return a
  }
  for (const [q, a] of Object.entries(aiAnswers)) {
    const key = q.toLowerCase().replace(/[?]/g, '')
    if (normalized.includes(key) || key.split(' ').filter((w) => w.length > 3).every((w) => normalized.includes(w))) {
      return a
    }
  }
  return 'I can answer from ControlDeck mock intelligence on performance, revenue drivers, cost leaks, branch/unit ranking, financial risks, today’s investigation queue, purchasing, and restaurant sales scenarios. Try one of the suggested questions — answers are grounded in the analysis figures (₦2.888B sales, payee gaps, COGS mix, etc.).'
}
