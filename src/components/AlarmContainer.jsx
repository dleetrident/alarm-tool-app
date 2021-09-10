import { useState } from "react"
import CookingAlarm from "./CookingAlarm";

function AlarmContainer(props) {
      const [showTimer, setShowTimer] = useState(false);
  function handleTimer() {
    setShowTimer(true);
  }
    return (<div>
        {showTimer && <CookingAlarm timeSet={props.timeSet}/>}
        <button onClick={handleTimer} >Start Timer</button>
    </div>)
}

export default AlarmContainer