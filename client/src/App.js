import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome';
// import AddPhraseForm from './components/AddPhraseForm';
// import PhraseList from './components/PhraseList';
// Don't know if the AddPhraseForm is supposed to be added on here but I am keeping it if it is. Might also add PhraseList so we can see it. Will talk with the group.
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
