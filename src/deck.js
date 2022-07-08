import React, {useState, useEffect}from "react";
import axios from "axios";


const GetDeckOfCards = () => {
    
    const [drawnCards, setDrawnCards] = useState([])
    const [cardDeck, setCardDeck] = useState([]);
    const [fullDeck, setFullDeck] = useState(false)
    const [check, setCheck] = useState(null)
    const [isPaused, setIsPaused] = useState(false)
    const [count, setCount] = useState(0)
    let num;
    
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
    

    // const counter = () => {
    //     console.log(check)
    //     if (check == null) {
    //         if (num > 52) {
    //             let num = 0
    //             setCheck(setInterval(() => {
    //                 setCount(num +1)
    //                 console.log(num)
    //                 DrawCard(num)
    //             }, 100))
    //         } else {
    //             let num = 0;
    //             setCheck(setInterval(() => {
    //                 setCount(num + 1)
    //                 console.log(num)
    //                 DrawCard(num)
    //             }, 100))
    //         } 
    //     }
    // }
    const counter = () => {
        if (check == null && !isPaused) {
            let num = 0
            setCheck(setInterval(() => {
                num = num +1
                // console.log(num)
                console.log(`num = ${num}`)
                DrawCard(num)
            }, 1000))
        }
    }
    
    function stop () {
        if (!isPaused) {
            setIsPaused(true)
            clearInterval(check);
            console.log(isPaused)
        } else {
            setIsPaused(false)
            setCheck(null)
            console.log(isPaused)

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
        if (count <= 51) {
            const cardData = cardDeck[count]
            addCard(cardData)
            // console.log(`this1 ${count}`)  
        } else {
            // console.log(`this2 ${count}`)  
            setDrawnCards([])
            setFullDeck(true)
            // setCount(0)
            alert("No More Cards in Deck")
        }
    }

    function addCard(card) {
        setDrawnCards(drawnCards => [...drawnCards, card]) 
    }

    return (
        <div>
            {check == null? <button onClick={counter}>Draw Card</button> : <button onClick={stop}>Stop</button>}

            <div>
            {drawnCards.length === 0 ? 
                'Draw a card to start':
                drawnCards.map((c) => <div>{c}</div>)}
            </div>
        </div>
    )

};

export default GetDeckOfCards;