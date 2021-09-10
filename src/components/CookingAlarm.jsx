import useTimer from "../hooks/use-timer"


const CookingAlarm = (props) => {

    
    const timer = useTimer(props.timeSet)
 const {hours, minutes, secs} = timer
    

 
    
    return (<div>
        <p>{hours} : {minutes} : {secs}</p>
</div>)
}

export default CookingAlarm