// import moment from 'moment';


// https://www.yelp.com/

export const Calender = () => {
    

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