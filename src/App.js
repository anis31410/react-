import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Lamp from "./Lamp";


import Travels from "./Travels";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: true
    };
  }
  handleClick = () => {
    this.setState({ on: !this.state.on });
  };
  render() {
    const logoWork = this.state.on ? 'working' : 'nowork';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={logoWork} alt="logo" />
 
          
    
      <div className="Lamp">
        <button onClick={this.handleClick}>{logoWork.toUpperCase()}</button>
        
      </div>
          <h1 className="App-title">Vacaciones</h1>
        </header>
       
        
      </div>
    );
  }
}

export default App;
