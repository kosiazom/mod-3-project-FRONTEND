
const cardsURL = "http://localhost:3000/cards/"

fetch(cardsURL)
.then(res => res.json())
.then(cards => allQs(cards))

function allQs(cards) {
cards.forEach(card => eachCard(card))
}

function eachCard(card) {

    

const qust = document.getElementById('question')
qust.innerText = card.front_side
const answer = document.getElementById('answer')
answer.innerText = card.back_side

const nextBtn = document.getElementById('next-button')

   
//when we add a listener to the next button it should fgot the next question and answer
    
}

function sideBar() {
    
}





// fetch("http://localhost:3000/cards", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         front_side: "What's ",
//         back_side: "",
//         category: "",
//         deck_id: 1
//     })
// })
// .then(res => res.json())
// .then(console.log)







