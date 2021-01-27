import { Link } from 'react-router-dom';
import useAuth from '../hooks/auth';

const Navbar = () => {
    const { isLoggedIn, logout } = useAuth();
    let history = useHistory();
    
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Destination Set</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href='/'> Home</a>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/login">Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/destinations">Destinations</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href='/notes'>Notes</a>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/signup">Signup</Link>
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

