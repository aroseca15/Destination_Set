import clothes from '../assets/images/Wardrobe_Search1.jpg';
import techU from '../assets/images/tech_upgrade.jpg';
import searchI from '../assets/images/search_icon.jpg';
import acces from '../assets/images/accessories_business.jpg';
import Header from '../components/Header';
import useAuth from '../hooks/auth';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Business(props) {
    const { id } = useParams();
    const { isLoggedIn } = useAuth();
    const [destination, setDestination] = useState({});

    function fetchDestination() {
        axios.get('/api/destinations/' + id).then(({ data }) => {
            setDestination(data);
        });
    }

    useEffect(() => {
        fetchDestination();
    }, []); // eslint-disable-line
    console.log(destination);
    return (
        < div className='App container' >
            <main className='container-fluid'>
                {isLoggedIn() ?
                    <>
                        <Header></Header>
                        <section className='row align-items-center'>
                            <div className='col align-self-start'>
                                <div className='image overlay'>
                                    <img id='clothes' src={clothes} className="img-fluid" alt="Destination Set"></img>
                                    <div className='overlay picText'>
                                        <h1 className='display-3' id='picText'>Need a Quick Wardrobe Solution?</h1>
                                        <div id='searchI'>
                                            <a href={`https://www.google.com/search?q=business+clothing+store+${destination.country}+${destination.city}`} rel='noreferrer' target='_blank'><img id='tech' src={searchI} width={50} className="img-fluid" alt="Destination Set"></img></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className='row align-items-start'>
                            <div className='col-5 align-self-start'>
                                <div className="image overlay">
                                    <img id='acces' src={acces} className="img-fluid" alt="Destination Set"></img>
                                    <div className='overlay picAcces'>
                                        <h1 id='h1'>Accessories</h1>
                                        <div id='searchIT'>
                                            <a href={`https://www.google.com/search?q=business+accessories+office+supplies+${destination.country}+${destination.city}`} rel='noreferrer' target='_blank'><img id='tech' src={searchI} width={50} className="img-fluid" alt="Destination Set"></img></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-7 align-self-start'>
                                <h1 id='h1' className='display-4 message'>Quick Solutions to the Unexpected Problems and Panics</h1>
                                <div className="image overlay">
                                    <img id='tech' src={techU} width={700} className="img-fluid" alt="Destination Set"></img>
                                    <div className='overlay picTech'>
                                        <h1 id='h1'>Tech Upgrate or Repair?</h1>
                                        <div id='searchIT'>
                                            <a href={`https://www.google.com/search?q=computer+store+phone+repair+${destination.country}+${destination.city}`} rel='noreferrer' target='_blank'><img id='tech' src={searchI} width={50} className="img-fluid" alt="Destination Set"></img></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-6 align-self-end'>

                            </div>

                        </section>

                        <section className='row'>

                        </section>
                    </>
                    :
                    <>
                        <h1>Not Logged In</h1>
                    </>
                }
            </main>


        </div >

    );
}


export default Business;
