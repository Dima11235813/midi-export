import React from 'react'

const  MidiTrigger = ({style, onclickHandler}) => {
    return (
        <div style={style} onclick={onclickHandler}>Generate Midi File</div>
    )
}

export default MidiTrigger