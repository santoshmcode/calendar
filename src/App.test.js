import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("testing Full application for valid date", () => {
    render(<App />);

    const date = "12/23/2023";

    // Adding valid date in input
    const inputElement = screen.getByRole("input");
    fireEvent.change(inputElement, { target: { value: date } });

    // clicking submit btn
    const submitBtnElement = screen.getByRole("submit-btn");
    fireEvent.click(submitBtnElement);

    // checking expected heading
    const headingElement = screen.getByRole("heading");
    expect(headingElement.innerHTML).toBe("December 2023");

    // checking 1st date of the month is statring from correct day here in this case
    // 1st of Dec is comming on Fri which is 6th day so there should be 5 empty dates
    // at start of calender
    const emptyDatesArray = screen.queryAllByRole("empty-date-place-holders");
    expect(emptyDatesArray.length).toBe(5);

    // checking total numbers of days in month
    const datesArray = screen.queryAllByRole("date");
    expect(datesArray.length).toBe(31);
});

test("testing Full application for invalid date", () => {
    render(<App />);

    const date = "02/29/2023";

    // Adding valid date in input
    const inputElement = screen.getByRole("input");
    fireEvent.change(inputElement, { target: { value: date } });

    // clicking submit btn
    const submitBtnElement = screen.getByRole("submit-btn");
    fireEvent.click(submitBtnElement);

    // checking for invalid date
    const btnElement = screen.getByText(/invalid date/i);
    expect(btnElement).toBeInTheDocument();
});
