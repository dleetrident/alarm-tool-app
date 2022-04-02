import useTimer from "../hooks/use-timer";
import CardSm from "../UI/CardSm";

const CookingTimer = (props) => {
  const timer = useTimer(props.timeSet);
  const { hours, minutes, secs } = timer;

  const type = props.typeSet;
  let typeEmoticon = "";
  if (type === "Cooking") {
    typeEmoticon = "🥣";
  } else if (type === "Errend") {
    typeEmoticon = "🏃";
  } else if (type === "Event") {
    typeEmoticon = "🎫";
  }

  return (
    <CardSm>
      <h5 className="title is-6 tag is-info is-light">{`${typeEmoticon}${props.typeSet}`}</h5>
      <br />
      <h6 className="title is-6 tag is-primary is-light">{props.nameSet}</h6>
      <br />
      <p className="title is-6 tag is-white">
        {hours} : {minutes} : {secs}
      </p>
      <br />
      <button
        className="button is-dark"
        onClick={() => {
          return props.delete(props.id);
        }}>
        Delete
      </button>
    </CardSm>
  );
};

export default CookingTimer;
