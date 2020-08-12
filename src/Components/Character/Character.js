import React from "react";

function Character({ character }) {
  const { name, hp, attack, defense, speed } = character;

  return (
    <div className="card flex-column">
      <h1>{name}</h1>
      <div className="card-body">
        <p>
          <b>HP:</b> {hp}
          <div className="progressBar">
            <div
              className="stat"
              style={{
                width: hp < 100 ? `${hp}%` : "100%",
              }}
            ></div>
          </div>
        </p>
        <p>
          <b>Attack:</b> {attack}
          <div className="progressBar">
            <div
              className="stat"
              style={{
                width: attack < 100 ? `${attack}%` : "100%",
              }}
            ></div>
          </div>
        </p>
        <p>
          <b>Defense:</b> {defense}
          <div className="progressBar">
            <div
              className="stat"
              style={{
                width: defense < 100 ? `${defense}%` : "100%",
              }}
            ></div>
          </div>
        </p>
        <p>
          <b>Speed:</b> {speed}
          <div className="progressBar">
            <div
              className="stat"
              style={{
                width: speed < 100 ? `${speed}%` : "100%",
              }}
            ></div>
          </div>
        </p>
      </div>
    </div>
  );
}

export default Character;
