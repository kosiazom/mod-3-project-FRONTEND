console.log("Frontend")

fetch("http://localhost:3000/cards")
.then(res => res.json())
.then(console.log)

fetch("http://localhost:3000/cards", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        front_side: "",
        back_side: "",
        category: "",
        deck_id: d1.id
    })
})
.then(res => res.json())
.then(console.log)