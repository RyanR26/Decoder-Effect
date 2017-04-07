import React, { Component } from 'react';
import Character from "./Character";

class WordBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentWillMount() {
    this.phraseCharacters = this.props.text.split('');
  }

  render() {
    const characters = this.phraseCharacters.map((char) => {
      return <Character characterString={char} lang={this.props.language} />
    })

    return (
      <span>{characters}</span>
    );
  }
}

export default WordBuilder;

WordBuilder.propTypes = {
   text: React.PropTypes.string.isRequired,
};
