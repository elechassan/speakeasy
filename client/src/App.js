import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import AddPhraseForm from './components/AddPhraseForm';
import PhraseList from './components/PhraseList';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Translation from './components/Translation';
import Recorder from './components/Recorder';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      audioClip: null,
    }
    this.recordState = this.recordState.bind(this);
  }

  recordState(clip) {
    this.setState({audioClip: clip});
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/phrases') 
    .then((response) => {
      return response.json()
    })
    .then ((responseJson) => {
      console.log(responseJson)
    });
  }

  render() {
    return (
      <div className="App">
        <Recorder recordState={this.recordState}/>
        <Translation audioClip={this.state.audioClip}/>
        {/*<Nav />
        <Welcome />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
