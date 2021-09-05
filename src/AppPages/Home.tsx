import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    return (

        <div className='page-container'>
            <div className="login-leftpanel">
                <form action="" className="sigin-form">
                    <h1 className='signin-heading'>Signin to FancyGuitars</h1>
                    <p className='no-account-text'>Dont have an account? <Link to='/signup' className='signup-link'>Signup</Link></p>
                    <br />
                    <input type="text" placeholder='Email' className='form-control' />
                    <input type="text" placeholder='Password' className='form-control' />
                    <Link to='/forgotPassword' className='forgot-password'>Forgot Password?</Link>
                    <br />
                    <input type="button" value="SIGN IN" className='signin-btn' />
                </form>
            </div>

            <div className="login-sidebar">
                <div className="sidebar-content">
                    <h1 className='sidebar-heading'>Welcome Back</h1>
                    <p className='sidebar-text'>This is FancyGuitars, your one stop center for all types of guitars</p>
                    <br />
                    <Link to='/signup'><input type="button" value="SIGN UP" className='sidebar-btn' /></Link>
                </div>
            </div>

        </div>
    )
}

export default Home

