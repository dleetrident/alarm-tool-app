import React from "react"
import NewTimerForm from "./NewTimerForm"
import PresetTimerButtons from "./PresetTimerButtons"

const InputTimerSection = () => {
    return <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <NewTimerForm />
        <PresetTimerButtons />
    </div>
}

export default InputTimerSection
