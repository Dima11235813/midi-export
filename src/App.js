import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import numberOfMidiTrigger from './data/midiTemp.js'
import MidiInterface from './components/MidiInterface'
import WaveImageWrapper from './components/WaveImageWrapper'

class App extends Component {
  render() {
    return (
      <div className="midi-export-app-container">
        <header className="header">
          <ul>
            <li className="menu-item">Home</li>
            <li className="menu-item">Midi Export</li>
            <li className="menu-item">Audo Waves</li>
          </ul>
        </header>
          <MidiInterface />
          <WaveImageWrapper />
      </div>
    );
  }
}

export default App;
