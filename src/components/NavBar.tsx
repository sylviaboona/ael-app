import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navbar'>
            <Link to = '/' className="navbar-link">HOME</Link>
            <Link to = '/about' className="navbar-link">ABOUT</Link>
            <Link to = '/contact' className="navbar-link">CONTACT</Link>
        <hr />   
        </div>
    )
}

export default NavBar
