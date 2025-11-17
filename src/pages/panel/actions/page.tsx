"use client"

import { useState } from "react"
import Sidebar from "../../../components/layouts/sidebar"
import TopBar from "../../../components/layouts/top-bar"
import ActionCenterContent from "../../../components/actions/action-center-content"
import "../../../pages/panel/actions/action-center.css"

export default function ActionCenterPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <div className="dashboard-main">
        <TopBar />
        <ActionCenterContent />
      </div>
    </div>
  )
}
