let playerScore=localStorage.getItem("playerScore")
let computerScore=localStorage.getItem("computerScore")
let playerName=localStorage.getItem("playerName")
let result=document.getElementById("result-div")
result.innerHTML=""

if(playerScore>computerScore){
    console.log("player")
    result.innerHTML+=`
        <h1>Congratulations!! <span id="playerName">${playerName}</span></h1>
        <h1>You Scored: <span id="playerScore">${playerScore}</span></h1>
        <h1>Computer Score : <span id="computerScore">${computerScore}</span></h1>
        <h1>You won the match !</h1>`
}

else if(playerScore<computerScore){
    console.log("Computer")
    result.innerHTML+=`
    <h1>Keep practicing,<span id="playerName">${playerName}</span>! You'll smash it next time!</h1>
    <h1>You Scored: <span id="playerScore">${playerScore}</span></h1>
    <h1>Computer Score : <span id="computerScore">${computerScore}</span></h1>
    <h1>Computer triumphs!</h1>`
}

else{
    console.log("Tie")
    result.innerHTML+=`
    <h1>The match ends in a draw!</h1>
    <h1>You Scored: <span id="playerScore">${playerScore}</span></h1>
    <h1>Computer Score : <span id="computerScore">${computerScore}</span></h1>
    <h1>Want to try again,<span id="playerName">${playerName}</span>?</h1>`
}




















/* This is for redirecting to other pages to try again or to start from beggining*/ 

let backBtn=document.getElementById("back-btn")
let retryBtn=document.getElementById("retry-btn")

backBtn.addEventListener("click",()=>{
    location.href="./index.html"
})

retryBtn.addEventListener("click",()=>{
    location.href="./game.html"
})
