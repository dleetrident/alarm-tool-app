import "./App.css";

import TimerContainer from "./components/TimerContainer";
import TimerProvider from "./store/TimerProvider";
import NewTimerForm from "./components/inputTimer/NewTimerForm";

function App() {
  return (
    <TimerProvider>
      <div className="App">
        <header className="App-header">
          <NewTimerForm />
          <TimerContainer timeSet="20" />
        </header>
      </div>
    </TimerProvider>
  );
}

export default App;
