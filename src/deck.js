import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const GetDeckOfCards = () => {
  const [drawnCards, setDrawnCards] = useState([]);
  const [cardDeck, setCardDeck] = useState([]);
  const [fullDeck, setFullDeck] = useState(false);
  const [check, setCheck] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [count, setCount] = useState(0);
  let num;

  useEffect(() => {
    async function drawDeck() {
      const res = await axios.get(
        "http://deckofcardsapi.com/api/deck/new/draw/?count=52"
      );
      // const deck = card.map(({value, suit}) => ({[value]: suit}))
      const cardDeck = res.data.cards.map(({ value, suit }) => [
        `${value} of ${suit}`,
      ]);

      setFullDeck(false);
      setCardDeck(cardDeck);
    }
    drawDeck();
  }, [fullDeck]);

  function counter(num) {
    num = num + 1;
    DrawCard(num);
  }

  const timer = () => {
    if (drawnCards.length > 52 || drawnCards.length == 0) {
      num = 0;
      console.log(num);
      setInterval(() => {
        num = num + 1;
        DrawCard(num);
        console.log(drawnCards.length);
      }, 100);
    } else {
      num = drawnCards.length;
      setInterval((num) => {
        num = num + 1;
        DrawCard(num);
      }, 100);
    }
  };
  // const counter = () => {
  //     if (check == null && !isPaused) {
  //         let num = 0
  //         setCheck(setInterval(() => {
  //             num = num +1
  //             // console.log(num)
  //             console.log(`num = ${num}`)
  //             DrawCard(num)
  //         }, 1000))
  //     }
  // }

  function stop() {
    if (!isPaused) {
      setIsPaused(true);
      clearInterval(check);
      console.log(isPaused);
    } else {
      setIsPaused(false);
      setCheck(null);
      console.log(isPaused);
    }

    // console.log(`check = ${check}`)
    // if (check < 52 && !isPaused){
    //     isPaused = true;
    // } else {
    //     setCheck(null)
    //     clearInterval(check);
    // }
  }
  // const counter = () => {
  //     let num = 0
  //     setInterval(() => {
  //         num = num +1
  //         console.log(num)
  //         DrawCard(num)
  //     }, 100)
  // }

  function DrawCard(count) {
    // setCount(num )
    // console.log(count)
    if (count <= 52) {
      const cardData = cardDeck[count];
      addCard(cardData);
      // console.log(`this1 ${count}`)
      console.log(drawnCards.length);
    } else {
      // console.log(`this2 ${count}`)
      setDrawnCards([]);
      setFullDeck(true);
      // setCount(0)
      alert("No More Cards in Deck");
    }
  }

  function addCard(card) {
    setDrawnCards((drawnCards) => [...drawnCards, card]);
  }

  return (
    <div>
      <button onClick={timer}>Draw Card</button>
      {/* {check == null? <button onClick={counter}>Draw Card</button> : <button onClick={stop}>Stop</button>} */}

      <div>
        {drawnCards.length === 0
          ? "Draw a card to start"
          : drawnCards.map((c) => <Card card={c} />)}
      </div>
    </div>
  );
};

export default GetDeckOfCards;
