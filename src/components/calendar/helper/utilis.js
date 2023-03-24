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

export { numberOfDaysInMonthOfDate };
