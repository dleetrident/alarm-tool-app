import React, { useState,useRef, useContext } from "react"
import TimerContext from "../../store/timer-context"

const NewTimerForm = (props) => {
    const timerCtx = useContext(TimerContext)
    const nameRef = useRef()
    let timerType = ""
    const timeRef = useRef()
    
    const { addTimer } = timerCtx
    const submitHandler = event => {
        event.preventDefault()
        const name = nameRef.current.value 
        const type = timerType
        const time = timeRef.current.value 
        const identifier = Math.random()
        const timerObj = {
            id: identifier,
            name: name,
            type: type,
            time: time,
        }
        return addTimer(timerObj)
    }
    const typeHandler = event => {
        event.preventDefault()
        timerType = event.target.value
    }

    return (<form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameRef}></input>
        <label htmlFor="type">Type</label>
            <button value="Cooking" onClick={typeHandler}>Cooking</button>
            <button value="Errend" onClick={typeHandler}>Errend</button>
            <button value="Event" onClick={typeHandler}>Event</button>
        <label htmlFor="time">Time</label>
        <input type="time" id="time" name="time"  ref={timeRef}/>
        <button type="submit">Add</button>
    </form>)
}

export default NewTimerForm