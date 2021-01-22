import { Link } from 'react-router-dom';
import useAuth from '../hooks/auth';

const Navbar = () => {
    const { isLoggedIn, logout, getProfile } = useAuth();
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Navbar</span>
                <ul>
                    <li><button><Link to="/">Home</Link></button></li>
                    <li><button><Link to='/notes'>Notes</Link></button></li>
                    {isLoggedIn() ?
                        <>
                            <li>Hello, {getProfile().email}</li>
                            <li><Link onClick={() => logout()} to='/'>Logout</Link></li>
                        </>
                        :
                        <>
                            <li><button><Link to="/signup">Signup</Link></button></li>
                            <li><button><Link to="/login">Login</Link></button></li>
                        </>
                    }

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

