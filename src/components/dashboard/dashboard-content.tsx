
import { useState } from "react"
import KPICards from "./kpi-cards"
import TrendChart from "./trend-chart"
import SentimentBreakdown from "./sentiment-breakdown"
import ActionRecommendations from "./action-recommendations"

export default function DashboardContent() {
  const [dateRange, setDateRange] = useState("30d")

  return (
    <div className="dashboard-content">
      <div className="dashboard-section">
        <KPICards />
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-chart-section">
          <div className="chart-header">
            <h2 className="chart-title">Active Users Trend</h2>
            <div className="date-range-selector">
              {["7d", "30d", "90d"].map((range) => (
                <button
                  key={range}
                  className={`date-range-btn ${dateRange === range ? "active" : ""}`}
                  onClick={() => setDateRange(range)}
                >
                  {range === "7d" ? "7 Days" : range === "30d" ? "30 Days" : "90 Days"}
                </button>
              ))}
            </div>
          </div>
          <TrendChart dateRange={dateRange} />
        </div>

        <div className="dashboard-sentiment-section">
          <SentimentBreakdown />
        </div>
      </div>

      <div className="dashboard-section">
        <ActionRecommendations />
      </div>
    </div>
  )
}
