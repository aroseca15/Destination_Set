import { useState } from 'react';
const daysShortArray = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
const monthNamesArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


const CalenderHook = (daysShort = daysShortArray, monthNames = monthNamesArray) => {
    const today = new Date();
    const todayFormatted = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
    const daysInWeek = [0, 1, 2, 3, 4, 5, 6];
    const [selectedDate, setSelectedDate] = useState(today);
    const selectedMonthLastDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
    const prevMonthLastDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 0);
    const daysInMonth = selectedMonthLastDate.getDate();
    const firstDayInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();
    const startingPoint = daysInWeek.indexOf(firstDayInMonth) + 1;
    // I hate lint sometimes.
    let prevMonthStaringPoint = '';
    prevMonthStaringPoint = prevMonthLastDate.getDate() - daysInWeek.indexOf(firstDayInMonth) + 1;
    let currentMonthCounter = '';
    currentMonthCounter = 1;
    let nextMonthCounter = '';
    nextMonthCounter = 1;
    const rows = 6;
    const cols = 7;
    const calenderRows = {};

    for (let i = 1; i < rows + 1; i++) {
        for (let j = 1; j < cols + 1; j++) {
            if (!calenderRows[i]) {
                calenderRows[i] = [];
            }

            if (i === 1) {
                if (j < startingPoint) {
                    calenderRows[i] = [...calenderRows[i], {
                        classes: 'in-prev-month',
                        date: `${selectedDate.getMonth() === 0 ? 12 : selectedDate.getMonth()}-${prevMonthStaringPoint}-${selectedDate.getMonth() === 0 ? selectedDate.getFullYear() - 1 : selectedDate.getFullYear()}`,
                        day: `${prevMonthStaringPoint}`,
                        value: prevMonthStaringPoint
                    }];
                    prevMonthStaringPoint++;
                } else {
                    calenderRows[i] = [...calenderRows[i], {
                        classes: '',
                        date: `${selectedDate.getMonth() + 1}-${currentMonthCounter}-${selectedDate.getFullYear()}`,
                        day: `${currentMonthCounter}`,
                        value: currentMonthCounter
                    }];
                    currentMonthCounter++;
                }
            } else if (i > 1 && currentMonthCounter < daysInMonth + 1) {
                calenderRows[i] = [...calenderRows[i], {
                    classes: '',
                    date: `${selectedDate.getMonth() + 1}-${currentMonthCounter}-${selectedDate.getFullYear()}`,
                    day: `${currentMonthCounter}`,
                    value: currentMonthCounter
                }];
                currentMonthCounter++;
            } else {
                calenderRows[i] = [...calenderRows[i], {
                    classes: 'in-next-month',
                    date: `${selectedDate.getMonth() + 2 === 13 ? 1 : selectedDate.getMonth() + 2}-${nextMonthCounter}-${selectedDate.getMonth() + 2 === 13 ? selectedDate.getFullYear() + 1 : selectedDate.getFullYear()}`,
                    day: `${nextMonthCounter}`
                }];
                nextMonthCounter++;
            }
        }
    }
    const getPrevMonth = () => {
        setSelectedDate(prevValue => new Date(prevValue.getFullYear(), prevValue.getMonth() - 1, 1));
    };

    const getNextMonth = () => {
        setSelectedDate(prevValue => new Date(prevValue.getFullYear(), prevValue.getMonth() + 1, 1));
    };

    return {
        daysShort,
        monthNames,
        todayFormatted,
        calenderRows,
        selectedDate,
        getPrevMonth,
        getNextMonth
    };
};

export default CalenderHook;


