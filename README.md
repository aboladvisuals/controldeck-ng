# ControlDeck NG

**Restaurant Business Intelligence & Control** — an executive POC for Nigerian restaurant / bar / club financial visibility and control.

**Live demo:** https://aboladvisuals.github.io/controldeck-ng/

## Attribution

- **Product idea, business problem framing, and financial analytics insights:** Abolade Emmanuel (Anuoluwapo Emmanuel ABOLADE), based on a real Nigerian hospitality analytics engagement.
- **POC structure, UI implementation, and engineering assistance:** developed with AI coding assistance (Grok / Cursor), under Abolade’s direction.
- This repository is a **proof of concept** for Handshake / portfolio use. Demo screens use **mock operational data** shaped by real analysis findings (missing payees, weak reconciliation, unit mix, etc.). It is not a live bank or POS integration.

## What this demonstrates

An intelligence and control layer sitting above hospitality operations:

POS / payments / inventory / expenses → central view → reconciliation exceptions → CEO dashboard + AI-assisted Q&A (demo responses grounded in sample metrics).

Exception language is intentional: **“Exception requiring management review”** — never fraud accusations.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4
- Recharts
- React Router
- Lucide icons

## Screens

1. **CEO Home** — KPIs, alerts, revenue trend, branch & unit cards  
2. **Financial Control Centre** — payee/reference gaps, recon status, exception values  
3. **Sales Intelligence** — Restaurant, Bar, Bakery, Club/Lounge, Delivery, Campus, Other  
4. **Cost & Profitability** — cost lines, budget vs actual, data-quality warnings  
5. **Inventory** — stock, wastage, expected vs actual consumption  
6. **Purchasing** — suppliers, price changes, recommended buys  
7. **AI CEO Assistant** — natural-language Q&A over demo metrics  
8. **Executive Alerts** — Critical / Warning / Normal  

## Run locally

```bash
npm install
npm run dev          # http://localhost:5173/controldeck-ng/
npm run build
npm run preview      # http://localhost:4173/controldeck-ng/
```

## Grounding figures (from analysis → reflected in mock)

| Metric | Value |
|--------|-------|
| Sales | ₦2.888B |
| Receipts | ₦2.917B |
| Payments | ₦2.116B |
| Cash/bank | ₦795.2M |
| Payments no payee | 19,146 (~₦2.10B) |
| Receipts no reference | 33,605 |
| Food+Kitchen + Beverages | ≈ 58.9% of payments |
| Restaurant + Club/Lounge | ≈ 66.5% of revenue |

Branches (sample): Abuja Main, Wuse II, Campus Outlet.  
Payment methods: Cash, POS, Transfer, Card, USSD.

## License

Portfolio / educational POC. Not production software.
