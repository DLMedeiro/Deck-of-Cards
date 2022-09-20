import React, { useState, useEffect } from "react";
import Card from "./Card";

function PullCards({ deck }) {
  const [drawnCards, setDrawnCards] = useState([]);
  const [fullDeck, setFullDeck] = useState(false);
  const [paused, setPaused] = useState(false);

  function DrawCard() {
    if (drawnCards.length < 52) {
      const cardData = deck[drawnCards.length];
      setDrawnCards((drawnCards) => [...drawnCards, cardData]);
      console.log(drawnCards);
    } else {
      setFullDeck(true);
      setDrawnCards([]);
      setFullDeck(false);
    }
  }

  return (
    <div>
      <button onClick={DrawCard}>Draw Card</button>
      <div>
        {drawnCards.map((c) => (
          <Card card={c} />
        ))}
      </div>
    </div>
  );
}

export default PullCards;
