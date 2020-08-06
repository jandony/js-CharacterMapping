import React, { Component } from "react";

class Character extends Component {
  render() {
    const AboveOneHundred = () => {
      if (this.props.CharacterHP > 100) {
        return true;
      }
    };

    return (
      <div className="card flex-column">
        <h1>{this.props.CharacterName}</h1>
        <div className="card-body">
          <p>
            <b>HP:</b> {this.props.CharacterHP}
            <div className="progressBar">
              <div className={`stat ${AboveOneHundred}`}></div>
            </div>
          </p>
          <p>
            <b>Attack:</b> {this.props.CharacterAttack}
            <div className="progressBar">
              <div className="stat"></div>
            </div>
          </p>
          <p>
            <b>Defense:</b> {this.props.CharacterDefense}
            <div className="progressBar">
              <div className="stat"></div>
            </div>
          </p>
          <p>
            <b>Speed:</b> {this.props.CharacterSpeed}
            <div className="progressBar">
              <div className="stat"></div>
            </div>
          </p>
        </div>
      </div>
    );
  }
}

export default Character;
