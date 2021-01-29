// import moment from 'moment';
// import { useState } from 'react';

export const Calender = () => {
    // const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    // const days_leap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    // const days_of_wk = ['Sunday', 'Monday', 'Tuesday', 'Wedensday', 'Thursday', 'Friday', 'Saturday'];
    // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


    const style = {
        width: '14.2%'
        // padding: '30px',
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
    };
    // style props to check: isToday   isSelected
    return (
        <main className='container'>
            <section className='row align-items-start'>
                <div className='col'></div>
                <div className='col'></div>
                <div className='col'></div>
            </section>

            <section id='dayNames' className='row align-items-center'>
                <div style={style} className='col'>Monday</div>
                <div style={style} className='col'>Tuesday</div>
                <div style={style} className='col'>Wedensday</div>
                <div style={style} className='col'>Thursday</div>
                <div style={style} className='col'>Friday</div>
                <div style={style} className='col'>Saturday</div>
                <div style={style} className='col'>Sunday</div>
            </section>

            <section className='row align-items-center'>
                <div style={style} className='col'>day</div>
                <div style={style} className='col'>day</div>
                <div style={style} className='col'>day</div>
                <div style={style} className='col'>day</div>
                <div style={style} className='col'>day</div>
                <div style={style} className='col'>day</div>
            </section>
        </main>


    );
};

export default Calender;