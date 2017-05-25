import React, { Component } from 'react';

navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaWorks: false,
      audioClip: null,
    }
    this.audioProcess = this.audioProcess.bind(this);
  }



  componentDidMount() {
    this.audioProcess();
  }

  audioProcess() {
    const record = document.querySelector('#record');
    const stop = document.querySelector('#stop');
    const soundClips = document.querySelector('#sound-clips');
    let audioClip = null;
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
      let chunks = [];
      mediaRecorder.ondataavailable = function(e) {
      chunks.push(e.data)};
      stop.onclick = function() {
        if(mediaRecorder.state === 'recording') {
        mediaRecorder.stop();
        console.log(mediaRecorder.state);
        console.log("recorder stopped");
        record.style.background = "";
        record.style.color = "";
        } else {
          console.log('not recording!');
        }
      }
      mediaRecorder.onstop = function(e) {
        console.log("recorder stopped");

        let clipName = prompt('Enter a name for your sound clip');

        let clipContainer = document.createElement('article');
        let clipLabel = document.createElement('p');
        let audio = document.createElement('audio');
        let deleteButton = document.createElement('button');
                
        clipContainer.classList.add('clip');
        audio.setAttribute('controls', '');
        deleteButton.innerHTML = "Delete";
        clipLabel.innerHTML = clipName;

        clipContainer.appendChild(audio);
        clipContainer.appendChild(clipLabel);
        clipContainer.appendChild(deleteButton);
        soundClips.appendChild(clipContainer);

        let blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
        audioClip = blob;
        chunks = [];
        console.log(blob);
        let audioURL = window.URL.createObjectURL(blob);
        audio.src = audioURL;
        console.log(audioURL);
        deleteButton.onclick = function(e) {
          let evtTgt = e.target;
          evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
        }
      }},
      function(err) {           // Error callback
         console.log('The following gUM error occured: ' + err);
      });
    } else {
      console.log('getUserMedia not supported on your browser!');
    }

  }


      audioTest(msg) {
        console.log('in audio test');
      }


  render() {
    return (
      <div id="recorder-div">
        <button id='record'>Record</button>
        <button id='stop'>Stop</button>
        <button id='playback'>Play</button>
        <div id='sound-clips'></div>
      </div>

    );
  }
}

export default Nav;
