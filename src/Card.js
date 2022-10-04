import React from "react";
import "./Card.css";

function Card({ card }) {
  return (
    <div
      className="card"
      style={{ backgroundImage: "url(" + card + ")" }}
    ></div>
  );
}

export default Card;
