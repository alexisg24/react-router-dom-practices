import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from './auth'

const Menu = () => {
  const auth = useAuth()

  return (
    <nav>
      <ul>
        {routes.map(route => {
          if (
            (route.private && !auth.user?.username) ||
            (auth.user?.username && route.path === '/login')
          ) return null
          return (
            <li key={route.path}>
              <NavLink
                to={route.path}
                style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}
              >
                {route.content}
              </NavLink>
            </li>
          )
        })}
        {/* <li><Link to="/">Home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/profile">Profile</Link></li> */}
        {/* <li>
                    <NavLink
                    className={({ isActive })=>''}
                    to="/blog"
                    style={({ isActive })=>({color: isActive ? 'red' : 'blue'})}>
                        Blog
                    </NavLink>
                </li> */}
      </ul>
    </nav>
  )
}

const routes = [
  { path: '/', content: 'Home', private: false },
  { path: '/add', content: 'Add Blog', private: true },
  { path: '/blog', content: 'Blog', private: false },
  { path: '/login', content: 'Login', private: false },
  { path: '/profile', content: 'Profile', private: true },
  { path: '/logout', content: 'Logout', private: true }
]

export { Menu }
