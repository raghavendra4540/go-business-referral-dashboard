import {useEffect, useState} from 'react'
import Cookies from 'js-cookie'

import Navbar from '../Navbar'
import OverviewSection from '../OverviewSection'
import ServiceSummary from '../ServiceSummary'
import ShareReferral from '../ShareReferral'
import ReferralsTable from '../ReferralsTable'

import {getReferralsData} from '../../services/api'
import {ITEMS_PER_PAGE, JWT_TOKEN, SORT_OPTIONS} from '../../constants'
import {getPaginatedData} from '../../utils/helpers'

import './index.css'

const Dashboard = () => {
  const [metrics, setMetrics] = useState([])
  const [referral, setReferral] = useState({})
  const [allReferrals, setAllReferrals] = useState([])

  const [searchInput, setSearchInput] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [sortBy, setSortBy] = useState(SORT_OPTIONS.NEWEST)
  const [currentPage, setCurrentPage] = useState(1)

  const [isLoading, setIsLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const fetchDashboardData = async () => {
      setIsLoading(true)
      setErrorMsg('')

      const jwtToken = Cookies.get(JWT_TOKEN)
      const response = await getReferralsData(jwtToken, searchValue, sortBy)

      if (response.ok) {
        const responseData = response.data?.data || {}

        setMetrics(responseData.metrics || [])
        setReferral(responseData.referral || {})
        setAllReferrals(responseData.referrals || [])
      } else {
        setErrorMsg(response.data?.message || 'Failed to fetch dashboard data')
      }

      setIsLoading(false)
    }

    fetchDashboardData()
  }, [searchValue, sortBy])

  const paginatedReferrals = getPaginatedData(
    allReferrals,
    currentPage,
    ITEMS_PER_PAGE,
  )

  const onChangeSearchInput = value => {
    setSearchInput(value)
  }

  const onSubmitSearch = () => {
    setSearchValue(searchInput)
    setCurrentPage(1)
  }

  const onChangeSortBy = value => {
    setSortBy(value)
    setCurrentPage(1)
  }

  const onClickNextPage = () => {
    const totalPages = Math.ceil(allReferrals.length / ITEMS_PER_PAGE)

    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1)
    }
  }

  const onClickPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1)
    }
  }

  // Option 2: calculate service summary from referrals
  const totalReferralsCount = allReferrals.length
  const activeReferralsCount = allReferrals.length
  const totalRefEarnings = allReferrals.reduce(
    (total, eachReferral) => total + Number(eachReferral.profit || 0),
    0,
  )

  const uniqueServices = [
  ...new Set(allReferrals.map(eachReferral => eachReferral.serviceName)),
]

const serviceName =
  uniqueServices.length === 1 ? uniqueServices[0] : 'Multiple Services'

const calculatedServiceSummary = {
  service: serviceName,
  yourReferrals: totalReferralsCount,
  activeReferrals: activeReferralsCount,
  totalRefEarnings,
}

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="dashboard-status-container">
          <p className="dashboard-status-text">Loading...</p>
        </div>
      )
    }

    if (errorMsg !== '') {
      return (
        <div className="dashboard-status-container">
          <p className="dashboard-error-text">{errorMsg}</p>
        </div>
      )
    }

    return (
      <>
        <header className="dashboard-header">
          <h1 className="dashboard-title">Referral Dashboard</h1>
          <p className="dashboard-description">
            Track your referrals, earnings, and partner activity in one place.
          </p>
        </header>

        <OverviewSection metrics={metrics} />
        <ServiceSummary serviceSummary={calculatedServiceSummary} />
        <ShareReferral referral={referral} />
        <ReferralsTable
          referrals={paginatedReferrals}
          searchInput={searchInput}
          sortBy={sortBy}
          currentPage={currentPage}
          totalItems={allReferrals.length}
          itemsPerPage={ITEMS_PER_PAGE}
          onChangeSearchInput={onChangeSearchInput}
          onSubmitSearch={onSubmitSearch}
          onChangeSortBy={onChangeSortBy}
          onClickNextPage={onClickNextPage}
          onClickPreviousPage={onClickPreviousPage}
        />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="dashboard-page">
        <div className="dashboard-content">{renderContent()}</div>
      </div>
    </>
  )
}

export default Dashboard