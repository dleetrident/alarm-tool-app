import React from "react"

import classes from "./MainContainer.module.css"

const MainContainer = (props) => {
    return <section className={classes.main}>{props.children}</section>
}

export default MainContainer