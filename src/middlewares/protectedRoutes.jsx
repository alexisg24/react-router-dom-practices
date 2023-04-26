import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../Components/auth'

const ProtectedRoutes = ({ children }) => {
  const location = useLocation()
  const { user } = useAuth()
  if (!user?.username) return <Navigate to='/login' state={{ from: location }} replace />

  return children
}

export { ProtectedRoutes }
