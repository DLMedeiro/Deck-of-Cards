import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import PullCards from "./PullCards";
import Card from "./Card";

const DrawCards = () => {
  const [ready, setReady] = useState(false);

  const [drawnCards, setDrawnCards] = useState([]);
  const [fullDeck, setFullDeck] = useState(false);
  const [num, setNum] = useState(drawnCards.length);
  const [sendRequest, setSendRequest] = useState(false);
  //   send use effect through onClick

  const [cardDeck, setCardDeck] = useState([]);
  // New deck of cards pulled from API and formatted for use through the application. Only runs after the first render
  useEffect(() => {
    axios
      .get("http://deckofcardsapi.com/api/deck/new/draw/?count=52")
      .then((res) => {
        setCardDeck(
          res.data.cards.map(({ value, suit }) => [`${value} of ${suit}`])
        );
        setReady(true);
      });
  }, [ready]);

  function drawCard() {
    if (drawnCards.length < 52) {
      const cardData = cardDeck[drawnCards.length];
      setDrawnCards((drawnCards) => [...drawnCards, cardData]);
      return drawnCards;
    }
    // } else {
    //   setFullDeck(true);
    //   setDrawnCards([]);
    //   setFullDeck(false);
    // }
  }

  function restart() {
    setFullDeck(true);
    setDrawnCards([]);
    setFullDeck(false);
    setCardDeck([]);
    setReady(false);
  }

  //   useEffect(() => {
  //     if (num < 52) {
  //       drawCard();
  //     } else {
  //       setSendRequest(false);
  //     }
  //   }, [num, drawCard, sendRequest]);

  //   useEffect(() => {
  //     if (sendRequest) {
  //       const interval = setInterval(() => {
  //         setNum((num) => num + 1);
  //       }, 100);
  //       return () => clearInterval(interval);
  //     }
  //   }, [sendRequest, num]);

  return (
    <div>
      {cardDeck && drawnCards.length < 52 ? (
        <div>
          <button onClick={drawCard}>Draw Card</button>
          <div>
            {drawnCards.map((c) => (
              <Card card={c} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h3>Loading...</h3>
          <button onClick={restart}>Draw New Deck of Cards</button>
        </div>
      )}
    </div>
  );
};

export default DrawCards;
