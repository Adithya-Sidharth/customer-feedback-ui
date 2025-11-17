
interface TrendChartProps {
  dateRange: string
}

export default function TrendChart({ dateRange }: TrendChartProps) {
  const data = [
    { date: "Mon", users: 4200 },
    { date: "Tue", users: 5100 },
    { date: "Wed", users: 4800 },
    { date: "Thu", users: 6200 },
    { date: "Fri", users: 5900 },
    { date: "Sat", users: 7100 },
    { date: "Sun", users: 6800 },
  ]

  const maxUsers = Math.max(...data.map((d) => d.users))
  const minUsers = Math.min(...data.map((d) => d.users))
  const range = maxUsers - minUsers

  return (
    <div className="trend-chart">
      <div className="chart-container">
        <div className="chart-y-axis">
          <div className="y-label">{maxUsers.toLocaleString()}</div>
          <div className="y-label" style={{ flex: 1 }}></div>
          <div className="y-label">{minUsers.toLocaleString()}</div>
        </div>

        <div className="chart-area">
          {data.map((point, index) => (
            <div key={index} className="chart-bar-container">
              <div
                className="chart-bar"
                style={{
                  height: `${((point.users - minUsers) / range) * 100}%`,
                }}
              >
                <span className="chart-tooltip">{point.users.toLocaleString()}</span>
              </div>
              <div className="chart-label">{point.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
