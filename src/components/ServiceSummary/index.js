import './index.css'
import {formatCurrency} from '../../utils/helpers'

const ServiceSummary = props => {
  const {serviceSummary} = props

  const {
    service = 'Frontend',
    yourReferrals = '25 + 25',
    activeReferrals = '18 + 12',
    totalRefEarnings = 9568,
  } = serviceSummary || {}

  const earningsValue = Number(totalRefEarnings)
  const formattedEarnings = Number.isNaN(earningsValue)
    ? '$0'
    : formatCurrency(earningsValue)

  return (
    <section className="service-summary-section" aria-label="Service summary">
      <h2 className="section-title">Service Summary</h2>

      <div className="service-summary-card">
        <div className="service-summary-item">
          <p className="service-summary-label">Service</p>
          <p className="service-summary-value">{service}</p>
        </div>

        <div className="service-summary-item">
          <p className="service-summary-label">Your Referrals</p>
          <p className="service-summary-value">{yourReferrals}</p>
        </div>

        <div className="service-summary-item">
          <p className="service-summary-label">Active Referrals</p>
          <p className="service-summary-value">{activeReferrals}</p>
        </div>

        <div className="service-summary-item">
          <p className="service-summary-label">Total Ref. Earnings</p>
          <p className="service-summary-value">{formattedEarnings}</p>
        </div>
      </div>
    </section>
  )
}

export default ServiceSummary