import "./App.css";
import Calendar from "./components/calendar";
const date = "12/31/2023";
function App() {
    console.log("date ", date);
    return (
        <div className="App">
            <Calendar date={date} />
        </div>
    );
}

export default App;
