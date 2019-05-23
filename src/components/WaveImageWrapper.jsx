import React from "react";

import "video.js/dist/video-js.css";
import videojs from "video.js";

import WaveSurfer from "wavesurfer.js";

/*
// the following imports are only needed when you're using 
// the microphone plugin
import 'webrtc-adapter';

import MicrophonePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.microphone.js';
WaveSurfer.microphone = MicrophonePlugin;
*/

// register videojs-wavesurfer plugin with this import
import "videojs-wavesurfer/dist/css/videojs.wavesurfer.css";
import Wavesurfer from 'videojs-wavesurfer/dist/videojs.wavesurfer.js';

const videoJsOptions = {
  controls: true,
  width: 600,
  height: 300,
  fluid: false,
  plugins: {
    wavesurfer: {
      src: "hal.wav",
      msDisplayMax: 10,
      debug: true,
      waveColor: "#163b5b",
      progressColor: "black",
      cursorColor: "black",
      hideScrollbar: true
    }
  }
};
const waveImageWrapperStyles = {
  backgrounColor: "#ACB2F2"
};

class WaveImageWrapper extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    // instantiate Video.js
    debugger;
    this.player = videojs(this.audioNode, videoJsOptions, () => {
      // print version information at startup
      var version_info =
        "Using video.js " +
        videojs.VERSION +
        " with videojs-wavesurfer " +
        videojs.getPluginVersion("wavesurfer") +
        " and wavesurfer.js " +
        WaveSurfer.VERSION;
      videojs.log(version_info);
    });

    this.player.on("waveReady", event => {
      console.log("waveform: ready!");
    });

    this.player.on("playbackFinish", event => {
      console.log("playback finished.");
    });

    // error handling
    this.player.on("error", (element, error) => {
      console.error(error);
    });
  }
  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    return (
      <div style={waveImageWrapperStyles} ref="" className="waveImageWrapper">
        <div data-vjs-player>
          <audio
            id="myAudio"
            ref={node => (this.audioNode = node)}
            className="video-js vjs-default-skin"
          />
        </div>
      </div>
    );
  }
}

export default WaveImageWrapper;
