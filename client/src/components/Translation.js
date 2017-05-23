import React, { Component } from 'react';
import responsiveVoice from '../responsiveVoice.js';

class Translation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.speak = this.speak.bind(this);
  }

  handleInput(e){
    this.setState({text: e.target.value});
  }

  speak(e) {
    e.preventDefault();
    let text = this.state.text;
    responsiveVoice.speak(this.state.text, 'US English Female', {rate: 1.0});
  }

  render() {
    return (
      <div className="translation">
        <form onSubmit={this.speak}>
          <input type='text' name='text' onChange={this.handleInput}/>
          <button onClick={this.speak}>submit</button>
        </form>
      </div>
    );
  }
}

export default Translation;
