import React, { useState, useEffect } from "react";
import axios from "axios";
import PullCards from "./PullCards";

const DrawCards = () => {
  const [cardDeck, setCardDeck] = useState([]);
  // New deck of cards pulled from API and formatted for use through the application

  const [ready, setReady] = useState(false);

  async function drawDeck() {
    const res = await axios.get(
      "http://deckofcardsapi.com/api/deck/new/draw/?count=52"
    );
    // const deck = card.map(({value, suit}) => ({[value]: suit}))
    const newDeck = res.data.cards.map(({ value, suit }) => [
      `${value} of ${suit}`,
    ]);
    setCardDeck(newDeck);
    setReady(true);
  }

  return (
    <div>
      <button onClick={drawDeck}>Draw a new deck</button>
      <div>
        <PullCards deck={cardDeck} status={ready} />
      </div>
    </div>
  );
};

export default DrawCards;
