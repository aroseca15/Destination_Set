// import { Redirect, useHistory, useLocation } from 'react-router-dom';

// import { useState } from 'react';
// import Business from './Business';

function Destination() {
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
                <button onClick={<Redirect to={{
                    id: 1,
                    pathname: '/business',
                    state: { from: '/destination' }
                }}
                />}>Paris</button>

                <button onClick={<Redirect to={{
                    id: 2,
                    pathname: '/business',
                    state: { from: '/destination' }
                }}
                />}>Rio De Janeiro</button>
                <button>London</button>
                <button>NYC</button>

            </div>

            {/* {selectCity ? <Business city={cityName} /> : <div></div>} */}
        </div >

    );
}

export default Destination;