import React, { Component } from 'react';
import Phrase from './Phrase.js';


class PhraseList extends Component {
      render() {
            return (
                  <ul className="phrase-list">
                        {/* */}
                        {this.props.phrase.map((phrases) => {
                              return (
                                    <Phrase 
                                    key={phrase.id}
                                    phrase={phrase}
                                    handleDeletePhrase={this.props.handleDeletePhrase}
                                    handleEditPhrase={this.props.handleEditPhrase}
                                    handleSavePhrase={this.props.handleSavePhrase} />
                              )

                        })}
                  </ul>
            );
      }
}


export default PhraseList;