import React from "react"
import CardLg from "../../UI/CardLg"
import NewTimerForm from "./NewTimerForm"
import PresetTimerButtons from "./PresetTimerButtons"

import classes from "./InputTimerSection.module.css"

const InputTimerSection = () => {
    return <CardLg className={classes.card}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <NewTimerForm />
        <PresetTimerButtons />
        </div>
    </CardLg>
}

export default InputTimerSection
