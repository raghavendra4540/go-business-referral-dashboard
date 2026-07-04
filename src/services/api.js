import {LOGIN_API_URL, REFERRALS_API_URL} from '../constants'

export const loginUser = async userDetails => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userDetails),
  }

  const response = await fetch(LOGIN_API_URL, options)
  const data = await response.json()

  return {
    ok: response.ok,
    data,
  }
}

export const getReferralsData = async (jwtToken, search = '', sort = 'desc') => {
  const queryParams = new URLSearchParams()

  if (search.trim() !== '') {
    queryParams.append('search', search)
  }

  if (sort) {
    queryParams.append('sort', sort)
  }

  const url = queryParams.toString()
    ? `${REFERRALS_API_URL}?${queryParams.toString()}`
    : REFERRALS_API_URL

  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  }

  const response = await fetch(url, options)
  const data = await response.json()

  return {
    ok: response.ok,
    data,
  }
}

export const getReferralById = async (jwtToken, id) => {
  const url = `${REFERRALS_API_URL}?id=${id}`

  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  }

  const response = await fetch(url, options)
  const data = await response.json()

  return {
    ok: response.ok,
    data,
  }
}