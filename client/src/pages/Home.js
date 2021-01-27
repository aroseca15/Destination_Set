import useAuth from '../hooks/auth';
import { Link } from 'react-router-dom';
import Clock from '../components/Clock';


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
// import { useState } from 'react';


function Home(props) {

    console.log(props.location.linkDestination);
    const { isLoggedIn, getProfile, } = useAuth();

    return (
        <main className='App container'>

            {isLoggedIn() ?
                <>
                    <section className='row align-items-center '>
                        <div className='col align-self-end'>
                            <h1 id='h1'>Welcome Back, {getProfile().first}</h1>
                            <Clock></Clock>
                            {/* <h2>{props.location.linkDestination.name}</h2> */}
                        </div>
                    </section>

                    <section className='row'>
                        <div id='notes' className='card col align-self-start'>
                            <p>TESTING</p>
                            <p>TESTING</p>
                        </div>
                        <div id='notes' className='card col align-self-end'>
                            <p>TESTING</p>
                            <p>TESTING</p>
                        </div>
                    </section>
                    <div>
                        <Link to={{
                            pathname: '/business',
                        }}>Solutions to the Unexpected</Link><br />
                    </div>
                </>
                :
                <>
                    <form>
                        <h1 id='h1'>
                            Welcome to Destination Set
                        </h1>
                        {/* <p id='loginP'>
                            New Here? <button className="btn btn-light" id='btn-signup' onClick={() => toggleRedirect(true)}>Signup</button>
                            <button id='btn-login' className="btn btn-light" type='submit'>Login</button>
                        </p> */}
                    </form>

                </>
            }
        </main>

    );
}

export default Home;

// {props.name}