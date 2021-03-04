import useAuth from '../hooks/auth';
import { Link } from 'react-router-dom';
import Clock from '../components/Clock';
import ConvertCurr from '../components/ConvertCurr';
import SpillCofLaptop from '../assets/images/SpilledCoffeeLaptop.jpg';
import DestinSet from '../assets/images/Landing_image.jpg';
import { Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Calender from '../components/Calender';
import SchedForm from '../components/SchedForm';


function Home(props) {
    const [scheds, setSched] = useState([]);
    const [refresh, toggleRefresh] = useState(0);
    const [selectedDate, setSelectedDate] = useState('');
    const refreshParent = () => {
        toggleRefresh(refresh + 1);
    };

    // Notice deps has refresh in there - this way when it increments from someone submitting
    // it calls fetch sched again.
    useEffect(() => {
        if (isLoggedIn()) {
            fetchSched();
        }

    }, [refresh]);

    // Check out that include!
    async function fetchSched() {
        const { data } = await axios.get('/api/sched?include=User');
        setSched(data);
        console.log(data);

    }

    const deleteSched = async (id) => {
        await axios.delete('/api/sched/' + id);
        refreshParent();
    };

    // const HideSced = async () => {
    //     if (selectedDate !== ''){

    //     }else {

    //     }
    // }

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
                } else if (country.advisory.score < 7) {
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
                                <div id='place' className={`card-header ${countryApi.advisory.className}`}>Travel Safety Index</div>
                                <div className={`card body ${countryApi.advisory.className}`}>
                                    <h5 id='place' className="card-title">{props.location.linkDestination.name}</h5>
                                    <p id='cardText'>Common Language Used: {props.location.linkDestination.language}</p>
                                    <p id='cardText'>Currency in Used: {props.location.linkDestination.currency}</p>
                                    <p id='cardText' className="card-text">{countryApi.advisory.message}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='row align-items-center'>
                        <div id='convertC' className='card col-6 align-self-center'>
                            <p>CURRENCY CONVERT CALCULATOR</p>
                            <ConvertCurr></ConvertCurr>
                        </div>
                        <div className='image overlay'>
                            <img src={SpillCofLaptop} width={300} height={300} alt="Spilled Coffee Laptop" />
                            <div className='overlay'>
                                <Link className='city' id='btnText' to={{
                                    pathname: '/business/' + props.location.linkDestination.id,
                                }}>Click for Fast Solutions</Link>
                            </div>
                        </div>
                    </section>
                    <section className='row'>

                        <Calender className='sched' scheds={scheds} setSelectedDate={setSelectedDate}></Calender>

                        {selectedDate && (
                            <div className='card col align-self-start schedOverlay sched'>
                                <h2>{selectedDate}</h2>
                                <ol>
                                    {scheds.map(sched => {
                                        return (

                                            <div key={selectedDate}>
                                                <strong>{sched.time}: </strong>
                                                {sched.client}
                                                <p>{sched.venue}</p>
                                                {sched.venueAddress} <button onClick={() => deleteSched(sched.id)} className='btn-danger' type='submit'>X</button>
                                            </div>
                                        );
                                    })}
                                </ol>
                                <SchedForm selectedDate={selectedDate} didSubmit={refreshParent} />
                            </div>
                        )}

                    </section>
                    <section>


                    </section>

                </>
                :
                <>
                    <section className='row container-fluid'>
                        <div class="card homeCards">
                            <div class="card-body">
                                <h1 id='h1'>Welcome to Destination Set</h1>
                                <h4 id='h1'>Your trusted partner in safety and business during your travels!!</h4>
                                <p id='loginH'>
                                    New Here? <button className="btn btn-light" id='btn-signup' onClick={() => toggleRedirectS(true)}>Signup</button>
                                </p>
                            </div>
                            Image by JamesDeMers from Pixabay
                            <img src={DestinSet} width={300} height={400} class="card-img-bottom" alt="Destination Set"></img>
                            <p>Image by JamesDeMers from Pixabay</p>
                        </div>
                    </section>
                    <section className='row justify-content-end'>
                        <p id='h1'>Already Have an Account With Us? <button id='btn-login' className="btn" type='submit' onClick={() => toggleRedirectL(true)}>Login</button></p>
                    </section>

                </>
            }
        </main >

    );
}

export default Home;