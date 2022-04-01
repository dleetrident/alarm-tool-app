import React, { useState, useRef, useContext } from "react";
import TimerContext from "../../store/timer-context";
import { toast } from 'react-toastify';

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

    const [formIsInvalid,setFormIsInvalid] = useState(false)
    
    const { addTimer } = timerCtx;
    const [toastMessage,setToastMessage] = useState("Timer Added!")
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
               toast.error("😱 Input a name, type and time- it's mandatory!", {
position: "top-left",

});
           setFormIsInvalid(true)
            return;
        }
        setFormIsInvalid(false)


        toast(toastMessage, {
position: "top-left",

        });
       let timer = (+timeRef.current.value.substring(0,2) * 3600 + +timeRef.current.value.substring(3,5) * 60)  * 1000
        addTimer(timerObj);
        console.log(timer)
        // setTimeout(() => doneTimer(identifier),timer)
    };

    const typeHandler = event => {
        event.preventDefault()

        const btnType = event.target.name;

        setTimerType(() => {
            if (btnClicked === false) {
                return btnType
            } else {
                return ""
            }
        })
 
       setBtnStatus(() => {
           if (btnType === "Cooking" && btnClicked === false) {     
               setToastMessage("🥣 Cooking Timer Added!.. Try not to burn the house down this time..")
                return {
                    cooking: false,
                    errend: true,
                    event: true,
                }
            }
           if (btnType === "Errend" && btnClicked === false) { 
                              setToastMessage("🏃 Errend Timer Added! Now.. where are my running trainers hmm..")
                return {
                    cooking: true,
                    errend: false,
                    event: true,
                    }
            }
           if (btnType === "Event" && btnClicked === false) {
                              setToastMessage("🎫 Event Timer Added! Ahh! How exciting is this!")
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
            <button className="button is-primary" name="Cooking" value="Cooking" onClick={typeHandler} disabled={btnStatus.cooking}>Cooking</button>
            <button className="button is-primary" name="Errend" value="Errend" onClick={typeHandler}  disabled={btnStatus.errend}>Errend</button>
            <button className="button is-primary" name="Event" value="Event" onClick={typeHandler}  disabled={btnStatus.event}>Event</button></div>
        <div className="field">
            <label className="label" htmlFor="time">Alarm Duration</label>
        <input className ="input is-primary" type="time" id="time" name="time"  ref={timeRef}/></div>



        <button className="button is-dark" type="submit">Add</button>
        <br />
        {formIsInvalid ? <p className={classes["form-error"]}>Please input all required fields</p> : <br />}
    </form>)
}

export default NewTimerForm