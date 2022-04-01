import { useEffect } from "react"
import useTimer from "../hooks/use-timer"
import CardSm from "../UI/CardSm"





const CookingTimer = (props) => {

    
   
    const timer = useTimer(props.timeSet)
    const { hours, minutes, secs } = timer
   



 
    

    return (<CardSm >
        <h5 className="title is-5">{`${props.typeSet}:`}</h5>
        <h6 className="title is-6">{props.nameSet}</h6>
        <p>{hours} : {minutes} : {secs}</p>
        <button className="button is-dark" onClick={() => { return props.delete(props.id) }}>Delete</button>
</CardSm>)
}

export default CookingTimer