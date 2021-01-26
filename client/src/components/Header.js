// import { Link } from 'react-router-dom';
import useAuth from '../hooks/auth';

const Header = () => {
    const { isLoggedIn, getProfile } = useAuth();
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">header</span>
                <ul>
                    {isLoggedIn() ?
                        <>
                            <li>Hello, {getProfile().first}</li>
                            {/* <li><Link onClick={() => logout()} to='/'>Logout</Link></li> */}
                        </>
                        :
                        <>
                            {/* <li><button><Link to="/signup">Signup</Link></button></li> */}
                            {/* <li><button><Link to="/login">Login</Link></button></li> */}
                        </>
                    }

                </ul>
            </div>
        </nav>

    );
};

export default Header;