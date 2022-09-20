import React, { useState, useEffect } from "react";
import axios from "axios";
import PullCards from "./PullCards";
import Card from "./Card";

const DrawCards = () => {
  const [cardDeck, setCardDeck] = useState([]);
  // New deck of cards pulled from API and formatted for use through the application

  //   const [ready, setReady] = useState(false);

  const [drawnCards, setDrawnCards] = useState([]);
  const [fullDeck, setFullDeck] = useState(false);

  async function drawDeck() {
    const res = await axios.get(
      "http://deckofcardsapi.com/api/deck/new/draw/?count=52"
    );
    // const deck = card.map(({value, suit}) => ({[value]: suit}))
    const newDeck = res.data.cards.map(({ value, suit }) => [
      `${value} of ${suit}`,
    ]);
    setCardDeck(newDeck);
    // setReady(true);
  }

  function DrawCard() {
    if (drawnCards.length < 52) {
      const cardData = cardDeck[drawnCards.length];
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
      <button onClick={drawDeck}>Draw a new deck</button>

      <button onClick={DrawCard}>Draw Card</button>

      <div>
        {drawnCards.map((c) => (
          <Card card={c} />
        ))}
      </div>
    </div>
  );
};

export default DrawCards;
