import React, { Component } from "react";

class Character extends Component {
  render() {
    return (
      <div className="card flex-column">
        <h1>{this.props.CharacterName}</h1>
        <div className="card-body">
          <p>
            <b>HP:</b> {this.props.CharacterHP}
            <div className="progressBar">
              <div
                className="stat"
                style={{
                  width:
                    this.props.CharacterHP < 100
                      ? `${this.props.CharacterHP}%`
                      : "100%",
                }}
              ></div>
            </div>
          </p>
          <p>
            <b>Attack:</b> {this.props.CharacterAttack}
            <div className="progressBar">
              <div
                className="stat"
                style={{
                  width:
                    this.props.CharacterAttack < 100
                      ? `${this.props.CharacterAttack}%`
                      : "100%",
                }}
              ></div>
            </div>
          </p>
          <p>
            <b>Defense:</b> {this.props.CharacterDefense}
            <div className="progressBar">
              <div
                className="stat"
                style={{
                  width:
                    this.props.CharacterDefense < 100
                      ? `${this.props.CharacterDefense}%`
                      : "100%",
                }}
              ></div>
            </div>
          </p>
          <p>
            <b>Speed:</b> {this.props.CharacterSpeed}
            <div className="progressBar">
              <div
                className="stat"
                style={{
                  width:
                    this.props.CharacterSpeed < 100
                      ? `${this.props.CharacterSpeed}%`
                      : "100%",
                }}
              ></div>
            </div>
          </p>
        </div>
      </div>
    );
  }
}

export default Character;
