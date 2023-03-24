import React from "react";
import Head from "./Head";
import Main from "./Main";
import "./calendar.css";
import { isValidDate } from "./helper/utilis";

// date prop formate is mm/dd/yyyy in string
const Calendar = ({ date }) => {
    return (
        <div className="calendar-wrapper">
            {isValidDate(date) ? (
                <>
                    <Head date={date} />
                    <Main date={date} />
                </>
            ) : (
                <div className="invalid-date">Invalid Date</div>
            )}
        </div>
    );
};

export default Calendar;
