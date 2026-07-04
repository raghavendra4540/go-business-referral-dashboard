export const formatDate = dateString => {
  if (!dateString) {
    return ''
  }

  return dateString.replace(/-/g, '/')
}

export const formatCurrency = amount => {
  const number = Number(amount || 0)

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(number)
}

export const getPaginatedData = (data, currentPage, itemsPerPage) => {
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  return data.slice(startIndex, endIndex)
}

export const getPaginationText = (currentPage, itemsPerPage, totalItems) => {
  if (totalItems === 0) {
    return 'Showing 0–0 of 0 entries'
  }

  const start = (currentPage - 1) * itemsPerPage + 1
  const end = Math.min(currentPage * itemsPerPage, totalItems)

  return `Showing ${start}–${end} of ${totalItems} entries`
}