"use client"

import { useState } from "react"
import InsightsHeader from "./insights-header"
import InsightsKPICards from "./insights-kpi-cards"
import FeedbackVisualization from "./feedback-visualization"
import SentimentPainPoints from "./sentiment-pain-points"

export default function InsightsContent() {
  const [dateRange, setDateRange] = useState("30")

  return (
    <div className="dashboard-content">
      <InsightsHeader dateRange={dateRange} onDateRangeChange={setDateRange} />

      <div className="insights-section">
        <InsightsKPICards dateRange={dateRange} />
      </div>

      <div className="insights-section">
        <FeedbackVisualization dateRange={dateRange} />
      </div>

      <div className="insights-section">
        <SentimentPainPoints />
      </div>
    </div>
  )
}
