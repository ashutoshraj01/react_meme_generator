import React, { Component } from 'react';
import Header from './component/header'
import MemeGenerator from './component/memeGenerator'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <MemeGenerator />
      </div>
    );
  }
}

export default App;
