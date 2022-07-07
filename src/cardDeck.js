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
// hge9s4k0ozhd
// ct4nux2grece
// pmmxyndwk09o
// 1ffbwwaw63l0
// 5uqz3v6hqq5z
// lk5j95htv0lk
// dupct3m0eizc

// const ShowCard = () => {
    // const apiId = "78bd3ws47ukp";
    
    // const [deckId, setDeckId] = useState(apiId)
    
    // useEffect(() => {
    //     async function newDeck() {
    //         const res = await axios.get("http://deckofcardsapi.com/api/deck/new/")
    //         // setDeckId(res.data.deck_id)
    //         console.log(res.data.deck_id)
    //     }
    //     newDeck();
    // }, []);

    // const [deck, setDeck] = useState(null)

    // useEffect(() => {
    //     async function getDeck(id) {
    //         let newDeckAPICall = "http://deckofcardsapi.com/api/deck/" + id + "/draw/?count=52"
    //         console.log(id)
    //         const res = await axios.get(newDeckAPICall)
    //         const card = res.data.cards
    //         // const deck = card.map(({value, suit}) => ({[value]: suit}))
    //         const deck = card.map(({value, suit}) => (`${value} of ${suit}`))
    //         console.log(deck)
    //         setDeck(apiId)
    //     }
    //     getDeck(deckId)
    // }, [])

    // const [count, setCount] = useState(0);

    // const [card, setCard] = useState(null);

    // function drawCard(count) {
    //     setCard(deck[count])
    //     return(
    //         <div>
    //             {card}
    //         </div>
    //     )
    // }
        
    
//     return (
//         <div>
//             <h1> Count is: {count}</h1>
//             <button onClick = {() => setCount(count +1)}>Set Count</button>
//             <div>
//                 {deck[count]}
//             </div>
//             {/* <button onClick = {drawCard(count)}>Draw Card</button> */}

//             {/* <button onClick={loadCards}>Draw Card</button> */}
//             {/* <h3>{cardDeck ? cardDeck : ''}</h3> */}
//         </div>
//     )
// }


// export default ShowCard;