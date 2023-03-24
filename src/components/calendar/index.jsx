import React from "react";
import Head from "./Head";
import Main from "./Main";

// date prop formate is mm/dd/yyyy in string
const Calendar = ({ date }) => {
    return (
        <div className="calendar-wrapper">
            <Head data="October 2020" />
            <Main date={date} />
        </div>
    );
};

export default Calendar;
