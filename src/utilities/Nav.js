import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    }
    return (
       <nav>
           
           <Link style={navStyle} to='/'>
                            <h3>Home</h3>
                </Link>
           <ul className='nav-links'>
                <Link style={navStyle} to='/users'>
                               <li>Users</li>
                </Link>
                <Link style={navStyle} to='/comment'>
                               <li>Comment</li>
                </Link>
           </ul>
       </nav>
    )
}
