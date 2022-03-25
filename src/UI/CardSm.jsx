import React from "react"

import classes from "./Card.module.css"

const CardSm = (props) => {

    return (<div className={classes["card-sm"]} >{props.children}</div>)
}

export default CardSm