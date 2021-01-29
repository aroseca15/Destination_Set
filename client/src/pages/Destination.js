import { Link } from 'react-router-dom';
import London from '../assets/images/London1.jpg';
import Paris from '../assets/images/Paris1.jpg';
import RioDeJaneiro from '../assets/images/RioDeJaneiro.jpg';
import NYC from '../assets/images/New York1.jpg';
import Header from '../components/Header';

// import { useState } from 'react';

const Destination = () => {
    // const history = useHistory();
    // const location = useLocation();
    // const city = [city, setCity] = useState();
    // onClick={() => toggleRedirect(true)}
    // const [cityName, setCityName] = useState('');
    // const [selectCity, setSelectCity] = useState(false);

    // const getCityDetails = (city) => {
    //     console.log(city);
    //     setCityName('London');

    //     setSelectCity(true);
    // };

    return (

        <main className='App container'>

            <div className='icons'>
                <Header></Header>
                <section className='row align-items-center '>
                    <div className='col align-self-center'>
                        <img src={Paris} width={500} height={400} alt="Paris" /><br />
                        <Link id='btnText' to={{
                            pathname: '/',
                            linkDestination: {
                                id: 1,
                                name: 'Paris',
                                language: 'French',
                                currency: 'Euros: €'
                            }
                        }}>Paris</Link><br />

                        <img src={London} width={500} height={400} alt="London" /><br />
                        <Link id='btnText' to={{
                            pathname: '/',
                            linkDestination: {
                                id: 3,
                                name: 'London',
                                language: 'English',
                                currency: 'Pound Sterling: £'
                            }
                        }}>London</Link><br />
                    </div>


                    <div className='col align-self-center'>
                        <img src={RioDeJaneiro} width={500} height={400} alt="Rio De Janeiro" /><br />
                        <Link id='btnText' to={{
                            pathname: '/',
                            linkDestination: {
                                id: 2,
                                name: 'Rio De Janeiro',
                                language: 'Brazilian Portuguese',
                                currency: 'Reais: R$'
                            }
                        }}>Rio De Janeiro</Link><br />

                        <img src={NYC} width={500} height={400} alt="New York City" /><br />
                        <Link id='btnText' to={{
                            pathname: '/',
                            linkDestination: {
                                id: 4,
                                name: 'New York City',
                                language: 'English',
                                currency: 'USD: $'
                            }
                        }}>NYC</Link>
                    </div>
                </section>
            </div>

        </main >

    );
};

export default Destination;