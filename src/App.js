import React from 'react';
import logo from './logo.svg';
import './App.css';

function Overlay(props){
  return (
    <div className="Overlay" style={{'backgroundImage':'url(' + props.image + ')'}}>
      Something
    </div>
  );
}

function Container(props){
  return (
    <div className="Container">
      {props.children}
    </div>
  )
}

function Header(props){
  return (
    <header>
      <input onChange={this.props.onChange} type="range" max="100" min="1" step="1" />
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

export default App;
