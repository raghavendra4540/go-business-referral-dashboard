import {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import Cookies from 'js-cookie'

import Navbar from '../Navbar'
import {getReferralById} from '../../services/api'
import {formatDate, formatCurrency} from '../../utils/helpers'
import {JWT_TOKEN} from '../../constants'

import './index.css'

const ReferralDetails = () => {
  const {id} = useParams()

  const [referralDetails, setReferralDetails] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const fetchReferralDetails = async () => {
      setIsLoading(true)
      setErrorMsg('')

      const jwtToken = Cookies.get(JWT_TOKEN)
      const response = await getReferralById(jwtToken, id)

      if (response.ok) {
        const data = response.data?.data || {}

        let referralData = null

        if (Array.isArray(data.referrals) && data.referrals.length > 0) {
          referralData = data.referrals[0]
        } else if (data.referral) {
          referralData = data.referral
        } else if (data.id) {
          referralData = data
        }

        if (referralData) {
          setReferralDetails(referralData)
        } else {
          setErrorMsg('Referral not found')
        }
      } else {
        setErrorMsg(response.data?.message || 'Referral not found')
      }

      setIsLoading(false)
    }

    fetchReferralDetails()
  }, [id])

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="referral-status-container">
          <p className="referral-status-text">Loading...</p>
        </div>
      )
    }

    if (errorMsg !== '' || referralDetails === null) {
      return (
        <div className="referral-status-container">
          <p className="referral-error-text">Referral not found</p>
          <Link to="/" className="back-link">
            Back to dashboard
          </Link>
        </div>
      )
    }

    const {name, serviceName, date, profit} = referralDetails

    return (
      <div className="referral-details-card">
        <h1 className="referral-main-heading">Referral Details</h1>
        <h2 className="partner-name">{name}</h2>

        <div className="referral-info-list">
          <div className="referral-info-item">
            <p className="referral-label">Referral ID</p>
            <p className="referral-value">{id}</p>
          </div>

          <div className="referral-info-item">
            <p className="referral-label">Service Name</p>
            <p className="referral-value">{serviceName}</p>
          </div>

          <div className="referral-info-item">
            <p className="referral-label">Date</p>
            <p className="referral-value">{formatDate(date)}</p>
          </div>

          <div className="referral-info-item">
            <p className="referral-label">Profit</p>
            <p className="referral-value">{formatCurrency(profit)}</p>
          </div>
        </div>

        <Link to="/" className="back-link">
          Back to dashboard
        </Link>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <div className="referral-page">
        <div className="referral-content">{renderContent()}</div>
      </div>
    </>
  )
}

export default ReferralDetails