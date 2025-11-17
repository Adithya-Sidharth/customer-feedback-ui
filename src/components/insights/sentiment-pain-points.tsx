"use client"

interface PainPoint {
  name: string
  mentions: number
  severity: "High" | "Medium" | "Low"
}

export default function SentimentPainPoints() {
  const painPoints: PainPoint[] = [
    { name: "Slow Loading", mentions: 42, severity: "High" },
    { name: "Complex UI", mentions: 27, severity: "Medium" },
    { name: "Pricing Confusion", mentions: 18, severity: "Low" },
  ]

  const sentimentData = [
    { label: "Positive", value: 350, percentage: 68, color: "#16A34A", icon: "😊" },
    { label: "Neutral", value: 102, percentage: 20, color: "#9CA3AF", icon: "😐" },
    { label: "Negative", value: 62, percentage: 12, color: "#DC2626", icon: "😞" },
  ]

  const total = sentimentData.reduce((sum, item) => sum + item.value, 0)

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High":
        return "#DC2626"
      case "Medium":
        return "#F59E0B"
      case "Low":
        return "#16A34A"
      default:
        return "#6B7280"
    }
  }

  return (
    <div className="sentiment-pain-points-container">
      {/* Sentiment Distribution Card */}
      <div className="sentiment-card-full">
        <h3 className="sentiment-title">Sentiment Distribution</h3>

        <div className="sentiment-layout">
          <div className="sentiment-chart-wrapper">
            <div className="donut-chart-insights">
              <svg className="donut-svg-insights" viewBox="0 0 100 100">
                {sentimentData.map((item, index) => {
                  const startAngle = sentimentData
                    .slice(0, index)
                    .reduce((sum, d) => sum + (d.percentage * 360) / 100, 0)
                  const endAngle = startAngle + (item.percentage * 360) / 100

                  const startRad = (startAngle * Math.PI) / 180
                  const endRad = (endAngle * Math.PI) / 180

                  const x1 = 50 + 30 * Math.cos(startRad)
                  const y1 = 50 + 30 * Math.sin(startRad)
                  const x2 = 50 + 30 * Math.cos(endRad)
                  const y2 = 50 + 30 * Math.sin(endRad)

                  const largeArc = item.percentage > 50 ? 1 : 0
                  const path = `M ${50} ${50} L ${x1} ${y1} A 30 30 0 ${largeArc} 1 ${x2} ${y2} Z`

                  return <path key={item.label} d={path} fill={item.color} stroke="white" strokeWidth="2" />
                })}
              </svg>
              <div className="donut-center-insights">
                <div className="donut-label-insights">Total Feedback</div>
                <div className="donut-value-insights">{total}</div>
              </div>
            </div>

            <div className="sentiment-legend-insights">
              {sentimentData.map((item) => (
                <div key={item.label} className="legend-item-insights">
                  <span className="legend-icon-insights">{item.icon}</span>
                  <div className="legend-text-insights">
                    <div className="legend-label-insights">{item.label}</div>
                    <div className="legend-value-insights">
                      {item.percentage}% ({item.value})
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pain Points Table */}
          <div className="pain-points-table-wrapper">
            <h3 className="pain-points-table-title">Top 3 Pain Points</h3>
            <table className="pain-points-table">
              <thead>
                <tr>
                  <th className="pain-point-col-name">Pain Point</th>
                  <th className="pain-point-col-mentions">Mentions</th>
                  <th className="pain-point-col-severity">Severity</th>
                </tr>
              </thead>
              <tbody>
                {painPoints.map((point, index) => (
                  <tr key={index} className="pain-point-row">
                    <td className="pain-point-name">{point.name}</td>
                    <td className="pain-point-mentions">{point.mentions}</td>
                    <td className="pain-point-severity">
                      <span
                        className="severity-badge"
                        style={{
                          backgroundColor: `${getSeverityColor(point.severity)}20`,
                          color: getSeverityColor(point.severity),
                          borderColor: getSeverityColor(point.severity),
                        }}
                      >
                        {point.severity === "High" && "🔴"}
                        {point.severity === "Medium" && "🟡"}
                        {point.severity === "Low" && "🟢"}
                        <span className="severity-text">{point.severity}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
