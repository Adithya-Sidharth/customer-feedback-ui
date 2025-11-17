"use client"

import { useState } from "react"
import Sidebar from "../../../components/layouts/sidebar"
import TopBar from "../../../components/layouts/top-bar"
import InsightsContent from "../../../components/insights/insights-content"
import "../../../pages/panel/insights/insights.css"

export default function InsightsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <div className="dashboard-main">
        <TopBar />
        <InsightsContent />
      </div>
    </div>
  )
}
