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
    const year = date.getFullYear();
    return `${monthArray[month]} ${year}`;
};

const isValidDate = (D) => {
    let [month, day, year] = D.split("/").map((el) => el / 1);
    month = month - 1;
    var date = new Date(year, month, day);
    if (
        date.getFullYear() == year &&
        date.getMonth() == month &&
        date.getDate() == day
    ) {
        return true;
    }
    return false;
};

const todaysDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return mm + "/" + dd + "/" + yyyy;
};

export {
    numberOfDaysInMonthOfDate,
    getFirstDayOfDate,
    getMonthYearDateFormat,
    isValidDate,
    todaysDate,
};
