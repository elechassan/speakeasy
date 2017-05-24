import React, { Component } from 'react';
import responsiveVoice from '../responsiveVoice.js';


class Translation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.speak = this.speak.bind(this);
    this.translation = this.translation.bind(this);
  }

translation(e) {
  e.preventDefault();
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

  handleInput(e){
    this.setState({text: e.target.value});
  }

  speak(data) {
    console.log(data)
    responsiveVoice.speak(data.translation, 'Spanish Female', {rate: 1.0});
  }

  render() {
    return (
      <div id='translation-container'>
        <div id='translation-div'>
          <div id='input-div'>
            <form onSubmit={this.translation}>
              <textarea name='text' rows='4' onChange={this.handleInput}/>
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
