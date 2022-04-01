import React from "react"

import classes from "./Card.module.css"

const CardLg = (props) => {

    return (<div className={`${classes["card-lg"]} ${props.className}`} >{props.children}</div>)
}

export default CardLg