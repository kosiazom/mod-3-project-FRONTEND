const question = document.getElementById('question')
const answer = document.getElementById('answer')
const nextBtn = document.getElementById('next-button')
const cardsURL = "http://localhost:3000/cards/"

fetch(cardsURL)
.then(res => res.json())
.then(questions => allQs(questions))

function allQs(questions) {

}


question.innerText = questions.front_side
answer.innerText = questions.back_side

// answer.innerText = questions.back_side

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







