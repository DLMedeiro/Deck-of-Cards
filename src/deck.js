import React, {useState, useEffect}from "react";
import axios from "axios";


const GetDeckOfCards = () => {
    
    const [drawnCards, setDrawnCards] = useState([])
    const [cardDeck, setCardDeck] = useState([]);
    const [fullDeck, setFullDeck] = useState(false)
    const [count, setCount] = useState(0)
    
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
    

    const counter = () => {
        let num = 0
        setInterval(() => {
            num = num+1
            if (num <= 51) {
                DrawCard(num)
            } else {
                setFullDeck(true)
            }
        }, 1000)
    }
    
    function DrawCard(num) {
        if (count <= 51) {
            setCount(count + 1)
            const cardData = cardDeck[num]
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
            <button onClick={counter}>Draw Card</button>
            <div>
            {drawnCards.length === 0 ? 
                'Draw a card to start':
                drawnCards.map((c) => <div>{c}</div>)}
            </div>
        </div>
    )

};

export default GetDeckOfCards;