import useAuth from '../hooks/auth';
import { Link } from 'react-router-dom';
import Clock from '../components/Clock';
import Translate from '../components/TranslateB';
import ConvertCurr from '../components/ConvertCurr';
import SpillCofLaptop from '../assets/images/SpilledCoffeeLaptop.jpg';
import DestinSet from '../assets/images/Landing_image.jpg';
import { Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


function Home(props) {
    const [countryApi, setCountryApi] = useState({ advisory: { message: '', className: '' } });
    useEffect(() => {
        if (!props.location.linkDestination) {
            return;
        }
        axios.get(`https://www.travel-advisory.info/api?countrycode=${props.location.linkDestination.countryCode}`)
            .then(res => {
                let data = '';
                data = res.data.data;
                let country = '';
                country = data[props.location.linkDestination.countryCode];
                country.advisory.className = 'danger';
                if (country.advisory.score < 3) {
                    country.advisory.className = 'low';
                } else if (country.advisory.score < 3.5) {
                    country.advisory.className = 'medium';
                } else if (country.advisory.score < 4) {
                    country.advisory.className = 'high';
                } else if (country.advisory.score > 4.5) {
                    country.advisory.className = 'extreme';
                }
                setCountryApi(country);
            }, err => { console.log(err); });
        console.log('After user effect', props);
    }, []); // eslint-disable-line
    console.log(countryApi);
    const { isLoggedIn, getProfile } = useAuth();
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
                        <div className='col'>
                            <div className={`card border-${countryApi.advisory.className} mb-3`} >
                                <div className={`card-header ${countryApi.advisory.className}`}>Covid Index</div>
                                <div className="card-body">
                                    <h5 className="card-title">{props.location.linkDestination.name}</h5>
                                    <p className="card-text">{countryApi.advisory.message}</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='row'>
                        <div id='notes' className='card col-lg-8 align-self-start'>
                            <p>YOUR CURRENT DESTINATION: {props.location.linkDestination.name}</p>
                            <p></p>
                        </div>
                        <div className='col'>
                            <p></p>
                        </div>

                        <div id='notes' className='card col-lg-8 align-self-end'>
                            <p>Common Language Used: {props.location.linkDestination.language}</p>
                            <p>Currency in Used: {props.location.linkDestination.currency}</p>
                        </div>
                    </section>
                    <section className='row'>
                        <div id='translate' className='col align-self-start'>
                            <Translate></Translate>
                        </div>
                        <div className='col'>
                            <p></p>
                        </div>
                        <div id='convertC' className='card col align-self-end'>
                            <p>CURRENCY CONVERT CALCULATOR</p>
                            <ConvertCurr></ConvertCurr>
                        </div>
                    </section>
                    <div>
                        <img src={SpillCofLaptop} width={300} height={300} alt="Spilled Coffee Laptop" /><br />
                        <button className='btn btn-warning'><Link id='btnText' to={{
                            pathname: '/business/' + props.location.linkDestination.id,

                        }}>Expected Solutions to the Unexpected</Link></button><br />
                    </div>
                </>
                :
                <>
                    <section className='row'>
                        <div class="card homeCards">
                            <div class="card-body">
                                <h1 id='h1'>Welcome to Destination Set</h1>
                                <h4 id='h1'>Your trusted partner in safety and business as you travel for your work!!</h4>
                                <p id='loginH'>
                                    New Here? <button className="btn btn-light" id='btn-signup' onClick={() => toggleRedirectS(true)}>Signup</button>
                                </p>
                            </div>
                            {/* Image by JamesDeMers from Pixabay  */}
                            <img src={DestinSet} width={300} height={350} class="card-img-bottom" alt="Destination Set"></img>
                            <p>Image by JamesDeMers from Pixabay</p>
                        </div>
                    </section>
                    <section className='row justify-content-end'>
                        <p id='h1'>Already Have an Account With Us? <button id='btn-login' className="btn" type='submit' onClick={() => toggleRedirectL(true)}>Login</button></p>
                    </section>

                </>
            }
        </main>

    );
}

export default Home;

/* <h2 className={countryApi.advisory.className}></h2> */

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