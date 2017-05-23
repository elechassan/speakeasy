import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Translation from './components/Translation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }

  render() {
    return (
      <div className="App">
        <Translation />
      </div>
    );
  }
}

export default App;
