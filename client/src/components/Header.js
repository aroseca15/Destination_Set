// import { Link } from 'react-router-dom';
import useAuth from '../hooks/auth';
import Clock from './Clock';


const Header = (props) => {
    // console.log(props.location.linkDestination);
    const { isLoggedIn, getProfile } = useAuth();
    return (
        <main id='Bbanner' className="container-fluid">
            <section className="row align-items-end">
                <div id='Bbanner' className='col align-self-center'>
                    {isLoggedIn() ?
                        <>
                            <h1 id='BbannerText'>Welcome Back, {getProfile().first}</h1>
                            <Clock></Clock>
                        </>
                        :
                        <>
                        </>
                    }
                </div>
            </section>
        </main>

    );
};

export default Header;