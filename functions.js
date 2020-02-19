var clickCounter = 0
var clickedCard1 = {}
var clickedCard2 = {}


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
        this.dataset.faceUp = 0
            if (clickCounter === 0 && this.dataset.faceUp == 0) {
                cardShow(this, deck)
                this.dataset.faceUp = 1
                clickedCard1 = {
                    divID : this.id,
                    url : this.childNodes[0].src
                }
                clickCounter = 1
                console.log(clickedCard1, clickCounter)
            } else if (clickCounter === 1 && this.dataset.faceUp == 0) {
                cardShow(this, deck)
                //comparison()
            }


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

