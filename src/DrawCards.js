import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Card from "./Card";

const DrawCards = () => {
  const timerId = useRef();
  const [ready, setReady] = useState(false);
  const [draw, setDraw] = useState(false);
  const [drawnCards, setDrawnCards] = useState([]);
  const [num, setNum] = useState(0);
  const [pause, setPause] = useState(true);
  const [cardDeck, setCardDeck] = useState([]);

  //   get deck of cards from API
  useEffect(() => {
    axios
      .get("http://deckofcardsapi.com/api/deck/new/draw/?count=52")
      .then((res) => {
        setCardDeck(
          res.data.cards.map(({ value, suit }) => [`${value} of ${suit}`])
        );
      });
  }, [draw]);

  useEffect(() => {
    timerId.current = setInterval(() => {
      if (pause === false && num <= 52) {
        setNum((num) => num + 1);
      }
    }, 1000);
    return () => {
      clearInterval(timerId.current);
    };
  }, [ready, pause]);

  useEffect(() => {
    if (pause === false && num >= 0) {
      setDrawnCards((drawnCards) => [...drawnCards, cardDeck[num]]);
      console.log(drawnCards);
      console.log(num);
    }
  }, [num, pause]);

  function startStop() {
    if (pause === false) {
      setPause(true);
    } else {
      setPause(false);
    }
  }

  function restart() {
    setPause(true);
    setDraw(true);
    setDrawnCards([]);
    setCardDeck([]);
    setReady(true);
    setNum(0);
  }

  return (
    <div>
      {ready ? (
        <div>
          <h3>{cardDeck[num]}</h3>
          <h3>{num}</h3>
          {pause ? (
            <button onClick={startStop}>Draw</button>
          ) : (
            <button onClick={startStop}>Pause</button>
          )}

          <div>
            {drawnCards.map((c) => (
              <Card card={c} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h3>All cards drawn</h3>
          <button onClick={restart}>Shuffle</button>
        </div>
      )}
    </div>
  );
};

export default DrawCards;
