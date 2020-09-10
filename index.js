
const cardsURL = "http://localhost:3000/cards/"
const decksURL = "http://localhost:3000/decks/"
let addNewCard = false;
let editCard = false
let js = document.getElementById('javascript')
let rb = document.getElementById('ruby')
let hc = document.getElementById('htmlcss')
const addCardLink = document.getElementById("add-card")
const editCardLink = document.getElementById('edit-card')
const cardContainer = document.querySelector('.new-card-container')
const editCardContainer = document.querySelector('.edit-card-container')

selectADeck()
addCard()
// addDeck()
// getAllCards()
// hideForm()


    
    // console.log(deckContainer)
    
    addCardLink.addEventListener('click', (e) => {
        
        addNewCard = !addNewCard;
        if (addNewCard) {
            cardContainer.style.display = "block"
        } 
        else {
            cardContainer.style.display = "none"
        }
    })

    editCardLink.addEventListener('click', (e) =>{
        
        editCard = !editCard;
        if (editCard) {
            editCardContainer.style.display = "block"
        } else {
            editCardContainer.style.display = "none"
        }
    })


    function selectADeck(){
        let deckTitle = document.querySelector('div#sidebar-title')
        deckTitle.addEventListener('click', (e) => {
            e.preventDefault()
            let dTitle = e.target.innerText
            let mc = document.querySelector('.main-container')
            mc.innerHTML = ""
        
        fetch(cardsURL)
        .then(res => res.json())
        .then(cards => cards.forEach(card => card.category === dTitle ? eachCard(card) : console.log("Try Again")))
        })
    }


function eachCard(card) {
    let javaContainer = document.querySelector(".main-container")

    let divCard = document.createElement('div')
    divCard.className = "card"
    divCard.dataset.cardId = card.id

    let frontDiv = document.createElement('div')
    frontDiv.className = "the-front"

    let h2 = document.createElement('h2')
    h2.innerText = "Question"
    
    let frontp = document.createElement('p')
    frontp.id = "question-front"
    frontp.innerText = card.front_side

    let editBtn = document.createElement('button')
    editBtn.id = "edit-btn"
    editBtn.innerText = "Edit"
    
    editBtn.addEventListener('click', populateAddForm)

    let deleteBtn = document.createElement('button')
    deleteBtn.id = "delete-button"
    
    // deleteBtn.dataset.cardId = card.id
    deleteBtn.innerText = "Delete"

    deleteBtn.addEventListener('click', (e) => {
    
        console.log(e.target)
      

        fetch(cardsURL + card.id, {
            method: "DELETE"
        })
        .then( () => divCard.remove())
    })

    let backDiv = document.createElement('div')
    backDiv.className = "the-back"

    let backH2 = document.createElement('h2')
    backH2.innerText = "Answer"

    let backp = document.createElement('p')
    backp.innerText = card.back_side

    javaContainer.append(divCard)
    divCard.append(frontDiv, backDiv)
    frontDiv.append(h2, frontp)
    backDiv.append(backH2, backp, deleteBtn, editBtn)

}

function populateAddForm(e) {
    let editForm = document.getElementById('edit-form')
    
    // console.log(e.target.parentElement.previousElementSibling.children[1].innerText)
    // console.dir(e.target)
    //debugger
editForm[0].value =  e.target.parentElement.previousElementSibling.children[1].innerText
editForm[1].value =  e.target.parentElement.children[1].innerText

let cardId = Number(e.target.parentElement.parentElement.dataset.cardId)
editForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let question = e.target[0].value
    let answer = e.target[1].value

    let patchRequest = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                front_side: question,
                back_side: answer
            })
        }

        fetch(cardsURL + cardId, patchRequest)
        .then( resp => resp.json() )
        .then( console.log )
})

// 
}

function addCard(){
    let addNewCard = document.getElementById('add-new-card')
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
   


// function addDeck(){
//     letaddnewCard = document.getElementById('addnewdeck')
//     addNewDeck.addEventListener('submit', (e) => {
//         e.preventDefault()
//         let category = e.target[0].value 
//         let user_id = 3
    
//         fetch(decksURL, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             },
//             body: JSON.stringify({
//                 category, user_id
//             })
//         })
//         .then(res => res.json())
//         .then(console.log)
//         addNewDeck.reset()
//     })
// }

