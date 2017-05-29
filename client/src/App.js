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
import TestBackend from './components/TestBackend';
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
          <PhraseList />
          {/*<Recorder recordState={this.recordState}/>
          <Translation/>
          <Route path='/phraselist' component={PhraseList} />
          <Link to="/phraselist">Phrase List</Link>
          <main> 
            <Route path='/login' component={Login} />
            <Route path='/test' component={TestBackend} />
          </main>
          <Nav />
          <Footer />*/}
        </div>
      </Router>
    );
  }
}

export default App;
