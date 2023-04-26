import React from 'react'
import { useAuth } from './auth'
import { useLocation } from 'react-router-dom'

const LoginPage = () => {
  const location = useLocation()
  const from = location.state?.from?.pathname || -1
  const auth = useAuth()
  const [username, setUserName] = React.useState('')
  const loginForm = (event) => {
    event.preventDefault()
    auth.login({ username, from })
  }
  return (
    <>
      <h1>LoginPage</h1>
      <section>
        <form onSubmit={loginForm}>
          <label htmlFor='username'>Escribe tu nombre de usuario</label>
          <input
            type='text'
            name='username'
            placeholder='Username'
            value={username}
            onChange={event => setUserName(event.target.value)}
          />
          <button type='submit'>Login</button>
        </form>
      </section>
    </>
  )
}

export { LoginPage }
