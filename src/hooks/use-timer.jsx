import { useState, useEffect, useCallback, useMemo } from "react";
import { toast } from "react-toastify";

import beep from "../assets/AlarmSound.wav";

const useTimer = (inputTime) => {
  const [totalTime, setTotalTime] = useState(inputTime);

  const audio = useMemo(() => new Audio(beep), []);

  let audioplay = useCallback(() => audio.play(), [audio]);

  useEffect(() => {
    if (totalTime > 0) {
      const interval = setInterval(() => {
        setTotalTime((prevCounter) => prevCounter - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      toast("🔔 Alarm Is Ringing! 🔔", {
        position: "top-left",
      });
      audioplay();
    }
  }, [totalTime, audioplay]);

  let hours = Math.floor(totalTime / 3600);
  let minutes = Math.floor((totalTime % 3600) / 60);
  let secs = totalTime % 60;
  return { hours, minutes, secs };
};

export default useTimer;
