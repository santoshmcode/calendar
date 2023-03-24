const getFirstAndLastDayOfDate = (D) => {
    const date = new Date(D);
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    return [firstDay, lastDay];
};

const numberOfDaysInMonthOfDate = (D) => {
    const [startDate, endDate] = getFirstAndLastDayOfDate(D);
    const differenceInMilliSecond = new Date(endDate) - new Date(startDate);
    const diffInDays = differenceInMilliSecond / (1000 * 60 * 60 * 24) + 1;
    return diffInDays;
};

const getFirstDayOfDate = (D) => {
    const [date] = getFirstAndLastDayOfDate(D);
    const daysArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return daysArray[date.getDay()];
};

const getMonthYearDateFormat = (D) => {
    const monthArray = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const date = new Date(D);
    const month = date.getMonth(); // January gives 0
    console.log("month:", monthArray[month]);
    const year = date.getFullYear();
    console.log("year:", year);
    return `${monthArray[month]} ${year}`;
};

export { numberOfDaysInMonthOfDate, getFirstDayOfDate, getMonthYearDateFormat };
