
import { useState } from "react"
import Sidebar from "../../../components/layouts/sidebar"
import TopBar from "../../../components/layouts/top-bar"
import DashboardContent from "../../../components/dashboard/dashboard-content"
import "../../../pages/panel/dashboard/dashboard.css"

export default function DashboardPage() {
    const [sidebarOpen, setSidebarOpen] = useState(true)

    return (
        <div className="dashboard-layout">
            <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
            <div className="dashboard-main">
                <TopBar />
                <DashboardContent />
            </div>
        </div>
    )
}
