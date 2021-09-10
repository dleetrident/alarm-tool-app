import "./App.css";

import { useState } from "react";
import TimerSelector from "./layout/TimerSelector";
import DisplayTimers from "./layout/DisplayTimers";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TimerSelector />
        <DisplayTimers />
      </header>
    </div>
  );
}

export default App;
