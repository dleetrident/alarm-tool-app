import React, { useState, useRef, useContext } from "react";
import TimerContext from "../../store/timer-context";

import classes from "./NewTimerForm.module.css";

const NewTimerForm = (props) => {
    const defaultBtnStatus = {
        cooking: false,
        errend: false,
        event: false,
    }
    const [btnStatus, setBtnStatus] = useState(defaultBtnStatus);
    const [btnClicked, setBtnClicked] = useState(false);
    
        
    const timerCtx = useContext(TimerContext);
    const nameRef = useRef();
    const [timerType,setTimerType] = useState("");
    const timeRef = useRef();
    
    const { addTimer } = timerCtx;
    const submitHandler = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const type = timerType;
        const time = timeRef.current.value;
        const identifier = Math.random();
        const timerObj = {
            id: identifier,
            name: name,
            type: type,
            time: time,
        };
        console.log(timerObj)
        if (name.trim() === "" || type === "" || time === "") {
           
            return;
        }
        
        return addTimer(timerObj);
    };

    const typeHandler = event => {
        event.preventDefault()

        const btnType = event.target.name;
        console.log(btnType)
        setTimerType(() => {
            if (btnClicked === false) {
                return btnType
            } else {
                return ""
            }
        })
 
       setBtnStatus(() => {
           if (btnType === "cooking" && btnClicked === false) {           
                return {
                    cooking: false,
                    errend: true,
                    event: true,
                }
            }
           if (btnType === "errend" && btnClicked === false) { 
                return {
                    cooking: true,
                    errend: false,
                    event: true,
                    }
            }
           if (btnType === "event" && btnClicked === false) {
                return {
                    cooking: true,
                    errend: true,
                event: false,
        }
            }
           else {
               return defaultBtnStatus
           }
         })

        
      
            setBtnClicked((prevValue) => {
                return !prevValue
            })
        
   

  
         console.log(btnClicked)
 
        console.log(btnStatus)
        console.log(timerType)
        
    }

    

    return (<form className={classes.form} onSubmit={submitHandler}>
        <div className="field">
            <label className="label" htmlFor="name">Alarm Name</label>
        <input className="input is-primary" type="text" id="name" ref={nameRef} placeholder="Input Alarm Name"></input></div>
        <div className="field">
            <label className="label" htmlFor="type">Alarm Type</label>
            <button className="button is-primary" name="cooking" value="Cooking" onClick={typeHandler} disabled={btnStatus.cooking}>Cooking</button>
            <button className="button is-primary" name="errend" value="Errend" onClick={typeHandler}  disabled={btnStatus.errend}>Errend</button>
            <button className="button is-primary" name="event" value="Event" onClick={typeHandler}  disabled={btnStatus.event}>Event</button></div>
        <div className="field">
            <label className="label" htmlFor="time">Alarm Duration</label>
        <input className ="input is-primary" type="time" id="time" name="time"  ref={timeRef}/></div>



        <button className="button is-dark" type="submit">Add</button>
    </form>)
}

export default NewTimerForm