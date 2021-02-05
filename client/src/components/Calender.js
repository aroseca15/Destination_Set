
import { Fragment } from 'react';
import CalenderHook from '../hooks/calender';
import '../assets/stylesheetsComponents/Calender.css';
// https://www.yelp.com/

export const Calender = () => {
    const { calenderRows, selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth } = CalenderHook();
    const dateClickHandler = date => {
        console.log(date);
    };

    console.log(daysShort);
    return (
        <main className='container'>
            <Fragment>
                <p>Selected Month: {`${monthNames[selectedDate.getMonth()]}-${selectedDate.getFullYear()}`}</p>
                <table className='table calender'>
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
                                    {cols.map(col => (
                                        col.date === todayFormatted
                                            ? <td key={col.date} className={`${col.classes} today`} onClick={() => dateClickHandler(col.date)}>{col.day}</td>
                                            : <td key={col.date} className={col.classes} onClick={() => dateClickHandler(col.date)}>{col.day}</td>
                                    ))}
                                </tr>;
                            })
                        }
                    </tbody>
                </table>
                <button className='button' onClick={getPrevMonth}>Previous</button>
                <button className='button' onClick={getNextMonth}>Next</button>
            </Fragment>
        </main>


    );
};

export default Calender;

