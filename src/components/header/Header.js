import React from "react";
import "./Header.scss";

function Header({ gameState, countdown }) {
  return (
    <>
      <h1 className="title">Memory Marvel</h1>
      <div className="header">
        <div className="header-card">
          <div className="header-card-icon">
            <img
              alt="medal-icon"
              src="https://memory-marvel.vercel.app/assets/medal-351c41a3.svg"
            />
          </div>
          <div className="header-card-text">Score : {gameState.score}</div>
        </div>
        <div className="header-card">
          <div className="header-card-icon">
            <img
              alt="flip-icon"
              src="https://memory-marvel.vercel.app/assets/flip-ba9e3ad1.svg"
            />
          </div>
          <div className="header-card-text">Flips : {gameState.flips}</div>
        </div>
        <div className="header-card">
          <div className="header-card-icon">
            <img
              alt="time-icon"
              src="https://memory-marvel.vercel.app/assets/stopwatch-855d52bf.svg"
            />
          </div>
          <div className="header-card-text">Timer : {countdown}</div>
        </div>
      </div>
    </>
  );
}

export default Header;
