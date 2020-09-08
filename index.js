const qust = document.getElementById('question')
const answer = document.getElementById('answer')
const nextBtn = document.getElementById('next-button')
const cardsURL = "http://localhost:3000/cards/"

fetch(cardsURL)
.then(res => res.json())
.then(questions => allQs(questions))

function allQs(questions) {
    questions.forEach(question => eachQ(question))
}

function eachQ(question) {
    qust.innerText = question.front_side
    answer.innerText = question.back_side
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







