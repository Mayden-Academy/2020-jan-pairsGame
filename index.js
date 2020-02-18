fetch('./deck.json')
    .then((data)=>{
        return data.json()
    })
    .then((fetchDeck)=>{
        var deck = []
        deck = fetchDeck.hippos

    })