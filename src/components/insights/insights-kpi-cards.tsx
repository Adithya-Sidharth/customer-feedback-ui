"use client"

interface KPIData {
  title: string
  value: string | number
  activeCount?: string
  totalCount?: string
  trend: number
  icon: string
}

interface InsightsKPICardsProps {
  dateRange: string
}

export default function InsightsKPICards({ dateRange }: InsightsKPICardsProps) {
  const kpiData: KPIData[] = [
    { title: "Active Users", value: "8,240 / 10,450", trend: 12, icon: "👥" },
    { title: "Positive Feedback", value: "68%", trend: 8, icon: "😊" },
    { title: "Negative Feedback", value: "12%", trend: -5, icon: "😞" },
    { title: "Churn Rate", value: "2.3%", trend: -0.5, icon: "📉" },
  ]

  return (
    <div className="insights-kpi-cards">
      {kpiData.map((kpi) => (
        <div key={kpi.title} className="insights-kpi-card">
          <div className="insights-kpi-top">
            <span className="insights-kpi-icon">{kpi.icon}</span>
            <span className={`insights-kpi-trend ${kpi.trend >= 0 ? "positive" : "negative"}`}>
              {kpi.trend >= 0 ? "🔼" : "🔽"} {Math.abs(kpi.trend)}%
            </span>
          </div>

          <div className="insights-kpi-label">{kpi.title}</div>
          <div className="insights-kpi-value">{kpi.value}</div>

          <div className="insights-kpi-sparkline">
            <svg viewBox="0 0 100 20" className="sparkline-svg">
              {/* Mini sparkline - simple area chart */}
              <polyline
                points="0,15 12,8 25,12 37,6 50,9 62,5 75,7 87,10 100,8"
                fill="none"
                stroke={kpi.trend >= 0 ? "#16A34A" : "#DC2626"}
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  )
}
