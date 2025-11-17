
import { useState } from "react"
import Sidebar from "../../../components/layouts/sidebar"
import TopBar from "../../../components/layouts/top-bar"
import SettingsContent from "../../../components/settings/settings-content"
import "../dashboard/dashboard.css"
import "./settings.css"

export default function SettingsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <div className="dashboard-main">
        <TopBar />
        <SettingsContent />
      </div>
    </div>
  )
}
