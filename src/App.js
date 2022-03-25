import "./App.css";

import TimerContainer from "./components/TimerContainer";
import TimerProvider from "./store/TimerProvider";
import CardLg from "./UI/CardLg";
import { useContext } from "react";
import TimerContext from "./store/timer-context";
import InputTimerSection from "./components/inputTimer/InputTimerSection";
import Header from "./layout/Header";

function App() {
  const timerCtx = useContext(TimerContext);
  console.log(timerCtx.timerList);
  return (
    <TimerProvider>
      <Header />
      <CardLg>
        <InputTimerSection />
      </CardLg>
      <TimerContainer />
    </TimerProvider>
  );
}

export default App;
