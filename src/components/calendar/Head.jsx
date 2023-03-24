import React, { useEffect, useState } from "react";
import { getMonthYearDateFormat } from "./helper/utilis";

const Head = ({ date }) => {
    const [heading, setHeading] = useState("");
    useEffect(() => {
        setHeading(getMonthYearDateFormat(date));
    }, [date]);

    return <div>{heading}</div>;
};

export default Head;
