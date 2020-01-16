import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/AuthProvider'


function Header(){
    const { auth } = useContext(AuthContext)

    if(auth.isAuthenticated) {
        console.log('User that logged in: ' + auth.user.username)
    }

    const guestLinks = (
        <div className='col-10'>
            <Link to='login' className='login-register col-1'>Login</Link>
            <Link to='register' className='login-register col-1'>Register</Link>
        </div>
    )

    const userLinks = (
        <div className='col-4 name_font'>
            Hello! {auth.isAuthenticated ? auth.user.username: null}
        </div>
    )

    return(
        <header className='headerStyle bg-primary'>
            <div className='row d-flex'>
                <div className='col-10'>
                    <Link to='/'><h3 className='col-1 name_font'>D6</h3></Link>
                </div>
                <div className='d-flex col-2 justify-content-end'>
                    {auth.isAuthenticated ? userLinks : guestLinks}
                </div>
            </div>
            <nav className="navbar navbar-dark bg-primary justify-content-start">
               
               <Link to='branches' className='linkStyle col-1 offset-1'>Branches</Link>
               <Link to='clients' className='linkStyle col-1'>Clients</Link>
      
           </nav>
        </header>

    )
}
export default Header;