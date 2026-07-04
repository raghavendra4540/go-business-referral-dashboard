import {Link, useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'

import {JWT_TOKEN} from '../../constants'

import './index.css'

const Navbar = () => {
  const navigate = useNavigate()

  const onClickLogout = () => {
    Cookies.remove(JWT_TOKEN)
    navigate('/login', {replace: true})
  }

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-brand" aria-label="Go to dashboard home">
          Go Business
        </Link>

        <div className="navbar-right">
          <Link to="/" className="navbar-link" aria-label="Primary">
            Home
          </Link>
          <button
            type="button"
            className="logout-button"
            onClick={onClickLogout}
          >
            Log out
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar