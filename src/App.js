import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>This is h1</h1>
          <h2>This is h2</h2>
          <h3>This is h3 </h3>
          <p>This is simple paragraph. </p>
          <ul>
              <span className="nav-item">/</span><li className="nav-item"> First Item </li>
          </ul>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
