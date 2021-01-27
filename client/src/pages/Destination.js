import { Link } from 'react-router-dom';
import Logo from '../assets/images/codingchamber.png';

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

        <div className='App'>

            <div className='icons'>

                <Link to={{
                    pathname: '/',
                    linkDestination: {
                        name: 'Paris',
                    }
                }}>Paris</Link><br />

                <img src={Logo} width={200} height={100} alt="I am an image"/>
                <Link to={{
                    pathname: '/',
                    linkDestination: {
                        name: 'London',
                    }
                }}>London</Link><br />

                {/* <img src=''></img> */}
                <Link to={{
                    pathname: '/',
                    linkDestination: {
                        name: 'Rio De Janeiro',
                    }
                }}>Rio De Janeiro</Link><br />

                {/* <img src=''></img> */}
                <Link to={{
                    pathname: '/',
                    linkDestination: {
                        name: 'NYC',
                    }
                }}>NYC</Link>
            </div>
            
        </div >

    );
};

export default Destination;