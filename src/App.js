import { useState } from "react";
import "./App.css";
import Calendar from "./components/calendar";

function App() {
    const [date, setDate] = useState("12/27/2022");
    const [input, setInput] = useState("");
    const handleInputChange = (e) => {
        setInput(e.target.value);
    };
    const handleSubmit = () => {
        setDate(input);
    };
    return (
        <div className="App">
            <input
                onChange={(e) => handleInputChange(e)}
                type="text"
                placeholder="mm/dd/yyyy"
            />
            <button onClick={handleSubmit}>Search</button>
            <Calendar date={date} />
        </div>
    );
}

export default App;
