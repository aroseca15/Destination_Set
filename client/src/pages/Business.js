import clothes from '../assets/images/Wardrobe_Search.jpg';
import techU from '../assets/images/tech_upgrade.jpg';
import searchI from '../assets/images/search_icon.jpg';
import Header from '../components/Header';
import useAuth from '../hooks/auth';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Business(props) {
    // console.log(props);
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
            <main className='container'>
                {isLoggedIn() ?
                    <>
                        <Header></Header>
                        <section className='row align-items-center'>
                            <div className='col align-self-start'>
                                <figure className="overlay">
                                    <h1 id='h1'>Need a Tech Upgrate or Repair?</h1>
                                    <img id='tech' src={techU} className="img-fluid" alt="Destination Set"></img>

                                    <div id='searchI' className='iconCenter'>
                                        <a href={`https://www.google.com/search?q=computer+store+phone+repair+${destination.country}+${destination.city}`} rel='noreferrer' target='_blank' className="btn btn-info"><img id='tech' src={searchI} width={50} className="img-fluid" alt="Destination Set"></img></a>
                                    </div>
                                </figure>
                            </div>
                        </section><br /><br />

                        <section className='row align-items-center'>
                            <div className='col align-self-start'>
                                <figure className="overlay">
                                    <h1 id='h1'>Need a Quick Wardrobe Solution?</h1>
                                    <img id='clothes' src={clothes} className="img-fluid" alt="Destination Set"></img><br />
                                    <div className='iconCenter' id='searchI'>
                                        <a href={`https://www.google.com/search?q=business+clothing+store+${destination.country}+${destination.city}`} rel='noreferrer' target='_blank' className="btn btn-info"><img id='tech' src={searchI} width={50} className="img-fluid" alt="Destination Set"></img></a>
                                    </div>
                                </figure>
                            </div>
                        </section>

                        <section className='row'>

                        </section>
                    </>
                    :
                    <>
                        <h1>Not Logged In</h1>
                        {/* <li><button><Link to="/signup">Signup</Link></button></li>
                        <li><button><Link to="/login">Login</Link></button></li> */}
                    </>
                }
            </main>


        </div >

    );
}


export default Business;
