import {useState} from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'

import {loginUser} from '../../services/api'
import {JWT_TOKEN} from '../../constants'

import './index.css'

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const jwtToken = Cookies.get(JWT_TOKEN)

  if (jwtToken) {
    return <Navigate to="/" replace />
  }

  const onSubmitForm = async event => {
    event.preventDefault()

    const userDetails = {email, password}
    const response = await loginUser(userDetails)

    if (response.ok) {
      const token = response.data?.data?.token
      Cookies.set(JWT_TOKEN, token, {expires: 7})
      navigate('/', {replace: true})
    } else {
      setErrorMsg(response.data?.message || 'Invalid email or password')
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-brand">Go Business</h1>
        <p className="login-tagline">
          Sign in to open your referral dashboard.
        </p>

        <form className="login-form" onSubmit={onSubmitForm}>
          <div className="input-group">
            <label className="input-label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="login-input"
              placeholder="you@example.com"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="login-input"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </div>

          <button type="submit" className="login-button">
            Sign in
          </button>

          {errorMsg !== '' && <p className="login-error">{errorMsg}</p>}
        </form>
      </div>
    </div>
  )
}

export default Login