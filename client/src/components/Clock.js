import React, { useState, useEffect } from 'react';

export const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {

        const time = setInterval(() => setDate(new Date()), 1000);
        return function cleanup() {
            clearInterval(time);
        };
    });

    return (
        <div>
            <h4 id='BbannerText'>
                {date.toLocaleDateString()} <br />
                {date.toLocaleTimeString()}
            </h4>
        </div>
    );
};

export default Clock; 