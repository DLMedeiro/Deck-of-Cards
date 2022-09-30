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
  const [time, setTime] = useState(false);
  //   get deck of cards from API

  useEffect(() => {
    axios
      .get("http://deckofcardsapi.com/api/deck/new/draw/?count=52")
      .then((res) => {
        setCardDeck(
          res.data.cards.map(({ value, suit }) => [`${value} of ${suit}`])
        );
      });
  }, [ready]);

  function shuffle() {
    setReady(true);
  }
  function togglePause() {
    setPause((pause) => !pause);
  }

  function drawingCards() {
    setDraw(true);
    timerId.current = setInterval(() => {
      if (num > 52) {
        clearInterval(timerId.current);
        return;
      }
      if (pause) {
        setNum(num);
        return;
      }
      setNum((num) => num + 1);
    }, 100);

    return () => {
      clearInterval(timerId.current);
    };
  }

  // useEffect(() => {
  //   if (pause === false && num >= 0) {
  //     setDrawnCards((drawnCards) => [...drawnCards, cardDeck[num]]);
  //     console.log(drawnCards);
  //     console.log(num);
  //   }
  // }, [num, pause]);

  // function startStop() {
  //   if (pause === false) {
  //     setPause(true);
  //   } else {
  //     setPause(false);
  //   }
  // }

  function restart() {
    clearInterval(timerId.current);
    setNum(0);
    setReady(false);
    setDraw(false);
    setPause(false);
    // setDrawnCards([]);
    // setCardDeck([]);
  }

  return (
    <div>
      {ready ? (
        draw ? (
          <div>
            <button onClick={restart}>Shuffle Deck</button>
            {num < 52 ? (
              <div>
                <div>
                  {pause ? (
                    <div>
                      <button onClick={togglePause}>Start</button>
                    </div>
                  ) : (
                    <div>
                      <button onClick={togglePause}>Pause</button>
                    </div>
                  )}
                </div>

                <div>{num}</div>
                <div>{cardDeck[num]}</div>
              </div>
            ) : (
              <div>No More Cards Available</div>
            )}
          </div>
        ) : (
          <div>
            <button onClick={drawingCards}>Draw Cards</button>
          </div>
        )
      ) : (
        <div>
          <h3>Shuffle Deck</h3>
          <button onClick={shuffle}>Shuffle</button>
        </div>
      )}
    </div>
  );
};

export default DrawCards;
