import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import ReferralDetails from './components/ReferralDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/referral/:id"
        element={
          <ProtectedRoute>
            <ReferralDetails />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default App