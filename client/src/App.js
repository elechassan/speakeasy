import React, { Component } from 'react';
import './App.css';
import responsiveVoice from './responsiveVoice.js';

class App extends Component {
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
    responsiveVoice.speak(this.state.text, 'Russian Female', {rate: 1.0});
    // responsiveVoice.speak(this.state.text, 'Russian Female');
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.speak}>
          <input type='text' name='text' onChange={this.handleInput}/>
          <button onClick={this.speak}>submit</button>
        </form>
      </div>
    );
  }
}

export default App;
