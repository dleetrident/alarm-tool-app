import useTimer from "../hooks/use-timer"

const CookingAlarm = () => {
    const timer = useTimer(2)
    
    return (<div>
        <p>{timer.hours}</p>
        <p>{timer.minutes}</p>
        <p>{timer.secs}</p>
</div>)
}

export default CookingAlarm