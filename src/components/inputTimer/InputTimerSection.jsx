import React from "react";
import CardLg from "../../UI/CardLg";
import NewTimerForm from "./NewTimerForm";

import classes from "./InputTimerSection.module.css";

const InputTimerSection = () => {
  return (
    <CardLg className={classes.card}>
      <NewTimerForm />
    </CardLg>
  );
};

export default InputTimerSection;
