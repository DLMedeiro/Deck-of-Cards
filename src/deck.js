import React, {useState, useEffect}from "react";
import axios from "axios";

const GetDeckOfCards = () => {

    const [drawnCards, setDrawnCards] = useState([])
    const [cardDeck, setCardDeck] = useState([]);
    const [count, setCount] = useState(0)
    const [fullDeck, setFullDeck] = useState(false)

    useEffect(() => {
        async function drawDeck() {
            const res = await axios.get("http://deckofcardsapi.com/api/deck/new/draw/?count=52")
            // const deck = card.map(({value, suit}) => ({[value]: suit}))
            const cardDeck = (res.data.cards.map(({value, suit}) => ([`${value} of ${suit}`]))) ;
            
            setFullDeck(false)
            setCardDeck(cardDeck)
     }
     drawDeck()
 }, [fullDeck])

    const drawCard = () => {
        if (count <= 51) {
            const cardData = cardDeck[count]
            setCount(count + 1)
            addCard(cardData)
        } else {
            setDrawnCards([])
            setFullDeck(true)
            setCount(0)
            alert("No More Cards in Deck")
        }
    }

    function addCard(card) {
        setDrawnCards(drawnCards => [...drawnCards, card]) 
    }

    return (
        <div>
            <button onClick={drawCard}>Draw Card</button>
            <p>
            {drawnCards.length === 0 ? 
                'Draw a card to start':
                drawnCards.map((c) => <li>{c}</li>)}
            </p>
        </div>
    )

};

export default GetDeckOfCards;