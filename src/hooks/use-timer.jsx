import { useState, useEffect } from "react"
import useSound from "use-sound"
const sound = require( "../assets/alarmSound.mp3")


const useTimer = (input) => {
    const [totalTime, setTotalTime] = useState(input)
    

    
        const audio = new Audio(sound)
        audio.muted = true;
   let audioplay = () => audio.play()
  
    useEffect(() => {
        if (totalTime > 0) {
               const interval = setInterval(() => {
            setTotalTime((prevCounter) => prevCounter - 1);  
               }, 1000);
            return () => clearInterval(interval)
        } else {
            audioplay()
        }
 
    }, [totalTime]);
    
    
      let hours = Math.floor(totalTime / 3600)
    let minutes = Math.floor((totalTime % 3600) / 60)
    let secs = totalTime % 60
    return {
        hours,
        minutes,
        secs,
    }
}

export default useTimer