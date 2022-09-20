import React, { useState, useEffect } from "react";
import Card from "./Card";

function PullCards({ deck, ready, setReady }) {
  const [drawnCards, setDrawnCards] = useState([]);
  const [paused, setPaused] = useState(false);
  const [fullDeck, setFullDeck] = useState(false);
  let num;

  //   function pause() {
  //     if (paused == false) {
  //       setPaused(true);
  //     } else {
  //       //   timer();
  //       setPaused(false);
  //     }
  //   }

  //   const timer = () => {
  //     if (drawnCards.length > 51) {
  //       num = 52;
  //       DrawCard(num);
  //     } else {
  //       num = drawnCards.length;
  //       setInterval((num) => {
  //         num = num + 1;
  //         DrawCard(num);
  //       }, 100);
  //     }
  //   };

  //   function deal() {
  //     setInterval(() => {
  //       DrawCard();
  //     }, 100);
  //   }

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
      {fullDeck === false ? (
        <div>
          <button onClick={DrawCard}>Draw Card</button>
          <div>
            {drawnCards.map((c) => (
              <Card card={c} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div>No more cards</div>
          <button onClick={DrawCard}>Draw Card</button>
        </div>
      )}

      {/* {paused == true ? (
        <button onClick={pause}>Draw Cards</button>
      ) : (
        <button onClick={pause}>Pause</button>
      )} */}
    </div>
  );
}

export default PullCards;
