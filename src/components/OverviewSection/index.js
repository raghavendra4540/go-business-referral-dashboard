import './index.css'

const OverviewSection = ({metrics}) => (
  <section className="overview-section" aria-label="Overview metrics">
    <h2 className="overview-heading">Overview</h2>

    <div className="metrics-list">
      {metrics.map(eachMetric => (
        <div className="metric-card" key={eachMetric.id}>
          <p className="metric-label">{eachMetric.label}</p>
          <p className="metric-value">{eachMetric.value}</p>
        </div>
      ))}
    </div>
  </section>
)

export default OverviewSection