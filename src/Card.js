import React from "react";

function Card({ card }) {
  return <div>{card}</div>;
}

export default Card;

// import React, { useState } from "react";

// function Card({ card }) {
//   const [cardsTest, setCardsTest] = useState([]);

//   setCardsTest((cardsTest) => [...cardsTest, card]);

//   return <div>{cardsTest}</div>;
// }

// export default Card;
