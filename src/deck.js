import React, {useState, useEffect, useInsertionEffect}from "react";
import Card from './card'
import axios from "axios";



const GetDeckOfCards = () => {
    const apiId = "5oioxz895zcn";

    const [card, setCard] = useState(null)
    const [drawnCards, setDrawnCards] = useState([])

    // useEffect(() => {
        async function drawCard() {
            const res = await axios.get(`http://deckofcardsapi.com/api/deck/${apiId}/draw/?count=1`)
            // const deck = card.map(({value, suit}) => ({[value]: suit}))
            const cardData = (res.data.cards.map(({value, suit}) => ([`${value} of ${suit}`]))) ;

            setCard(cardData)
            addCard(cardData)
            // console.log(card)
        }
        // drawCard()
    // }, [])

    function addCard(card) {
        setDrawnCards(drawnCards => [...drawnCards, card]) 
    }



    return (
        <div>
            <button onClick={drawCard}>Draw Card</button>
            {drawnCards.length > 0 ? drawnCards.map((c) => <li>{c}</li>) : ''}
        </div>
    )

};

export default GetDeckOfCards;