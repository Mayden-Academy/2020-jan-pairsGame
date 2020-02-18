function assignCards (randomizedArray) {
    let cards = document.querySelectorAll('.card')
    let i = 0
    cards.forEach(function(card) {
        card.dataset.id = randomizedArray[i].id
        i++
    })
}

function cardShow (event, randomizedCards) {
    let targetUrl = ''
    let dataId = event.target.dataset.id
    randomizedCards.forEach(function (card) {
        if (dataId == card.id) {
            targetUrl = card.url
        }
    })
    event.target.innerHTML = `<img src="${targetUrl}"/>`
}