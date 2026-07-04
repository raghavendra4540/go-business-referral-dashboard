import {useNavigate} from 'react-router-dom'
import {
  formatDate,
  formatCurrency,
  getPaginationText,
} from '../../utils/helpers'
import './index.css'

const ReferralsTable = props => {
  const {
    referrals,
    searchInput,
    sortBy,
    currentPage,
    totalItems,
    itemsPerPage,
    onChangeSearchInput,
    onSubmitSearch,
    onChangeSortBy,
    onClickNextPage,
    onClickPreviousPage,
  } = props

  const navigate = useNavigate()

  const onClickRow = id => {
    navigate(`/referral/${id}`)
  }

  const isPreviousDisabled = currentPage === 1
  const isNextDisabled = currentPage * itemsPerPage >= totalItems

  return (
    <section className="referrals-table-section">
      <div className="referrals-table-header">
        <h2 className="referrals-table-heading">All Referrals</h2>

        <div className="referrals-controls">
          <input
            type="search"
            className="search-input"
            placeholder="Name or service..."
            value={searchInput}
            onChange={event => onChangeSearchInput(event.target.value)}
            onKeyDown={event => {
              if (event.key === 'Enter') {
                onSubmitSearch()
              }
            }}
          />

          <select
            className="sort-select"
            value={sortBy}
            onChange={event => onChangeSortBy(event.target.value)}
          >
            <option value="desc">Newest first</option>
            <option value="asc">Oldest first</option>
          </select>
        </div>
      </div>

      <div className="table-card">
        <div className="table-responsive">
          <table className="referrals-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Service</th>
                <th>Date</th>
                <th>Profit</th>
              </tr>
            </thead>
            <tbody>
              {referrals.length === 0 ? (
                <tr>
                  <td colSpan="4" className="empty-state">
                    No referrals found
                  </td>
                </tr>
              ) : (
                referrals.map(eachReferral => (
                  <tr
                    key={eachReferral.id}
                    className="table-row"
                    onClick={() => onClickRow(eachReferral.id)}
                  >
                    <td>{eachReferral.name}</td>
                    <td>{eachReferral.serviceName}</td>
                    <td>{formatDate(eachReferral.date)}</td>
                    <td>{formatCurrency(eachReferral.profit)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="pagination-bar">
          <p className="pagination-text">
            {getPaginationText(currentPage, itemsPerPage, totalItems)}
          </p>

          <div className="pagination-buttons">
            <button
              type="button"
              className="pagination-button"
              onClick={onClickPreviousPage}
              disabled={isPreviousDisabled}
            >
              Previous
            </button>
            <button
              type="button"
              className="pagination-button"
              onClick={onClickNextPage}
              disabled={isNextDisabled}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReferralsTable