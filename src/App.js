import "./App.css";
import CookingAlarm from "./components/CookingAlarm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CookingAlarm />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
