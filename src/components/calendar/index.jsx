import React from "react";
import Head from "./Head";
import Main from "./Main";

// date prop formate is mm/dd/yyyy in string
const Calendar = ({ date }) => {
    return (
        <div className="calendar-wrapper">
            <Head date={date} />
            <Main date={date} />
        </div>
    );
};

export default Calendar;
