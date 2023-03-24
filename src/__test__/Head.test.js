import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Calendar from "../components/calendar/index";

test("testing Top Heading of Calender Component", () => {
    render(<Calendar date={"06/12/1997"} />);
    const btnElement = screen.getByRole(/heading/i);
    expect(btnElement.innerHTML).toBe("June 1997");
});

test("testing Top Heading of Calender Component", () => {
    render(<Calendar date={"03/24/2023"} />);
    const btnElement = screen.getByRole(/heading/i);
    expect(btnElement.innerHTML).toBe("March 2023");
});
