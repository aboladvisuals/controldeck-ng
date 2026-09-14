import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppShell from './layout/AppShell'
import CeoHome from './pages/CeoHome'
import FinancialControl from './pages/FinancialControl'
import SalesIntelligence from './pages/SalesIntelligence'
import CostProfitability from './pages/CostProfitability'
import Inventory from './pages/Inventory'
import Purchasing from './pages/Purchasing'
import AiAssistant from './pages/AiAssistant'
import ExecutiveAlerts from './pages/ExecutiveAlerts'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<CeoHome />} />
          <Route path="financial" element={<FinancialControl />} />
          <Route path="sales" element={<SalesIntelligence />} />
          <Route path="costs" element={<CostProfitability />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="purchasing" element={<Purchasing />} />
          <Route path="ai" element={<AiAssistant />} />
          <Route path="alerts" element={<ExecutiveAlerts />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
