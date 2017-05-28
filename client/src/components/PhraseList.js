import React, { Component } from 'react';
import Phrase from './Phrase.js';
import AddPhraseForm from './AddPhraseForm';


class PhraseList extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  phrases: [],
            }
      }

      componentDidMount() {
            fetch('http://localhost:3001/api/phrases')
            .then((res) => {
                  return res.json() 
            })
            .then((json) => {
                  console.log(json);
                  this.setState({phrases: json.data});
            })
      }

      render() {
            return (
                  <div>
                        <AddPhraseForm />
                        <table className="phrase-list">
                              <tr>
                                    <th>ID</th>
                                    <th>Phrase</th>
                                    <th>Language</th>
                              </tr>
                              {/* Make sure it is correct and that it works before officially starting on CSS*/}
                              {this.state.phrases.map((phrase) => {
                                    return (
                                          <Phrase 
                                                key={phrase.id}
                                                phrase={phrase}
                                                id={phrase.id}

                                          />
                                    )

                              })}
                        </table>
                  </div>
            );
      }
}


export default PhraseList;
                                    // handleDeletePhrase={this.props.handleDeletePhrase}
                                    // handleEditPhrase={this.props.handleEditPhrase}
                                    // handleSavePhrase={this.props.handleSavePhrase} 