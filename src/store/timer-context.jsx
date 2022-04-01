import React from "react"

const TimerContext = React.createContext({
    timerList: [],
    addTimer: (timerObj) => {},
    deleteTimer: (id) => { },
})

export default TimerContext