import React from 'react'
import MidiTrigger from './MidiInterfaceParts/MidiTrigger'
import ExportMidi from './MidiInterfaceParts/ExportMidi'

const globalStyles = {
    cursor: 'pointer'
}

class MidiInterface extends React.Component{
    constructor(){
        super()
        const sizeOfTrigger = 50
        this.state = {
            triggers : new Array(8).fill(false),
            styleForTrigger: {
                height: `${sizeOfTrigger}px`,
                width: `${sizeOfTrigger}px`,
                margin: "10px 10px",
                ...globalStyles
            },
            styleForExportButton: {
                height: `${sizeOfTrigger * 2}px`,
                width: `${sizeOfTrigger * 2}px`,
                backgroundColor: 'green',
                ...globalStyles
            }
        }
    }
    exportMidiFile = () => {
        this.generateMidistringFromTriggers()
    }
    generateMidistringFromTriggers = () => {
        //return string base on this.state.trigger
    }
    enableTrigger = (index) => {
        debugger
        let copyOfState= this.state.triggers
        copyOfState[index] = !copyOfState[index]
        this.setState(copyOfState)
    }
    render(){
        const {
            styleForExportButton, 
            styleForTrigger, 
            triggers
        } = this.state
        return (
        <React.Fragment>
            <ExportMidi style={styleForExportButton} onclickHandler={this.exportMidiFile}/>
            {triggers.map((d, i, a) => {
                return <MidiTrigger 
                    key={i}
                    index={i}
                    style={styleForTrigger} 
                    stateOfTrigger={triggers[i]} 
                    enableTrigger={this.enableTrigger} />
            })}
        </React.Fragment>
        )
    }
}

export default MidiInterface