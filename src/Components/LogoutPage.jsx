import React from 'react'
import { ProtectedRoutes } from '../middlewares/protectedRoutes'
import { useAuth } from './auth'

const LogoutPage = () => {
  const auth = useAuth()
  const logout = (event) => {
    event.preventDefault()
    auth.logOut()
  }
  return (
    <>
      <ProtectedRoutes>
        <h1>Logout</h1>
        <section>
          <form onSubmit={logout}>
            <label htmlFor='username'>Are you sure to logout?</label>
            <button type='submit'>Yes</button>
          </form>
        </section>
      </ProtectedRoutes>
    </>
  )
}

export { LogoutPage }
