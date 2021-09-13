import { useState } from 'react';
import axios from 'axios';

const SchedForm = ({didSubmit, selectedDate}) => {
    const [time, setTime] = useState('');
    const [venueAddress, setVenueAddress] = useState('');
    const [venue, setVenue] = useState('');
    const [client, setClient] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        submitSched();
    };
    const submitSched = async () => {
        await axios.post('/api/sched', { time: time, date:selectedDate, client: client, venue: venue, venueAddress: venueAddress });
        setClient('');
        setVenueAddress('');
        setVenue('');
        setTime('');
        didSubmit();
    };


    return (
        <div>
            {/* <h2>Note Form</h2> */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="time"></label>
                <input
                    name='time'
                    placeholder='Meeting Time'
                    type='text'
                    value={time}
                    onChange={event => setTime(event.target.value)}
                />
                <br />
                <label htmlFor="client"></label>
                <input
                    name='client'
                    placeholder='Client/Company'
                    type='text'
                    value={client}
                    onChange={event => setClient(event.target.value)}
                />
                <br />
                <label htmlFor="venue"></label>
                <input
                    name='venue'
                    placeholder='Venue Name'
                    type='text'
                    value={venue}
                    onChange={event => setVenue(event.target.value)}
                />
                <br />
                <br />
                <label htmlFor="venueAddress"></label>
                <textarea
                    name='venueAddress'
                    placeholder='Venue Address'
                    value={venueAddress}
                    onChange={event => setVenueAddress(event.target.value)}
                />
                <br />
                <button className='btn btn-info' type='submit'>Save</button>
                {/* <button onClick={handleDelete} className= 'btn btn-danger' type='submit'>Delete</button> */}
            </form>
        </div>
    );
};

export default SchedForm;