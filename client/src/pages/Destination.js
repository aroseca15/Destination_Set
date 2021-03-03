import { Link } from 'react-router-dom';
import London from '../assets/images/London1.jpg';
import Paris from '../assets/images/Paris1.jpg';
import RioDeJaneiro from '../assets/images/RioDeJaneiro.jpg';
import NYC from '../assets/images/New York1.jpg';
import Header from '../components/Header';

const Destination = () => {
    return (

        <main className='App container'>

            <div className='icons'>
                <Header></Header>
                <section className='row align-items-center '>
                    <div className='image overlay'>
                        <div className='col align-self-center'>
                            <img src={Paris} width={500} height={400} alt="Paris" /><br />
                            <div className='overlay'>
                                <Link className='city' to={{
                                    pathname: '/',
                                    linkDestination: {
                                        id: 1,
                                        countryCode: 'FR',
                                        name: 'Paris',
                                        language: 'French',
                                        currency: 'Euros €'
                                    }
                                }}>Paris</Link><br />
                            </div>
                        </div>
                    </div>
                    <div className='image overlay'>
                        <img src={London} width={500} height={400} alt="London" /><br />
                        <div className='overlay'>
                            <Link className='city' id='btnText' to={{
                                pathname: '/',
                                linkDestination: {
                                    id: 3,
                                    countryCode: 'GB',
                                    name: 'London',
                                    language: 'English',
                                    currency: 'Pound Sterling £'
                                }
                            }}>London</Link><br />
                        </div>
                    </div>
                </section>

                <section className='row align-items-center '>
                    <div className='image overlay'>
                        <div className='col align-self-center'>
                            <img src={RioDeJaneiro} width={500} height={400} alt="Rio De Janeiro" /><br />
                            <div className='overlay'>
                                <Link className='city' id='btnText' to={{
                                    pathname: '/',
                                    linkDestination: {
                                        id: 2,
                                        countryCode: 'BR',
                                        name: 'Rio De Janeiro',
                                        language: 'Brazilian Portuguese',
                                        currency: 'Reais R$'
                                    }
                                }}>Rio De Janeiro</Link><br />
                            </div>
                        </div>
                    </div>
                    <div className='col align-self-center'>
                        <div className='image overlay'>
                            <img src={NYC} width={500} height={400} alt="New York City" /><br />
                            <div className='overlay'>
                                <Link className='city' id='btnText' to={{
                                    pathname: '/',
                                    linkDestination: {
                                        id: 4,
                                        countryCode: 'US',
                                        name: 'New York City',
                                        language: 'English',
                                        currency: 'USD $'
                                    }
                                }}>NYC</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </main >

    );
};

export default Destination;