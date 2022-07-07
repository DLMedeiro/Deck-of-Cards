import React, {useState, useEffect, useInsertionEffect}from "react";
import Card from './card'
import GetDeckOfCards from './deck'
import axios from "axios";

// async function newDeck() {
//     const res = await axios.get("http://deckofcardsapi.com/api/deck/new/")
//     // setDeckId(res.data.deck_id)
//     console.log(res.data.deck_id)
// }
// newDeck();
// 
// 
// huwm3rt15pqs
// 752ua2fdn8k5
// cb6jvd0jup86
// 0igpi4npex2l
// 1l1ai0vf8dys

// const drawCard = () => {
//     const [cards, setCard] = useState(null)

//     const addItem = (card) => {
//         setCard(cards => [cards, {card}])
//     }

//     return (
//         <div>
//             {cards.map((card) => <GetDeckOfCards/>)}
//         </div>
//     )
// }