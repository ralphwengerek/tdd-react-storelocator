import React, { Component } from "react";
import "./App.scss";
import { StoreLocator } from "../../containers";

class App extends Component {
  render() {
    return (
      <div className="App">
        <StoreLocator />
      </div>
    );
  }
}

export default App;
