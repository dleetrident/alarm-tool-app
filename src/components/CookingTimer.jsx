import useTimer from "../hooks/use-timer"
import CardSm from "../UI/CardSm"




const CookingTimer = (props) => {
  
    
   
    const timer = useTimer(props.timeSet)
 const {hours, minutes, secs} = timer
    

 
    

    return (<CardSm >
        <h3>{props.nameSet}</h3>
        <h4>{props.typeSet}</h4>
        <p>{hours} : {minutes} : {secs}</p>
        <button className="button is-dark" onClick={() => { return props.delete(props.id) }}>Delete</button>
</CardSm>)
}

export default CookingTimer