import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Calendar from "../components/calendar/index";

test("Testing Total number Days in Dec Month", () => {
    render(<Calendar date={"12/12/1997"} />);
    const datesArray = screen.queryAllByRole("date");
    expect(datesArray.length).toBe(31);
});

test("Testing Total number Days in June Month", () => {
    render(<Calendar date={"06/12/2024"} />);
    const datesArray = screen.queryAllByRole("date");
    expect(datesArray.length).toBe(30);
});

test("Testing Total number Days in Feb Month", () => {
    render(<Calendar date={"02/12/2023"} />);
    const datesArray = screen.queryAllByRole("date");
    expect(datesArray.length).toBe(28);
});

test("Testing Total number Days in Feb Month of leap year", () => {
    render(<Calendar date={"02/12/2000"} />);
    const datesArray = screen.queryAllByRole("date");
    expect(datesArray.length).toBe(29);
});

test("Testing 1st date of Month starts on Correct Day", () => {
    render(<Calendar date={"02/12/2000"} />);
    const emptyDatesArray = screen.queryAllByRole("empty-date-place-holders");
    expect(emptyDatesArray.length).toBe(2);
});

test("Testing 1st date of Month starts on Correct Day", () => {
    render(<Calendar date={"11/12/2020"} />);
    const emptyDatesArray = screen.queryAllByRole("empty-date-place-holders");
    expect(emptyDatesArray.length).toBe(0);
});

test("Testing Order of weeks", () => {
    render(<Calendar date={"11/12/2020"} />);
    const daysArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const emptyDatesArray = screen.queryAllByRole("day");
    emptyDatesArray.map((el, i) =>
        expect(emptyDatesArray[i].innerHTML).toBe(daysArray[i])
    );
});
