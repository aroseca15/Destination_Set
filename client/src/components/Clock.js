import React, { useState, useEffect } from 'react';

export const DateTime = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {

        const time = setInterval(() => setDate(new Date()), 60000);
        return function cleanup() {
            clearInterval(time);
        };
    });

    return (
        <div>
            <h4 id='h1'>
                {date.toLocaleDateString()} <br />
                {date.toLocaleTimeString()}
            </h4>
        </div>
    );
};

export default DateTime; 