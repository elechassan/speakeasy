import React, { Component } from 'react';

class Phrase extends Component {
      constructor(props) {
            super(props);


            this.state = {
                  isBeingEdited: false,
                  inputContentValue: this.props.phrase.content,
                  inputLanguageValue: this.props.phrase.language,
                  // inputCountryValue: '',
            }

            this.handleInputContentChange = this.handleInputContentChange.bind(this);
            this.handleInputLanguageChange = this.handleInputLanguageChange.bind(this);
            // this.handleInputCountryChange = this.handleInputCountryChange.bind(this);
      }

      handleInputContentChange(event) {
            this.setState({inputContentValue: event.target.value});
      }

      handleInputLanguageChange(event) {
            this.setState({inputLanguageValue: event.target.value});
      }

      // handleInputCountryChange(event) {
      //       this.setState({inputCounryValue: event.target.value});
      // }

      renderEditForm() {
            return (
                  <li>
                        <form className="add-phrase-form" 
                        onSubmit={(event) => {
                              this.props.handlePhraseEdit(event);
                              this.setState({isBeingEdited: false});
                        }}
                        >
                              <input
                              type="text"
                              value={this.state.inputContentValue}
                              name='content'
                              onChange={this.handleInputContentChange}
                              /> <br/>

                              <input 
                              type="text"
                              value={this.state.inputLanguageValue}
                              name='content'
                              onChange={this.handleInputLanguageChange}
                              /> <br/>

                              <input 
                              type="text"
                              value={this.state.inputCountryChange}
                              name='country_type'
                              placeholder='Enter country ID here'
                              onChange={this.handleInputCountryChange}
                              /> <br/>
                        </form>
                  </li>
            );
      }



}




export default Phrase;