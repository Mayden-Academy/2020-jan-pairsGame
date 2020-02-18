function randomiseDeck(cardArray) {
    let currentIndex = cardArray.length
    let temp, randomIndex

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        temp = cardArray[currentIndex]
        cardArray[currentIndex] = cardArray[randomIndex]
        cardArray[randomIndex] = temp
    }
    return cardArray
}

function assignCards (randomizedArray) {
    let cards = document.querySelectorAll('.card')
    let i = 0
    cards.forEach(function(card) {
        card.dataset.id = randomizedArray[i].id
        i++
    })
}

function cardShow (event, deck) {
    let dataId = event.dataset.id
    deck.forEach(function (card) {
        if (dataId === card.id) {
            event.childNodes[0].src = card.url
        }
    })
}

function addClickEvents (assignedDeck) {
    let cards = document.querySelectorAll('.card')
    cards.forEach(function (card) {
        card.addEventListener('click', function (e) {
            cardShow(this, assignedDeck)
        })
    })
}