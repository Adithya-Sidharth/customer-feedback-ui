
interface SentimentData {
  label: string
  value: number
  percentage: number
  color: string
  icon: string
}

const sentimentData: SentimentData[] = [
  { label: "Positive", value: 245, percentage: 72, color: "#dcfce7", icon: "😊" },
  { label: "Neutral", value: 68, percentage: 20, color: "#fefce8", icon: "😐" },
  { label: "Negative", value: 29, percentage: 8, color: "#fee2e2", icon: "😞" },
]

const painPoints = [
  "Slow page load times — 27 mentions",
  "Mobile responsiveness issues — 15 mentions",
  "Complex navigation flow — 12 mentions",
]

export default function SentimentBreakdown() {
  const total = sentimentData.reduce((sum, item) => sum + item.value, 0)

  return (
    <div className="sentiment-card">
      <h3 className="sentiment-title">Sentiment Distribution</h3>

      <div className="donut-chart">
        <svg className="donut-svg" viewBox="0 0 100 100">
          {sentimentData.map((item, index) => {
            const startAngle = sentimentData.slice(0, index).reduce((sum, d) => sum + (d.percentage * 360) / 100, 0)
            const endAngle = startAngle + (item.percentage * 360) / 100

            const startRad = (startAngle * Math.PI) / 180
            const endRad = (endAngle * Math.PI) / 180

            const x1 = 50 + 30 * Math.cos(startRad)
            const y1 = 50 + 30 * Math.sin(startRad)
            const x2 = 50 + 30 * Math.cos(endRad)
            const y2 = 50 + 30 * Math.sin(endRad)

            const largeArc = item.percentage > 50 ? 1 : 0

            const path = `M ${50} ${50} L ${x1} ${y1} A 30 30 0 ${largeArc} 1 ${x2} ${y2} Z`

            return (
              <path
                key={item.label}
                d={path}
                fill={item.label === "Positive" ? "#16A34A" : item.label === "Neutral" ? "#9CA3AF" : "#DC2626"}
                stroke="Black"
                strokeWidth="0.4"
              />
            )
          })}
        </svg>
        <div className="donut-center">
          <div className="donut-label">Total</div>
          <div className="donut-value">{total}</div>
        </div>
      </div>

      <div className="sentiment-legend">
        {sentimentData.map((item) => (
          <div key={item.label} className="legend-item">
            <span className="legend-icon">{item.icon}</span>
            <div className="legend-text">
              <div className="legend-label">{item.label}</div>
              <div className="legend-value">{item.percentage}%</div>
            </div>
          </div>
        ))}
      </div>

      <div className="pain-points">
        <h4 className="pain-points-title">Top Pain Points</h4>
        <ul className="pain-points-list">
          {painPoints.map((point, index) => (
            <li key={index} className="pain-point-item">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
