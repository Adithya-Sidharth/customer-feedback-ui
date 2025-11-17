
interface KPIData {
  title: string
  value: string | number
  trend: number
  icon: string
}

const kpiData: KPIData[] = [
  { title: "Active Users", value: "12,540", trend: 12, icon: "👥" },
  { title: "Churn Rate", value: "2.3%", trend: -0.5, icon: "📉" },
  { title: "Feedback Summary", value: "342", trend: 8, icon: "💬" },
  { title: "Sentiment Score", value: "7.8/10", trend: 1.2, icon: "😊" },
]

export default function KPICards() {
  return (
    <div className="kpi-cards-container">
      {kpiData.map((kpi) => (
        <div key={kpi.title} className="kpi-card">
          <div className="kpi-header">
            <span className="kpi-icon">{kpi.icon}</span>
            <span className={`kpi-trend ${kpi.trend >= 0 ? "positive" : "negative"}`}>
              {kpi.trend >= 0 ? "↑" : "↓"} {Math.abs(kpi.trend)}%
            </span>
          </div>
          <div className="kpi-label">{kpi.title}</div>
          <div className="kpi-value">{kpi.value}</div>
        </div>
      ))}
    </div>
  )
}
