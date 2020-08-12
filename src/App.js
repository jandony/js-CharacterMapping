import React, { Component } from "react";
import Character from "./Components/Character/Character";
import { characterArray } from "./Data";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfCharacters: characterArray,
    };
  }
  render() {
    return (
      <div className="App">
        <div className="flex-container">
          <div className="flex-row">
            {this.state.listOfCharacters.map((character) => (
              <Character character={character} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
