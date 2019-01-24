import React from "react";

const MidiTrigger = ({style, enableTrigger, stateOfTrigger, index}) => {
  let copyOfStyle = Object.assign({}, style) 
  copyOfStyle.backgroundColor = stateOfTrigger ? 'red' : 'grey'
  return (
     <div 
      style={copyOfStyle} 
      onClick={() => {
        enableTrigger(index)
     }} />
   )
}

export default MidiTrigger;
