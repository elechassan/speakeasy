import React, { Component } from 'react';


class AddPhraseForm extends Component {
      render() {
            return (
                  <form 
                  className="add-phrase-form" 
                  onSubmit={this.props.handlePhraseSubmit}>
                        
                        <input type="text" 
                        value={this.props.inputContentValue} 
                        name='content' 
                        placeholder='Add Phrase Here' 
                        onChange={this.props.handleInputContentChange} 
                        /> <br/>

                        <input type="text" 
                        value={this.props.handleInputLanguageChange} 
                        name='language' 
                        placeholder='Add Language Here' 
                        onChange={this.props.handleInputLanguageChange} 
                        /> <br/>

                        {/*Might want to add another input box or cange the input box names after looking into David's file*/}

                        <input type="submit" value="Add Phrase!" />
                  </form>
            );
      }
}


export default AddPhraseForm;