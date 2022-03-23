import TimerContext from "./timer-context";
import {useReducer} from "react"

const defaultTimerState = {
  timerList: [],
 
}
const timerReducer = (state, action) => {
    let updatedTimers;
    if (action.type === "ADD") {
        const timeString = action.newItem.time
        console.log(action.newItem)
        const hours = +timeString.substring(0, 2)
        const minutes = +timeString.substring(3, 5)
        const totalTimeSecs = hours * 3600 + minutes * 60
        const updatedTimer = {id: action.newItem.id,name: action.newItem.name,type:action.newItem.type,time:totalTimeSecs}
        updatedTimers = state.timerList.concat(updatedTimer)
        return {timerList: updatedTimers}
    }
    if (action.type === "REMOVE") {
           
    
    console.log(action.id)
    
        updatedTimers = state.timerList.filter((item) => item.id !== action.id);
        console.log(updatedTimers)
        return {timerList: updatedTimers}
    }
    
    return defaultTimerState
}


const TimerProvider = (props) => {
const [timerState,dispatchTimerAction] = useReducer(timerReducer,defaultTimerState)
    const addTimer = (timerObj) => {
    dispatchTimerAction({type: "ADD",newItem: timerObj})
    }
    const deleteTimer = (id) => {
dispatchTimerAction({type: "REMOVE",id: id})
    }
    const timerContext = {
  timerList: timerState.timerList,
    addTimer: addTimer,
    deleteTimer: deleteTimer,
    }
    return (<TimerContext.Provider value={timerContext} >
        {props.children}
    </TimerContext.Provider>)
}

export default TimerProvider