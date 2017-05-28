import React, { Component } from 'react';


class AddPhraseForm extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  inputContentValue: '',
                  inputLanguageValue: ''
            }
            this.handleInputContentChange = this.handleInputContentChange.bind(this);
            this.handleInputLanguageChange = this.handleInputLanguageChange.bind(this);
            this.handlePhraseSubmit = this.handlePhraseSubmit.bind(this);
      }

      handleInputContentChange(e) {
            this.setState({inputContentValue: e.target.value});
      }

      handleInputLanguageChange(e) {
            this.setState({inputLanguageValue: e.target.value});
      }

      handlePhraseSubmit(e) {
            e.preventDefault();
            fetch('http://localhost:3001/api/phrases', {
                  method: 'POST',
                  headers: {'Content-Type': 'application/json'},
                  credentials: "same-origin",
                  body: JSON.stringify({
                        phrase: e.target.phrase.value,
                        language: e.target.language.value,
                  }),
            })
            .then((res) => {
                  return res.json()
            })
            .then((json) => {
                  console.log(json);
            })
      }

      render() {
            return (
                  <form 
                  className="add-phrase-form" 
                  onSubmit={this.handlePhraseSubmit}>
                        
                        <input type="text" 
                        value={this.state.inputContentValue} 
                        name='phrase' 
                        placeholder='Add Phrase Here' 
                        onChange={this.handleInputContentChange} 
                        /> <br/>

                        <input type="text" 
                        value={this.state.handleInputLanguageChange} 
                        name='language' 
                        placeholder='Add Language Here' 
                        onChange={this.handleInputLanguageChange} 
                        /> <br/>

                        {/*In case we need to add a section where you can specify what country the language is from. Post MVP moves*/}
                        
                        {/*<input type="text"
                        value={this.props.handleInputCountryChange}
                        name='country'
                        placeholder='Add Country here'
                        onChange={this.propshandleInputCountryChange}
                        /> <br/>*/}


                        {/*Might want to add another input box or cange the input box names after looking into David's file*/}

                        <input type="submit" value="Add Phrase!" />
                  </form>
            );
      }
}


export default AddPhraseForm;