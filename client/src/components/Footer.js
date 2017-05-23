import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }

  }



  render() {
    return (
      <footer>
        <div id='footer-container'>
          <div id='footer-div'>
            <div id='footer-text-container'>
              <p>SpeakEasy</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
