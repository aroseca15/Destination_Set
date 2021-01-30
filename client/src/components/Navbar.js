import { Link } from 'react-router-dom';
import useAuth from '../hooks/auth';

const Navbar = () => {
    const { isLoggedIn, logout } = useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <h1 className="navbar-brand">Destination Set</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href='/'> Home</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/destinations">Destinations</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='/notes'>Notes</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">Signup</Link>
                        </li>
                    </ul>
                    {isLoggedIn() ?
                        <>

                            <button className="btn btn-outline-primary" onClick={() => logout()} to='/'>Logout</button>
                        </>
                        :
                        <>
                            {/* <Link to="/signup">Signup</Link><br /><br /> */}
                            {/* <Link to="/login">Login</Link> */}
                        </>
                    }
                </div>
            </div >
        </nav >
    );
};

export default Navbar;

