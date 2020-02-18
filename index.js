fetch('./deck.json')
    .then(data => data.json())
    .then((fetchDeck)=>{
        let deck = fetchDeck.hippos
    })