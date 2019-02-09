import React, { Component } from 'react';
import logo from 'images/logo.svg';
import './styles.css';

class App extends Component {
  state = {
    // with the babel plugin you can define this way the state
  };

  handleSomenthing = () => {
    // this way binds background the event, you can dispose the state here
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit
            <code>src/App.js</code>
            and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
