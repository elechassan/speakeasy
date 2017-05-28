import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import AddPhraseForm from './components/AddPhraseForm';
import PhraseList from './components/PhraseList';
import Nav from './components/Nav';
import Signup from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer';
import Translation from './components/Translation';
import Recorder from './components/Recorder';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      audioClip: null,
      username: null,
      isLogged: false,
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
      <Router>
      <div className="App">
          <main> 
            <Route exact path='/' component={Translation} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
          </main>
          {/*<Recorder recordState={this.recordState}/>
          <Nav />
          <Footer />
          <Translation audioClip={this.state.audioClip}/>*/}
        </div>
      </Router>
    );
  }
}

export default App;
