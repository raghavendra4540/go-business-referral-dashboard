import {Navigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import {JWT_TOKEN} from '../../constants'

const ProtectedRoute = ({children}) => {
  const jwtToken = Cookies.get(JWT_TOKEN)

  if (!jwtToken) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute