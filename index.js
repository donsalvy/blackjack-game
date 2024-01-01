let firstCard = 5
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")


function startGame(){
    cardsEl.textContent = "cards:" + firstCard + " " + secondCard 
    sumEl.textContent = "sum:" + sum
    if(sum <= 20){
        message = "Do you want to draw a new card?"
    }else if(sum === 21){
        message = "Woh oo! You've got a Blackjack"
        hasBlackJack = true
    
    }else{
    
        message = "You're out of the Game!"
        isAlive = false
    } 
    messageEl.textContent = message 
}



function newCard(){
    console.log("drawing a new card from the deck")
    let card = 7

    sum =  sum + card
    startGame()
}
