import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Card from "./Card";

const DrawCards = () => {
  const timerId = useRef();
  const [ready, setReady] = useState(false);
  const [draw, setDraw] = useState(false);
  const [drawnCards, setDrawnCards] = useState([]);
  const [num, setNum] = useState(0);
  const [pause, setPause] = useState(false);
  const [cardDeck, setCardDeck] = useState([]);
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
      if (!pause) {
        setNum((num) => num + 1);
        drawCard(num);
      }
    }, 1000);
    return () => {
      clearInterval(timerId.current);
    };
  }, [ready, pause]);

  function startStop() {
    if (pause === true) {
      setPause(false);
    } else {
      setPause(true);
    }
  }

  function drawCard() {
    if (num < 52) {
      setDrawnCards((drawnCards) => [...drawnCards, cardDeck[num]]);
      return drawnCards;
    }
  }

  function restart() {
    setDrawnCards((drawnCards) => [...drawnCards, cardDeck[num]]);
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

          <button onClick={drawCard}>Draw Single Card</button>

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
