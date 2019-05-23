import React from 'react'
import MidiTrigger from './MidiInterfaceParts/MidiTrigger'
import ExportMidi from './MidiInterfaceParts/ExportMidi'
const scribble = require('scribbletune');

const globalStyles = {
    cursor: 'pointer'
}

class MidiInterface extends React.Component{
    constructor(){
        super()
        const sizeOfTrigger = 50
        const numberOfMidiPad = 5
        this.state = {
            triggers : new Array(numberOfMidiPad).fill(false),
            currentActiveTrigger: null,
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
            },
            midiString: ""
        }
    }
    
    exportMidiFile = () => {
        // debugger
        // let midiString = this.generateMidistringFromTriggers()

        // // Create a clip that contains a musical idea
        // let clip = scribble.clip({
        //     notes: 'F#m C#m DM Bm EM AM DM C#m AM',
        //     pattern: midiString
        // });

        // scribble.midi(clip, 'chords.mid');
        this.setState({
            midiString: this.generateMidistringFromTriggers()
        })

    }
    generateMidistringFromTriggers = () => {
        return this.state.triggers.map(item =>{
            return item ? "x" : "-"
        }).join('')

    }
    enableTrigger = (index) => {
        let copyOfState= this.state.triggers
        copyOfState[index] = !copyOfState[index]
        this.setState(copyOfState)
    }
    render(){
        const {
            styleForExportButton, 
            styleForTrigger, 
            triggers,
            midiString
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
            <h1>{midiString}</h1>
        </React.Fragment>
        )
    }
}

export default MidiInterface