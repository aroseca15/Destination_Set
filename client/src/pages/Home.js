import useAuth from '../hooks/auth';
import { Link } from 'react-router-dom';
import Clock from '../components/Clock';
import SpillCofLaptop from '../assets/images/SpilledCoffeeLaptop.jpg';
import DestinSet from '../assets/images/DestinSet.jpg';
import { Redirect } from 'react-router-dom';
import { useState } from 'react';

// import { useState } from 'react';
// import { axios } from 'axios';

// async function callDestination() {
//     const dataq = {
//         'source': 'en',
//         'q': 'Hello, world!',
//         'target': ';es'
//     };
//     const headersq = {
//         'content-type': 'application/x-www-form-urlencoded',
//         'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
//         'x-rapidapi-key': '2ec7e6775cmsh5864e9b8b1fc24cp1e4a90jsn0d8cfe5c5551',
//         'accept-encoding': 'application/gzip',
//         'useQueryString': true
//     };
//     await axios.post('https://google-translate1.p.rapidapi.com/language/translate/v2', dataq, {
//         headers: headersq
//     }).then((response) => {
//         console.log(response);
//     })
//         .catch((error) => {
//             console.log(error);
//         });
// }

function Home(props) {

    console.log(props.location.linkDestination);
    // const name = '';

    // const locationOfBusinessman = props.location.linkDestination.name;
    const { isLoggedIn, getProfile } = useAuth();
    // const [redirectToSignup, toggleRedirect] = useState(false);
    // const location = useLocation();
    const [RedirectToLogin, toggleRedirectL] = useState(false);
    const [RedirectToSignup, toggleRedirectS] = useState(false);
    const { from } = { from: { pathname: '/' } };
    if (RedirectToLogin) {
        // If someone goes to login, this transfers the redirect
        return <Redirect to={{
            pathname: '/login',
            state: { from: from }
        }}
        />;
    }

    if (RedirectToSignup) {
        return <Redirect to={{
            // If someone goes to signup, this transfers the redirect
            pathname: '/signup',
            state: { from: from }
        }}
        />;
    }
    if (isLoggedIn() && !props.location.linkDestination) {
        
        return <Redirect to={{
            // If someone goes to signup, this transfers the redirect
            pathname: '/destinations',
            state: { from: from }
        }}
        />;
    }

    return (
        <main className='App container'>

            {isLoggedIn() ?
                <>
                    <section id='Bbanner' className='row align-items-center '>
                        <div className='col align-self-end'>
                            <h1 id='BbannerText'>Welcome Back, {getProfile().first}</h1>
                            <Clock></Clock>
                            <h2 id='BbannerText'>{props.location.linkDestination.name}</h2>
                        </div>
                    </section>
                    <section className='row align-items-center '>
                        <div id='visa' className='card col align-self-end'>
                            <h4 id='h1'>VISA Information: <a href='https://visadb.io/search'><button id='btnText' className='btn btn-info'>Click Here</button></a></h4>


                        </div>
                    </section>

                    <section className='row'>
                        <div id='notes' className='card col align-self-start'>
                            <p>YOUR CURRENT DESTINATION: {props.location.linkDestination.name}</p>
                            <p></p>
                        </div>

                        <div id='notes' className='card col align-self-end'>
                            <p>Common Language Used: {props.location.linkDestination.language}</p>
                            <p>Currency in Used: {props.location.linkDestination.currency}</p>
                        </div>
                    </section>
                    <section className='row'>
                        <div id='notes' className='card col align-self-start'>
                            <p>TRANSLATE BOX</p>
                            <p></p>
                        </div>

                        <div id='notes' className='card col align-self-end'>
                            <p>CURRENCY CONVERT CALCULATOR</p>
                            <p></p>
                        </div>
                    </section>
                    <div></div>
                    <div>
                        <img src={SpillCofLaptop} width={300} height={300} alt="Spilled Coffee Laptop" /><br />
                        <button className='btn btn-warning'><Link id='btnText' to={{
                            pathname: '/business/'+ props.location.linkDestination.id,
                            
                        }}>Expected Solutions to the Unexpected</Link></button><br />
                    </div>
                </>
                :
                <>
                    <form>
                        <h1 className='display-4' id='h1'>
                            Welcome to Destination Set
                        </h1>
                        <img src={DestinSet} width={800} height={300} class="img-fluid" alt="Destination Set"></img>
                        <p id='loginP'>
                            New Here? <button className="btn btn-light" id='btn-signup' onClick={() => toggleRedirectS(true)}>Signup</button>
                            <button id='btn-login' className="btn btn-light" type='submit' onClick={() => toggleRedirectL(true)}>Login</button>
                        </p>

                    </form>

                </>
            }
        </main>

    );
}

export default Home;

