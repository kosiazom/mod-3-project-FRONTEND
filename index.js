
const cardsURL = "http://localhost:3000/cards/"


let js = document.getElementById('javascript')
js.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e.target)

fetch(cardsURL)
.then(res => res.json())
.then(cards => allQs(cards))

function allQs(cards) {
cards.forEach(card => eachCard(card))
}

function eachCard(card) {
    let javaContainer = document.getElementById("main-container")

    let divCard = document.createElement('div')
    divCard.className = "card"

    let frontDiv = document.createElement('div')
    frontDiv.className = "the-front"

    let h2 = document.createElement('h2')
    h2.innerText = "Question"
    
    let frontp = document.createElement('p')
    frontp.id = "question-front"
    frontp.innerText = card.front_side

    let nextBtn = document.createElement('button')
    nextBtn.id = "next-button"
    nextBtn.innerText = "Next"

    let backDiv = document.createElement('div')
    backDiv.className = "the-back"

    let backH2 = document.createElement('h2')
    backH2.innerText = "Answer"

    let backp = document.createElement('p')
    backp.innerText = card.back_side

    frontDiv.append(h2, frontp, nextBtn)
    backDiv.append(backH2, backp)

    divCard.append(frontDiv, backDiv)

    javaContainer.append(divCard)
}
})



// const front = document.getElementById('question-front')
// front.innerText = card.front_side
// const back = document.getElementById('answer-back')
// back.innerText = card.back_side

// const nextBtn = document.getElementById('next-button')



   
//when we add a listener to the next button it should fgot the next question and answer
    


// function sideBar() {

// }





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







