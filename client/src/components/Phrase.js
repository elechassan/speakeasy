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

                              {/*<input 
                              type="text"
                              value={this.state.inputCountryChange}
                              name='country_type'
                              placeholder='Enter country ID here'
                              onChange={this.handleInputCountryChange}
                              /> <br/>*/}

                              {/*have to continue to work on a few things*/}

                              <input 
                              style={{visibility: 'hidden'}}
                              readOnly
                              name="id"
                              value={this.props.phrase.id}
                              />
                              <input type="submit" value="Submit Phrase Edit!"/>
                        </form>
                  </li>
            );
      }


      /**
       * This will be called only when the render method for isBeingEdited is set to false.
       */ 
      renderPhrase() {
            return (
                  <li className="phrase">
                        <h2>{this.props.phrase.language}</h2>
                        <p>Content: {this.props.phrase.content}</p>
                        {/*<p>Country: {this.props.phrase.country_type}</p>*/}
                        {/*I don't know if the country option will be available but I'm keeping it in case that's something we want to add post MVP as an option for the user*/}
                        

                        {/*edit and delete event handlers need to have arrow functions so the arguments aren't called right away*/}
                        <button onClick={() => { this.props.handleDeletePhrase(this.props.phrase.id) }}>
                              Delete Phrase
                        </button>

                        <button onClick={() => {
                              this.setState({isBeingEdited: true})
                              }}>
                              Edit Phrase
                        </button>
                  </li>
            );
      }

      /**
       * the render method that will render the form of the phrase depending on the value of 'isBeingEdited'
       * Also realized that maybe I might have to start styling before anything so I can see the buttons and how they interact with the page. 
       */ 
       render() {
             if (this.state.isBeingEdited === false) {
                   return this.renderPhrase();
             } else {
                   return this.renderEditForm();
             }
       }

}



export default Phrase;