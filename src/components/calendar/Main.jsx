import React, { useEffect, useState } from "react";
import { getFirstDayOfDate, numberOfDaysInMonthOfDate } from "./helper/utilis";
const daysArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Main = ({ date }) => {
    const [noOfDates, setNoOfDates] = useState([]);
    const [blankDates, setBlankDates] = useState([]);
    const [todaysDate, setTodaysDate] = useState();

    useEffect(() => {
        let tempArr = [];
        const totalDates = numberOfDaysInMonthOfDate(date);
        for (let i = 1; i <= totalDates; i++) {
            tempArr.push(i);
        }
        setNoOfDates(tempArr);

        const tempArr2 = [];
        const firstDay = getFirstDayOfDate(date);
        const indexOfDay = daysArray.indexOf(firstDay);
        for (let i = 0; i < indexOfDay; i++) {
            tempArr2.push("blank-key-" + i);
        }
        setBlankDates(tempArr2);

        setTodaysDate(new Date(date).getDate());
    }, [date]);

    return (
        <div className="main">
            {daysArray.map((day) => (
                <div className="day" key={day}>
                    {day}
                </div>
            ))}

            {blankDates.map((el) => (
                <div key={el}></div>
            ))}
            {noOfDates.map((el) => (
                <div
                    active={todaysDate === el ? "active" : undefined}
                    className="date"
                    key={el}
                >
                    {el}
                </div>
            ))}
        </div>
    );
};

export default Main;
