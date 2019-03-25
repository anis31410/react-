import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Vacaciones</h1>
        </header>
        <Travel
          country="Coin perdu"
          destination ="Nul part"
          photo ="https://cdn.pixabay.com/photo/2017/10/06/13/58/old-village-2823175_960_720.jpg"
	  distance = "1000 km"
        />
        <Travel
          country="bahamas"
          destination="Karaibes"
          photo="https://cdn.pixabay.com/photo/2017/10/06/13/58/old-village-2823175_960_720.jpg"
	  distance="14000 km"
        />
      </div>
    );
  }
}

export default App;
