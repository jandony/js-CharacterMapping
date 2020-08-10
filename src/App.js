import React, { Component } from "react";
import Character from "./Components/Character/Character";
import Data from "./Components/Data/Data";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfCharacters: [
        {
          name: "Character 1",
          hp: 20,
          attack: 100,
          defense: 25,
          speed: 500,
        },
        {
          name: "Character 2",
          hp: 10,
          attack: 50,
          defense: 50,
          speed: 250,
        },
        {
          name: "Character 3",
          hp: 20,
          attack: 100,
          defense: 25,
          speed: 500,
        },
        {
          name: "Character 4",
          hp: 10,
          attack: 50,
          defense: 50,
          speed: 250,
        },
        {
          name: "Character 5",
          hp: 20,
          attack: 100,
          defense: 25,
          speed: 500,
        },
        {
          name: "Character 6",
          hp: 10,
          attack: 50,
          defense: 50,
          speed: 250,
        },
        {
          name: "Character 7",
          hp: 20,
          attack: 100,
          defense: 25,
          speed: 500,
        },
        {
          name: "Character 8",
          hp: 10,
          attack: 50,
          defense: 50,
          speed: 250,
        },
        {
          name: "Character 9",
          hp: 20,
          attack: 100,
          defense: 25,
          speed: 500,
        },
        {
          name: "Character 10",
          hp: 10,
          attack: 50,
          defense: 50,
          speed: 250,
        },
        {
          name: "Character 11",
          hp: 20,
          attack: 100,
          defense: 25,
          speed: 500,
        },
        {
          name: "Character 12",
          hp: 10,
          attack: 50,
          defense: 50,
          speed: 250,
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <div className="flex-container">
          <div className="flex-row">
            {this.state.listOfCharacters.map((character) => (
              <Character
                CharacterName={character.name}
                CharacterHP={character.hp}
                CharacterAttack={character.attack}
                CharacterDefense={character.defense}
                CharacterSpeed={character.speed}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
