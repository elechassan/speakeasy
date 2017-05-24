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
        <Translation />
       {/*} <Nav />
        <Welcome />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
