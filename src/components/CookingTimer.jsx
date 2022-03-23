import useTimer from "../hooks/use-timer"




const CookingTimer = (props) => {
  
    
   
    const timer = useTimer(props.timeSet)
 const {hours, minutes, secs} = timer
    

 
    

    return (<div>
        <h3>{props.nameSet}</h3>
        <h4>{props.typeSet}</h4>
        <p>{hours} : {minutes} : {secs}</p>
        <button onClick={() => { return props.delete(props.id) }}>Delete</button>
</div>)
}

export default CookingTimer