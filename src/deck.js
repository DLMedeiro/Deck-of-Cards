import React, {useState, useEffect, useInsertionEffect}from "react";
import Card from './card'
import axios from "axios";



const GetDeckOfCards = () => {
    const apiId = "pmmxyndwk09o";



    // useEffect(() => {
        async function getDeck(id) {
            let newDeckAPICall = "http://deckofcardsapi.com/api/deck/" + id + "/draw/?count=52"
            console.log(id)
            const res = await axios.get(newDeckAPICall)
            const card = res.data.cards
            // const deck = card.map(({value, suit}) => ({[value]: suit}))
            const deck = card.map(({value, suit}) => (`${value} of ${suit}`))
            console.log(deck)
            ShowCard();
            return INITIAL_STATE = deck
    
        }

    const [deck, setDeck] = useState(INITIAL_STATE)


        // getDeck(apiId)
    // }, [])

    // useEffect(() => {
    //     async function newDeck() {
    //         const res = await axios.get("http://deckofcardsapi.com/api/deck/new/")
    //         setDeckId(res.data.deck_id)
    //         console.log(deckId)
    //     }
    //     newDeck();
    // }, [])

    const draw = () => {
        getDeck(apiId)
    }

    const ShowCard = () => {
        deck.map((cardData) => <div>{cardData}</div>)
    }


    return (
        <div>
            <button onClick={draw}>Draw</button>
            
        </div>
    )

};

export default GetDeckOfCards;