import React, { useEffect, useState } from "react";
import "./calendar.css";
import { numberOfDaysInMonthOfDate } from "./helper/utilis";

const Main = ({ date }) => {
    const [noOfDates, setNoOfDates] = useState([]);
    const daysArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    useEffect(() => {
        let tempArr = [];
        const totalDates = numberOfDaysInMonthOfDate(date);

        for (let i = 1; i <= totalDates; i++) {
            tempArr.push(i);
        }
        setNoOfDates(tempArr);
    }, [date]);

    return (
        <div className="main">
            {daysArray.map((day) => (
                <div className="day" key={day}>
                    {day}
                </div>
            ))}

            {noOfDates.map((el) => (
                <div key={el}>{el}</div>
            ))}
        </div>
    );
};

export default Main;
