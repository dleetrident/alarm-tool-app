import { useState,useContext } from "react"
import TimerContext from "../store/timer-context";
import CookingTimer from "./CookingTimer";





function TimerContainer(props) {
      const timerCtx = useContext(TimerContext)
  const { timerList, deleteTimer } = timerCtx
  const deleteTimerHandler = (id) => {
  
    return deleteTimer(id)
  }
  return (<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}> 
    
      {timerList.map((item) => <div ><CookingTimer key={item.id} id={item.id} nameSet={item.name} typeSet={item.type} timeSet={item.time} delete={deleteTimerHandler}/></div>)}
        
    </div>)
}

export default TimerContainer