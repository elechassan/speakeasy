import React, { Component } from 'react';
import responsiveVoice from '../responsiveVoice.js';


class Translation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      langFrom: '',
      langTo: '',
      result: '',
      speakLang: '',
      audioClip: null,
    }
    this.handleInput = this.handleInput.bind(this);
    this.speak = this.speak.bind(this);
    this.translation = this.translation.bind(this);
    this.recognizeAudio = this.recognizeAudio.bind(this);
  }

componentDidMount() {
  this.setState({audioClip: this.props.audioClip});
  console.log(this.props.audioClip);
}

recognizeAudio() {
  console.log(this.props.audioClip);
  fetch('http://localhost:3001/translation/recognize', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({status: 'go'})
  })
  .then((res) => {
    return res.json()
  })
  .then((json) => {
    let jsonObj = JSON.parse(json);
    this.setState({text: jsonObj._text})
    console.log(this.state.text);
  })
}

stopRec() {
  fetch('http://localhost:3001/translation/recognize', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({status: 'stop'})
  })
}

translation(e) {
  e.preventDefault();
  fetch('http://localhost:3001/translation/translate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: this.state.text,
      langFrom: e.target.langFrom.value,
      langTo: e.target.langTo.value,
    })
  })
  .then((res) => {
    return res.json()
  })
  .then((json) => {
    console.log(json);
    this.setState({result: json.data.translation});
    let speakLang;
    switch (json.data.target) {
      case 'es': 
        speakLang = 'Spanish Latin American Female';
        break;
      case 'fr': 
        speakLang = 'French Female';
        break;
      case 'pt': 
        speakLang = 'Brazilian Portuguese Female';
        break;
      case 'ru': 
        speakLang = 'Russian Female';
        break;
      case 'hi': 
        speakLang = 'Hindi Female';
        break;
      case 'it': 
        speakLang = 'Italian Female';
        break;
      case 'ar': 
        speakLang = 'Arabic Male';
        break;
      case 'zh-CN': 
        speakLang = 'Chinese Female';
        break;
      case 'ja': 
        speakLang = 'Japanese Female';
        break;
      case 'de': 
        speakLang = 'Deutsch Female';
        break;
      case 'sw': 
        speakLang = 'Swahili Male';
        break;
      case 'en': 
        speakLang = 'US English Female';
        break;
      this.setState({speakLang: speakLang})
    }
    this.speak(json.data.translation, speakLang);
  })
}

  handleInput(e) {
    this.setState({text: e.target.value});
  }

  speak(result, lang) {
    console.log(`in speech ${result, lang}`)
    responsiveVoice.speak(result, lang);
  }

  render() {
    return (
      <div id='translation-container'>
        <div id='translation-div'>
          <div id='input-div'>
            <form onSubmit={(e) => this.translation(e)}>
              <textarea name='text' rows='4' value={this.state.text} onChange={(e) => this.handleInput(e)}/><br/>
                <div>Translate from:</div>
                <select name='langFrom'> 
                  <option value='en'>English</option>
                  <option value='es'>Spanish</option>
                  <option value='fr'>French</option>
                  <option value='pt'>Portuguese</option>
                  <option value='it'>Italian</option>
                  <option value='ru'>Russian</option>
                  <option value='ar'>Arabic</option>
                  <option value='zh-CN'>Chinese</option>
                  <option value='ja'>Japanese</option>
                  <option value='de'>German</option>
                  <option value='sw'>Swahili</option>
                </select><br/>
                <div>Translate to:</div>
                <select name='langTo'> 
                  <option value='en'>English</option>
                  <option value='es'>Spanish</option>
                  <option value='fr'>French</option>
                  <option value='pt'>Portuguese</option>
                  <option value='it'>Italian</option>
                  <option value='ru'>Russian</option>
                  <option value='ar'>Arabic</option>
                  <option value='zh-CN'>Chinese</option>
                  <option value='ja'>Japanese</option>
                  <option value='de'>German</option>
                  <option value='sw'>Swahili</option>
                </select><br/>
              <input type='submit'/><br/>
              <div id='result-box'>{this.state.result}</div>
            </form>
          </div>
        </div>
        <div id='record-button-container'>
          <button id='start-recog' onClick={this.recognizeAudio}>Recognize</button>
          {/*<button id='stop-recog' onClick={this.stopRec}>Stop Recognition</button>*/}
        </div>
      </div>
    );
  }
}

export default Translation;
