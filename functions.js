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

function assignCards (deck) {
    let cards = document.querySelectorAll('.card')
    let i = 0
    cards.forEach(function(card) {
        card.dataset.id = deck[i].id
        i++
    })
}

function addClickEvents (deck) {
    let cards = document.querySelectorAll('.card')
    cards.forEach(function (card) {
        card.addEventListener('click', function (e) {
            cardShow(this, deck)
        })
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

function cardHide (clickedCard1, clickedCard2) {
    document.getElementById(clickedCard1.divId).childNodes[0].src = './images/hippo.jpg'
    document.getElementById(clickedCard2.divId).childNodes[0].src = './images/hippo.jpg'
}