import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./StatsBody.css";
import fetch from "./api";

import "react-datepicker/dist/react-datepicker.css";

export default ({switchRoute }) => {

    const [username, setUsername] = useState("");
    const [datePart, setDatePart] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    async function fetchStatistics(e) {
        e.preventDefault();
        e.persist();
        const response = await fetch({ username, startDate: startDate.toISOString(), endDate: endDate.toISOString(), datePart: datePart || "WeekDay" });
        const body = await response.json();
        switchRoute(body);
    }
    return (
        <main>
        <p></p>
            <label>Users
                <input onChange={e => setUsername(e.target.value)} />
            </label>

    <p></p>
            <label>Daily
            <input type="checkbox" value="weekDay" checked={datePart=="WeekDay"} onChange={e => setDatePart("WeekDay")}></input></label>

            <label>Week
            <input type="checkbox" value="week" checked={datePart==="Week"} onChange={e => setDatePart("Week")}></input></label>

            <label>Monthly
            <input type="checkbox" value="month" checked={datePart==="Month"} onChange={e => setDatePart("Month")}></input></label>

            <label>Yearly
            <input type="checkbox" value="year" checked={datePart==="Year"} onChange={e => setDatePart("Year")}></input></label>

            <p></p>
            <label>Start date
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} /></label>

            <p></p>

            <label>End date
            <DatePicker selected={endDate} onChange={date => setEndDate(date)} /></label>
            <p></p>

            <form><input type="submit" value="Submit" onClick={e => fetchStatistics(e)}></input></form>
        </main>
    );

}
