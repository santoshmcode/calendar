import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Calendar from "../components/calendar";

test("testing For Invalid Date", () => {
    render(<Calendar date={"02/30/2023"} />);
    const btnElement = screen.getByText(/invalid date/i);
    expect(btnElement).toBeInTheDocument();
});
