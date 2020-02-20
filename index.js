let clickCounter = 0, turnCounter = 0
let clickedCard1 = {}, clickedCard2 = {}
let cards = document.querySelectorAll('.card')
let timer
let displayedTime = '00:00'

fetch('./deck.json')
    .then(data => data.json())
    .then((fetchDeck)=>{
        let deck = fetchDeck.hippos
        deck = randomiseDeck(deck)
        assignCards(deck)
        addClickEvents(deck)
        setTimer()
    }).catch(()=>{
        alert('Something went wrong. Please contact an administrator.')
    })


