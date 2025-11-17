
import { useState } from "react"
import Sidebar from "../../../components/layouts/sidebar"
import TopBar from "../../../components/layouts/top-bar"
import ProductSetupContent from "../../../components/product_setup/product-setup-content"
import "../dashboard/dashboard.css"
import "./product-setup.css"

export default function ProductSetupPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <div className="dashboard-main">
        <TopBar />
        <ProductSetupContent />
      </div>
    </div>
  )
}
