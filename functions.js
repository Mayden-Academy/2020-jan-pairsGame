function assignCards (randomizedArray) {
    let cards = document.querySelectorAll('.card')
    console.log (cards)
    let i = 0
    cards.forEach(function(card) {
        card.dataset.id = randomizedArray[i].id
        i++
    })
}

function addClickEvents (assignedDeck) {
    let cards = document.querySelectorAll('img')
    cards.forEach(function (card) {
        card.addEventListener('click', function (e) {
           //cardShow(e, assignedDeck)
            console.log(e.target)
        })
    })
}

