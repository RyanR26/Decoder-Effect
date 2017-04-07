import React, { Component } from 'react';
import ContentDecode from './components/ContentDecode';
import './App.css';
import * as text from './data/testData'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContentDecode text={text.text1} />
        <ContentDecode text={text.text2} />
      </div>
    );
  }
}

export default App;
