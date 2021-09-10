import { useState } from "react"

import AlarmContainer from "../components/AlarmContainer"

function TimerSelector(props) {
    const [timerOptions, setTimerOptions] = useState(["Chicken Breast", "Oatmeal", "Rice", "Beans"])
    const [displayTimers,setDisplayTimers] = useState([])
    

    function showSelectedTimer() {
        const {name, value} 
        setDisplayTimers(prevValue => {
            [
                ...prevValue,
                
            ]
        })
    }
    return <div>
        {timerOptions.map((x, i) => <button onClick={showSelectedTimer} id={i} name={x}>{x}</button>)}
        {displayTimers.map(x => <AlarmContainer timeSet={x} />)}
    </div>
}

export default TimerSelector