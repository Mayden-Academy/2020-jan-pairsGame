var clickCounter = 0
var clickedCard1 = {}

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
        // this.dataset.faceUp = 0
            if (clickCounter === 0 && this.dataset.faceUp == 0) {
                cardShow(this, deck)
                clickedCard1 = {
                    divID : this.id,
                    url : this.childNodes[0].src
                }
                clickCounter = 1
            } else if (clickCounter === 1 && this.dataset.faceUp == 0) {
                clickedCard2 = {
                    divID : this.id,
                    url : this.childNodes[0].src
                }
                cardShow(this, deck)
                if (comparison(clickedCard1.url, clickedCard2.url)) {
                    clickCounter = 0
                } else {
                    cardHide(clickedCard1, clickedCard2)
                    clickCounter = 0
                }
            }


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
    }, 2000)
}

function comparison(a, b) {
     return (a === b)
}
