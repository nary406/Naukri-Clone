import {Navigate, Outlet} from 'react-router-dom'
import Cookies from 'js-cookie'

function ProtectedRoute() {
  const jwtToken = Cookies.get('jwt_token')
  return jwtToken === undefined ? <Navigate to="/login" /> : <Outlet />
}

export default ProtectedRoute
