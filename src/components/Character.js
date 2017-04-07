import React, { Component } from 'react';
import * as CONSTANTS from '../data/constants';

class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storedChar: this.props.characterString,
      randomChar: this.props.characterString
    };
  }

  componentWillMount() {
    this.charsArray = CONSTANTS.charactersArray(this.props.lang);
    const randomChar = this._randomChar(this.charsArray);
    this.setState({randomChar: randomChar});
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this._findCorrectChar(),
      CONSTANTS.UPDATE_SPEED
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  _randomChar(array) {
    return array[Math.floor(Math.random()*array.length)];
  }

  _findCorrectChar() {
    const randomChar = this._randomChar(this.charsArray);
    this.setState({randomChar: randomChar});
    if(randomChar === this.state.storedChar) {
      clearInterval(this.timerID);
    }
  }

  render() {
    return (
      <span className="character">{this.state.randomChar}</span>
    );
  }
}

export default Character;

Character.propTypes = {
   characterString: React.PropTypes.string.isRequired,
};
