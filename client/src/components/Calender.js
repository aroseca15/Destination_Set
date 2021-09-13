
import { Fragment, } from 'react';
import CalenderHook from '../hooks/calender';
import '../assets/stylesheetsComponents/Calender.css';
// import { col } from 'sequelize/types';
// https://www.yelp.com/

export const Calender = ({ scheds, setSelectedDate }) => {
    const { calenderRows, selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth } = CalenderHook();
    const dateClickHandler = date => {
        setSelectedDate(date);
    };

    console.log(daysShort);
    return (
        <main id='card' className='card col-12'>
            <Fragment>
                <h1 id='schedule' className="display-4">Meeting Schedule</h1>
                <p>Selected Month: {`${monthNames[selectedDate.getMonth()]}-${selectedDate.getFullYear()}`}</p>
                <table id='calender' className='table'>
                    <thead>
                        <tr>
                            {daysShort.map(day => {
                                console.log(day);
                                return (<th key={day}>{day}</th>);
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.values(calenderRows).map(cols => {
                                return <tr key={cols[0].date}>
                                    {cols.map(col => {
                                        if (col.date === todayFormatted) {
                                            col.classes += ' today';
                                        }
                                        return (<td onKeyPress={() => console.log(col.date)} key={col.date} className={col.classes} onClick={() => dateClickHandler(col.date)}>{col.day}</td>);

                                    })}
                                </tr>;
                            })
                        }
                    </tbody>
                </table>
                <button className='btn btn-secondary button' onClick={getPrevMonth}>Previous</button>
                <button className='btn btn-success button' onClick={getNextMonth}>Next</button>
            </Fragment>
        </main>


    );
};

export default Calender;

