import React from "react"

const TimerContext = React.createContext({
    count: 0,
    hours: 0,
    mins: 0,
    secs: 0,
})

export default TimerContext