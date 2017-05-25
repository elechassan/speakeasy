import React, { Component } from 'react';

navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaWorks: false,
    }
  }



  componentDidMount() {
    const record = document.querySelector('#record');
    const stop = document.querySelector('#stop');
    const soundClips = document.querySelector('#sound-clips');
    if (navigator.getUserMedia) {
      console.log('getUserMedia supported.');
      navigator.getUserMedia (
      {audio: true},
      function start(stream) {        // Success callback
        const mediaRecorder = new MediaRecorder(stream);
        record.onclick = function() {
        mediaRecorder.start();
        console.log(mediaRecorder.state);
        console.log("recorder started");
        record.style.background = "red";
        record.style.color = "black";
      }

        
      },
      function(err) {           // Error callback
         console.log('The following gUM error occured: ' + err);
      }
   );
} else {
   console.log('getUserMedia not supported on your browser!');
}
  }




  render() {
    return (
      <div id="recorder-div">
        <button id='record'>Record</button>
        <button id='stop'>Stop</button>
        <button id='playback'>Play</button>
      </div>

    );
  }
}

export default Nav;
