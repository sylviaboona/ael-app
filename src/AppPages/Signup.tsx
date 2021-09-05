import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className='page-container'>
            <div className="signup-sidebar">
                <div className="sidebar-content">
                    <h1 className='sidebar-heading'>Welcome Back</h1>
                    <p className='sidebar-text'>This is FancyGuitars, your one stop center for all types of guitars</p>
                    <br />
                    <Link to='/'><input type="button" value="SIGN IN" className='sidebar-btn'/></Link>
                </div>
            </div>
            <div className="signup-rightpanel">
                <form action="" className='sigup-form'>
                    <h1 className='signup-heading'>Create Account</h1>
                    <p className='no-account-text'>Already have an account? <Link to='/' className='signup-link'>Signin</Link></p>
                    <input type="text" placeholder='Full Name' className='form-control-signup' />
                    <input type="text" placeholder='Email' className='form-control-signup' />
                    <input type="text" placeholder='Password' className='form-control-signup' />
                    <input type="text" placeholder='Confirm Password' className='form-control-signup' />
                    <input type="button" value="Signup" className='signup-btn' />
                </form>
            </div>
        </div>
    )
}

export default Signup
