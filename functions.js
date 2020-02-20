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
        card.dataset.faceUp = '0'
        i++
    })
}

function addClickEvents (deck) {
    let cards = document.querySelectorAll('.card')
    cards.forEach(function (card) {
        card.addEventListener('click', function (e) {
            clickLogic(this, deck)
        })
    })
}

function cardShow (event, deck) {
    let dataId = event.dataset.id
    deck.forEach(function (card) {
        if (dataId === card.id) {
            event.childNodes[0].src = card.url
            event.dataset.faceUp = '1'
        }
    })
}

function cardHide (clickedCard1, clickedCard2) {
    setTimeout(function () {
        document.getElementById(clickedCard1.divId).childNodes[0].src = './images/hippo.jpg'
        document.getElementById(clickedCard1.divId).dataset.faceUp = '0'
        document.getElementById(clickedCard2.divId).childNodes[0].src = './images/hippo.jpg'
        document.getElementById(clickedCard2.divId).dataset.faceUp = '0'
        clickCounter = 0
    }, 1000)
}

function comparison(a, b) {
     return (a === b)
}

function clickLogic (clickedCard, deck) {
    if (clickCounter === 0 && clickedCard.dataset.faceUp == 0) {
        cardShow(clickedCard, deck)
        clickedCard1 = {
            divId : clickedCard.id,
            url : clickedCard.childNodes[0].src
        }
        clickCounter = 1
    } else if (clickCounter === 1 && clickedCard.dataset.faceUp == 0) {
        cardShow(clickedCard, deck)
        clickedCard2 = {
            divId : clickedCard.id,
            url : clickedCard.childNodes[0].src
        }
        turnCounter++
        document.getElementById('turnContainer').textContent = String(turnCounter)
        if (comparison(clickedCard1.url, clickedCard2.url)) {
            clickCounter = 0
            if(winState()) {
                gameEnd()
            }
        } else {
            clickCounter = 2
            cardHide(clickedCard1, clickedCard2)
        }
    }
}

function gameEnd () {
    document.getElementById('totalTurns').textContent = String(turnCounter)
    $('#winScreen').fadeIn(1500)
}

function winState() {
    let result = true
    let cards = document.querySelectorAll('.card')
    cards.forEach(function (card) {
        if(card.dataset.faceUp == 0) {
            result = false
        }
    })
    return result
}