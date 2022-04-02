import "./App.css";

import TimerContainer from "./components/TimerContainer";
import TimerProvider from "./store/TimerProvider";
import { useContext } from "react";
import TimerContext from "./store/timer-context";
import InputTimerSection from "./components/inputTimer/InputTimerSection";
import Header from "./layout/Header";
import MainContainer from "./layout/MainContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const timerCtx = useContext(TimerContext);
  console.log(timerCtx.timerList);
  return (
    <TimerProvider>
      <Header />
      <MainContainer>
        <InputTimerSection />
        <TimerContainer />
      </MainContainer>
      <ToastContainer />
    </TimerProvider>
  );
}

export default App;
