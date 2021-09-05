import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navbar'>
            <Link to = '/' className="navbar-link">HOME</Link>
            <Link to = '/signup' className="navbar-link">SIGN UP</Link>
            <Link to = '/shop' className="navbar-link">SHOP</Link>
        <hr className='navbar-linebreak'/>   
        </div>
    )
}

export default NavBar
