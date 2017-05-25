import React, { Component } from 'react';
import responsiveVoice from '../responsiveVoice.js';


class Translation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      langFrom: '',
      langTo: null,
    }
    this.handleInput = this.handleInput.bind(this);
    this.speak = this.speak.bind(this);
    this.translation = this.translation.bind(this);
  }

translation(e) {
  e.preventDefault();
  console.log(e.target.langTo.value);
  console.log('setting state');
  this.setState({langTo: e.target.langTo.value});
  console.log('state set');
  console.log(this.state);
  fetch('http://localhost:3001/translation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: e.target.text.value,
      lang: e.target.lang.value,
    })
  })
  .then((res) => {
    return res.json()
  })
  .then((json) => {
    console.log(json);
    this.speak(json.data);
  })
}

  handleInput(e) {
    this.setState({text: e.target.value});
  }

  speak(data) {
    console.log(data)
    responsiveVoice.speak(data.translation, 'Spanish Male', {rate: 1.0});
  }

  render() {
    console.log('render');
    return (
      <div id='translation-container'>
        <div id='translation-div'>
          <div id='input-div'>
            <form onSubmit={(e) => this.translation(e)}>
              <textarea name='text' rows='4' onChange={this.handleInput}/><br/>
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
                  <option value='iw'>Hebrew</option>
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
                  <option value='iw'>Hebrew</option>
                </select><br/>
              <textarea name='lang' rows='4' id='language-box' />
              <input type='submit'/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Translation;
