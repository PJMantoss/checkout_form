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

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      mounted: false,
      people: 1,
      price: 320.00,
      tax: 20,
      duration: 5,
      discount: 5
    }
  }
  return (
    <div className="App">
    </div>
  );
}

export default App;
