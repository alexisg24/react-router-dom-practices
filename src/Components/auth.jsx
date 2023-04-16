import React from 'react'
import { useNavigate } from 'react-router-dom'
import { adminList } from '../data/adminList'

const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = React.useState(null)

  const login = ({ username }) => {
    const isAdmin = adminList.find(name => name === username)
    setUser({ username, isAdmin })
    navigate('/profile')
  }

  const logOut = () => {
    setUser(null)
    navigate('/')
  }
  const auth = { user, login, logOut }
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const auth = React.useContext(AuthContext)
  return auth
}

export {
  AuthProvider,
  useAuth
}
