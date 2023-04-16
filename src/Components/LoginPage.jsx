import React from 'react'
import { useAuth } from './auth'

const LoginPage = () => {
  const auth = useAuth()
  const [username, setUserName] = React.useState('')
  const loginForm = (event) => {
    event.preventDefault()
    auth.login({ username })
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
