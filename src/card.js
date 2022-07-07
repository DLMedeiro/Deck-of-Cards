import React, {useState, useEffect}from "react";

import axios from "axios";

const apiCall = "http://deckofcardsapi.com/api/deck/new/draw/?count=52"
// const count = 51
const Card = () => {
    const [cardDeck, setCardDeck] = useState(null);

    // async function loadCards() {
    //     const res = await axios.get(apiCall)
    //     const result = res.data.cards
    //     // console.log(result)
    //     result.map(({value, suit}) => {
    //         setCardDeck([`${value} of ${suit}`])
    //         console.log(cardDeck)
    //     })
    // }
    
    // const addCard = (card) => {
    //     setDeck(cardDeck => [...cardDeck, card ])
    // }



    // useEffect(() => {
    //         axios.get(apiCall).then(res => console.log(res.data.cards))
    //     }, [])
  
    // return (
    //     <div>
    //         <button onClick={loadCards}>Draw Card</button>
    //         <h3>{cardDeck ? cardDeck : ''}</h3>
    //     </div>
    // )
}


export default Card;