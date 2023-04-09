import React from "react";
import { Link, NavLink } from 'react-router-dom'

const Menu = () =>{
    return (
        <nav>
            <ul>
                {routes.map(route =>(
                    <li>
                        <NavLink
                        to={route.path}
                        style={({ isActive })=>({color: isActive ? 'red' : 'blue'})}>
                            {route.content}
                        </NavLink>
                    </li>
                ))}
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

const routes = [{path: '/', content: 'Home'}, {path: '/profile', content: 'Profile'}, {path: '/blog', content: 'Blog'}];

export { Menu }