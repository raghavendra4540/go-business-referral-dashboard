import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="not-found-page">
    <div className="not-found-card">
      <h1 className="not-found-heading">404 - Page Not Found</h1>
      <p className="not-found-description">
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="not-found-link">
        Go to Dashboard
      </Link>
    </div>
  </div>
)

export default NotFound