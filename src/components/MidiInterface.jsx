import React from 'react'
import MidiTrigger from './MidiInterfaceParts/MidiTrigger'
import ExportMidi from './MidiInterfaceParts/ExportMidi'


class MidiInterface extends React.Component{
    constructor(){
        super()
        const sizeOfTrigger = 50
        this.state = {
            numberOfTriggers : new Array(8),
            styleForTrigger: {
                height: `${sizeOfTrigger}px`,
                weight: `${sizeOfTrigger}px`,
                margin: "10px 10px"
            },
            styleForExportButton: {
                height: `${sizeOfTrigger}px`
            }
        }
    }
    exportMidi = () => {

    }
    render(){
        const {styleForExportButton, styleForTrigger} = this.state
        return (
        <React.Fragment>
            <ExportMidi style={styleForExportButton}/>
            {this.state.numberOfTriggers.map((d, i, a) => {
                return <MidiTrigger style={styleForTrigger} />
            })}
        </React.Fragment>
        )
    }
}

export default MidiInterface