import "./App.css";

import TimerContainer from "./components/TimerContainer";
import TimerProvider from "./store/TimerProvider";
import NewTimerForm from "./components/inputTimer/NewTimerForm";
import Card from "./UI/Card";
import { useContext } from "react";
import TimerContext from "./store/timer-context";

function App() {
  const timerCtx = useContext(TimerContext);
  console.log(timerCtx.timerList);
  return (
    <TimerProvider>
      <Card>
        <NewTimerForm />
      </Card>

      <TimerContainer />
    </TimerProvider>
  );
}

export default App;
