import React, { useState } from 'react'

const DateComponent = ({ id, label }) => {
    const [minDate, setMinDate] = useState('');

    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];

    // Update minDate state with today's date
    useState(() => {
        setMinDate(today);
    }, []);

    // const handleDateChange = (event) => {
    //     setMinDate(event.target.value);
    // }

    return (
        <div>
            <label htmlFor={id}>{label}:</label>
            <input type="date" id={id} name={id} min={minDate} />
        </div>
    );

}

export default DateComponent