
const cardsURL = "http://localhost:3000/cards/"
const decksURL = "http://localhost:3000/decks/"
let addNewDeck = false;

javaCards()
rubyCards()
htmlcssCards()
addCard()
addDeck()
// hideForm()


    

    const addDeckLink = document.getElementById("add-deck")
    const deckContainer = document.querySelector('.new-deck-container')
    console.log(deckContainer)
    
    addDeckLink.addEventListener('click', (e) => {
        
         addNewDeck = !addNewDeck;
        if (addNewDeck) {
            deckContainer.style.display = "block"
        } 
        else {
            deckContainer.style.display = "none"
        }
    })



function javaCards(){
    let js = document.getElementById('javascript')
js.addEventListener('click', (e) => {
    e.preventDefault()
    // console.dir(e.target)
    let mc = document.querySelector('.main-container')
    mc.innerHTML = ""

fetch(cardsURL)
.then(res => res.json())
.then(cards => cards.forEach(card => card.category === "Javascript" ? eachCard(card) : console.log("Try Again")))

})
}

function rubyCards(){
    let rb = document.getElementById('ruby')
rb.addEventListener('click', (e) => {
    e.preventDefault()
    // console.dir(e.target)
    let mc = document.querySelector('.main-container')
    mc.innerHTML = ""

fetch(cardsURL)
.then(res => res.json())
.then(cards => cards.forEach(card => card.category === "Ruby" ? eachCard(card) : console.log("Try Again")))

// cards.filter(card => card.category == e.target)

})
}

function htmlcssCards(){
    let hc = document.getElementById('htmlcss')
hc.addEventListener('click', (e) => {
    e.preventDefault()
    // console.dir(e.target)
    let mc = document.querySelector('.main-container')
    mc.innerHTML = ""

fetch(cardsURL)
.then(res => res.json())
.then(cards => cards.forEach(card => card.category === "HTML/CSS" ? eachCard(card) : console.log("Try Again")))

})
}

function eachCard(card) {
    let javaContainer = document.querySelector(".main-container")

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

    javaContainer.append(divCard)
    divCard.append(frontDiv, backDiv)
    frontDiv.append(h2, frontp, nextBtn)
    backDiv.append(backH2, backp)


}


function addCard(){
    let addNewCard = document.getElementById('addnewcard')
    addNewCard.addEventListener('submit', (e) => {
        e.preventDefault()

        let front_side = e.target[0].value 
        let back_side = e.target[1].value 
        let category = e.target[2].value 
    
        fetch(cardsURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                front_side, back_side, category
            })
        })
        
        .then(res => res.json())
        .then(card => eachCard(card))
            addNewCard.reset()
    })
}


function addDeck(){
    let addNewDeck = document.getElementById('addnewdeck')
    addNewDeck.addEventListener('submit', (e) => {
        e.preventDefault()
        // console.dir(e.target)
        // console.log(e.target[0].value)
        let category = e.target[0].value 
        let user_id = 17
    
        fetch(decksURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                category, user_id
            })
        })
        .then(res => res.json())
        .then(console.log)
        addNewDeck.reset()
    })
}


