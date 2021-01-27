import useAuth from '../hooks/auth';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Home(props) {
    console.log(props.location.linkDestination);
    const { isLoggedIn } = useAuth();
    return (
        <div className='App'>
            {isLoggedIn() ?
                <>
                    <Header>{props.name}</Header><Link to={{
                        pathname: '/business',
                    }}>Solutions to the Unexpected</Link><br />

                    {/* <li>Hello, {getProfile().first}</li> */}
                    {/* <li><Link onClick={() => logout()} to='/'>Logout</Link></li> */}
                    <div className='card'>
                        <h1>TESTING</h1>
                        {/* <img src='https://1.bp.blogspot.com/-9Ij7gA1sRbg/UoTcimeQtNI/AAAAAAAAQwU/BET3_SZbftY/s1600/Paris+French+(6).jpg' height='300px' width='300px' ></img> */}
                        <p>TESTING</p>
                    </div>
                    <div>

                    </div>
                </>
                :
                <>
                    <h1>Not Logged In</h1>
                    <h2 id='h1'>
                        Home Page
                    </h2>
                    <p id='loginP'>
                        Welcome to Destination Set
                    </p>
                </>
            }
        </div>

    );
}

export default Home;

