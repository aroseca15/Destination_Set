import { Link } from 'react-router-dom';

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
                {/* <button onClick={<Redirect to={{
                    id: 1,
                    pathname: '/',
                    state: { from: '/destination' }
                }}
                />}>Paris</button>

                <button onClick={<Redirect to={{
                    id: 2,
                    pathname: '/',
                    state: { from: '/destination' }
                }}
                />}>Rio De Janeiro</button> */}
                {/* <img src=''></img> */}
                <Link to={{
                    pathname: '/',
                    linkDestination: {
                        name: 'Paris',
                    }
                }}>Paris</Link><br />

                {/* <img src=''></img> */}
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

            {/* {selectCity ? <Business city={cityName} /> : <div></div>} */}
        </div >

    );
};

export default Destination;