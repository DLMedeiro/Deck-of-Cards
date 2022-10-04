import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Card from "./Card";

const DrawCards = () => {
  const timerId = useRef();
  const [ready, setReady] = useState(false);
  const [draw, setDraw] = useState(false);
  const [num, setNum] = useState(0);
  const [pause, setPause] = useState(true);
  const [cardDeck, setCardDeck] = useState([]);
  //   get deck of cards from API

  useEffect(() => {
    axios
      .get("https://deckofcardsapi.com/api/deck/new/draw/?count=52")
      .then((res) => {
        console.log(res);
        setCardDeck(res.data.cards.map(({ image }) => image));
      });
  }, []);

  function shuffle() {
    setReady(true);
    setDraw(true);
    setPause(true);
  }
  function togglePause() {
    if (pause) {
      setPause(false);
    } else if (!pause) {
      setPause(true);
    }
  }

  useEffect(() => {
    let interval = setInterval(() => {
      if (!pause && ready) {
        if (num < 52) {
          setNum((num) => num + 1);
          console.log(pause);
        } else {
          clearInterval(interval);
          return;
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  // useEffect(() => {
  //   if (num > 52) {
  //     clearInterval(interval);
  //   }
  // }, [num]);

  function restart() {
    clearInterval();
    setNum(0);
    setReady(false);
    setDraw(false);
    setPause(false);
    setCardDeck([]);
  }

  return (
    <div>
      {ready ? (
        draw ? (
          <div>
            <button onClick={restart}>Re-Shuffle</button>
            {num < 52 ? (
              <div>
                <div>
                  {pause ? (
                    <div>
                      <button onClick={togglePause}>Draw</button>
                    </div>
                  ) : (
                    <div>
                      <button onClick={togglePause}>Pause</button>
                    </div>
                  )}
                </div>

                <div>
                  {/* <div>{num}</div> */}
                  <Card card={cardDeck[num]} />
                </div>
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
          <button className="shuffle" onClick={shuffle}>
            Shuffle Cards
          </button>
        </div>
      )}
    </div>
  );
};

export default DrawCards;
