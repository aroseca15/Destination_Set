// import { useState } from 'react';
// import { Redirect, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../hooks/auth';
import { Link } from 'react-router-dom';
// import Destination from './Destination';


function Business() {
    // if (Destination.params.id === 1) {
    //     console.log('Paris');
    // }
    // const history = useHistory();
    // const location = useLocation();
    // onClick={() => toggleRedirect(true)}
    const { isLoggedIn, logout, getProfile } = useAuth();
    return (

        <div className='App'>

            <div className='bHead'>
                {isLoggedIn() ?
                    <>
                        <li>Hello, {getProfile().first}</li>
                        <li><Link onClick={() => logout()} to='/'>Logout</Link></li>
                        {/* <li>{ }</li> */}
                    </>
                    :
                    <>
                        <h1>Not Logged In</h1>
                        {/* <li><button><Link to="/signup">Signup</Link></button></li>
                        <li><button><Link to="/login">Login</Link></button></li> */}
                    </>
                }
            </div>


        </div>

    );
}


export default Business;
