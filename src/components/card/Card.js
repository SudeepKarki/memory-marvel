import React from "react";
import "./Card.scss";

function Card({ handleFlip, card }) {
  return (
    <div className="card">
      <div
        className={`card-flip ${card.flipped || card.matched ? "flipped" : ""}`}
      >
        <div className="card-flip-inner">
          <div className="card-flip-front" onClick={handleFlip}>
            <img
              alt="card front"
              src="https://memory-marvel.vercel.app/assets/card-front-711d1864.svg"
            />
          </div>
          <div className="card-flip-back" onClick={handleFlip}>
            <img alt={card.name} src={card.image} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
