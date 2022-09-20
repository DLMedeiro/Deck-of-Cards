import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import PullCards from "./PullCards";
import Card from "./Card";

const DrawCards = () => {
  const timerId = useRef();
  const [ready, setReady] = useState(false);
  const [draw, setDraw] = useState(false);
  const [drawnCards, setDrawnCards] = useState([]);
  const [num, setNum] = useState(0);
  const [pause, setPause] = useState(true);

  const [fullDeck, setFullDeck] = useState(false);
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
        console.log(cardDeck);
        // setReady(true);
      });
  }, [draw]);

  useEffect(() => {
    timerId.current = setInterval(() => {
      if (!pause) {
        setNum((num) => num + 1);
      }
    }, 1000);
    return () => {
      clearInterval(timerId.current);
    };
  }, [ready, pause]);

  //   useEffect(() => {
  //     setDrawnCards((drawnCards) => [...drawnCards, cardDeck[num]]);
  //   }, [cardDeck]);

  function startStop() {
    if (pause) {
      setPause(false);
    } else {
      setPause(true);
    }
  }
  //   function initiateDraw() {
  //     if (ready === false) {
  //       setDraw(true);
  //       clearInterval(timerId.current)
  //     } else {
  //       setDraw(false);
  //     }
  //   }

  function drawCard() {
    if (drawnCards.length < 52) {
      const cardData = cardDeck[drawnCards.length];
      setDrawnCards((drawnCards) => [...drawnCards, cardData]);
      return drawnCards;
    }
  }

  function restart() {
    console.log(pause);
    // setPause(true);
    setFullDeck(true);
    setDrawnCards([]);
    setFullDeck(false);
    setCardDeck([]);
    setReady(true);
    setNum(0);
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
      {ready ? (
        <div>
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
