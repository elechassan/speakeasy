import React, { Component } from 'react';

class Phrase extends Component {
      constructor(props) {
            super(props);


            this.state = {
                  isBeingEdited: false,
                  phrase: '',
                  language: '',
                  inputContentValue: '',
                  inputLanguageValue: '',
                  // inputCountryValue: '',
            }

            this.handleInputContentChange = this.handleInputContentChange.bind(this);
            this.handleInputLanguageChange = this.handleInputLanguageChange.bind(this);
            // this.handleInputCountryChange = this.handleInputCountryChange.bind(this);
      }

      componentDidMount() {
            this.setState({
                  phrase: this.props.phrase.phrase,
                  language: this.props.phrase.language,
                  inputContentValue: this.props.phrase.phrase,
                  inputLanguageValue: this.props.phrase.language
            });
      }

      handleInputContentChange(event) {
            this.setState({inputContentValue: event.target.value});
      }

      handleInputLanguageChange(event) {
            this.setState({inputLanguageValue: event.target.value});
      }

      handlePhraseEdit(e) {
            let id = this.props.id;
            fetch(`http://localhost:3001/api/phrases/${id}`, {
                  method: 'PUT',
                  headers: {'Content-type': 'application/json'},
                  credentials: 'same-origin',
                  body: JSON.stringify({
                        phrase: e.target.phrase.value,
                        language: e.target.language.value
                  })
            })
            .then((res) => {
                  return res.json()
            })
            .then((json) => {
                  console.log(json);
            });
      } 

      handleDeletePhrase(e) {
            let id = this.props.id;
            fetch(`http://localhost:3001/api/phrases/${id}`, {
                  method: 'DELETE',
                  credentials: 'same-origin',
            })
            .then((res) => {
                  return res.json()
            })
            .then((json) => {
                  console.log(json);
            });
      }

      // handleInputCountryChange(event) {
      //       this.setState({inputCounryValue: event.target.value});
      // }

      renderEditForm() {
            return (
                  <tr>
                        <form className="edit-phrase-form" 
                        onSubmit={(event) => {
                              event.preventDefault();
                              this.handlePhraseEdit(event);
                              this.setState({isBeingEdited: false});
                        }}
                        >
                              <table>
                              <tr>
                              <td>     
                              <input
                              type="text"
                              value={this.state.inputContentValue}
                              name='phrase'
                              onChange={this.handleInputContentChange}
                              /> </td>
                              <td>
                              <input 
                              type="text"
                              value={this.state.inputLanguageValue}
                              name='language'
                              onChange={this.handleInputLanguageChange}
                              /> </td>

                              {/*<input 
                              type="text"
                              value={this.state.inputCountryChange}
                              name='country_type'
                              placeholder='Enter country ID here'
                              onChange={this.handleInputCountryChange}
                              /> <br/>*/}

                              {/*have to continue to work on a few things*/}
                              <input 
                              style={{display: 'none'}}
                              readOnly
                              name="id"
                              value={this.props.phrase.id}
                              />
                              <td>
                              <input type="submit" value="Submit Phrase Edit!"/>
                              </td>
                              </tr>
                              </table>
                        </form>
                        </tr>

            );
      }


      /**
       * This will be called only when the render method for isBeingEdited is set to false.
       */ 
      renderPhrase() {
            const xbtn = {'color': 'red'};
            return (
                  <tr className="phrase">
                        <td><button style={this.xbtn} onClick={(e) => this.handleDeletePhrase(e)}>
                             (X)
                        </button></td>
                        <td>{this.props.phrase.phrase}</td>
                        <td>{this.props.phrase.language}</td>
                        {/*<p>Country: {this.props.phrase.country_type}</p>*/}
                        {/*I don't know if the country option will be available but I'm keeping it in case that's something we want to add post MVP as an option for the user*/}
                        

                        {/*edit and delete event handlers need to have arrow functions so the arguments aren't called right away*/}
                        <td><button onClick={() => {
                              this.setState({isBeingEdited: true})
                              }}>
                              Edit Phrase
                        </button></td>
                  </tr>
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