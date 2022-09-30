import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Card from "./Card";

const DrawCards = () => {
  const timerId = useRef();
  const [ready, setReady] = useState(false);
  const [draw, setDraw] = useState(false);
  const [num, setNum] = useState(0);
  const [pause, setPause] = useState(false);
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
  }, [ready]);

  function shuffle() {
    setReady(true);
  }
  function togglePause() {
    if (pause) {
      setPause(false);
    } else if (!pause) {
      setPause(true);
    }
  }

  useEffect(() => {
    setDraw(true);
    const interval = setInterval(() => {
      if (!pause) {
        if (num < 52) {
          setNum((num) => num + 1);
        } else {
          clearInterval(interval);
          return;
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  function restart() {
    setNum(0);
    setReady(false);
    setDraw(false);
    setPause(false);
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
                      <button onClick={togglePause}>Resume</button>
                    </div>
                  ) : (
                    <div>
                      <button onClick={togglePause}>Pause</button>
                    </div>
                  )}
                </div>

                <div>{cardDeck[num]}</div>
              </div>
            ) : (
              <div>No More Cards Available</div>
            )}
          </div>
        ) : (
          <div>
            <button onClick={togglePause}>Draw Cards</button>
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
