import './index.css'

const defaultLabels = [
  'Total Referrals',
  'Active Referrals',
  'Total Ref. Earnings',
]

const OverviewSection = ({metrics}) => (
  <section className="overview-section">
    <h2 className="overview-heading">Overview</h2>

    <div className="metrics-list">
      {metrics.map((eachMetric, index) => (
        <div className="metric-card" key={eachMetric.id || index}>
          <p className="metric-label">
            {eachMetric.label || defaultLabels[index]}
          </p>

          <p className="metric-value">
            {eachMetric.value}
          </p>
        </div>
      ))}
    </div>
  </section>
)

export default OverviewSection