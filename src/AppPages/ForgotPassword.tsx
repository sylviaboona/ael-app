import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    return (
        <div className='page-container'>
            <div className="login-leftpanel">
                <form action="" className="sigin-form">
                    <h1 className='signin-heading'>Change Password</h1>
                    <input type="text" name="name" placeholder="Email" className="form-control" />
                    <input type="text" name="npassword" placeholder="New Password" className="form-control" />
                    <input type="text" name="cpassword" placeholder="Confirm Password" className="form-control" />
                    <input type="submit" value="Change Password" className='signin-btn' />
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

export default ForgotPassword
