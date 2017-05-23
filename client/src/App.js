import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Nav from './components/Nav';
import Footer from './components/Footer';

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
        <Nav />
        <Welcome />
        <Footer />
      </div>
    );
  }
}

export default App;
