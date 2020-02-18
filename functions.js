function assignCards (randomizedArray) {
    let cards = document.querySelectorAll('.card')
    console.log (cards)
    let i = 0
    cards.forEach(function(card) {
        card.dataset.id = randomizedArray[i].id
        i++
    })
}