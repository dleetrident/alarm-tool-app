import useTimer from "../hooks/use-timer"
import Card from "../UI/Card"




const CookingTimer = (props) => {
  
    
   
    const timer = useTimer(props.timeSet)
 const {hours, minutes, secs} = timer
    

 
    

    return (<Card>
        <h3>{props.nameSet}</h3>
        <h4>{props.typeSet}</h4>
        <p>{hours} : {minutes} : {secs}</p>
        <button onClick={() => { return props.delete(props.id) }}>Delete</button>
</Card>)
}

export default CookingTimer