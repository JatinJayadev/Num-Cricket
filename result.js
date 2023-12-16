let playerScore=localStorage.getItem("playerScore")
let computerScore=localStorage.getItem("computerScore")
let playerName=localStorage.getItem("playerName")
let result=document.getElementById("result-div")
result.innerHTML=""

/*Storing Random Phrases*/ 
winningPhrases = [
    `Outstanding performance,<span>${playerName}</span>! You've emerged victorious!`,
    `Congratulations,<span>${playerName}</span>! Your skills outshone the computer's!`,
    `You're the cricket champion,<span>${playerName}</span>! Celebrate your well-deserved win!`,
    `Incredible gameplay,<span>${playerName}</span>! You've conquered the computer with finesse.`,
    `Hats off to you, <span>${playerName}</span>! You've clinched the match and triumphed!`
    ];

var losingPhrases = [
    `Well played,<span>${playerName}</span>! The computer proved to be a tough opponent.`,
    `Hard luck,<span>${playerName}</span>! The computer showcased some impressive moves.`,
    `Keep your head high,<span>${playerName}</span>! You gave it your all in a challenging match.`,
    `Tough break,<span>${playerName}</span>! The computer played exceptionally well.`,
];

var tiePhrases=[
    `It's a neck-and-neck battle,<span>${playerName}</span>! A tie game with evenly matched scores.`,
    `What a nail-biter,<span>${playerName}</span>! The game ends in a thrilling tie!`,
    `A game for the books,<span>${playerName}</span>! Both sides performed exceptionally, resulting in a tie.`,
    `No clear winner this time,<span>${playerName}</span>! It's a draw, showcasing great competition.`,
]





/*Generating random index */
function getRandomPhrases(phrases){
    var randomPhrase=Math.floor(Math.random()*phrases.length)
    return phrases[randomPhrase]
}






/*Checking Score and displaying who lost and who won */
if(playerScore>computerScore){
    console.log("player")
    result.innerHTML+=`
        <h1>${getRandomPhrases(winningPhrases)}</h1>
        <h1>You Scored: <span id="playerScore">${playerScore}</span></h1>
        <h1>Computer Score : <span id="computerScore">${computerScore}</span></h1>
        <h1>You won the match !</h1>`
        won=new Audio("assets/Victory-Music.mp3")
        won.play()
}

else if(computerScore>playerScore){
    console.log("Computer")
    result.innerHTML+=`
        <h1>${getRandomPhrases(losingPhrases)}</h1>
        <h1>You Scored: <span id="playerScore">${playerScore}</span></h1>
        <h1>Computer Score : <span id="computerScore">${computerScore}</span></h1>
        <h1>Computer triumphs!</h1>`
        lost=new Audio("assets/Defeat-Sound.mp3")
        lost.play()
}

else{
    console.log("Tie")
    result.innerHTML+=`
    <h1>${getRandomPhrases(tiePhrases)}</h1>
    <h1>You Scored: <span id="playerScore">${playerScore}</span></h1>
    <h1>Computer Score : <span id="computerScore">${computerScore}</span></h1>
    <h1>Want to try again,<span id="playerName">${playerName}</span>?</h1>`
    tie=new Audio("assets/Tie-Music.mp3")
    tie.play()
}

backGroundMusic=new Audio("assets/Crowd-cheering.mp3")
backGroundMusic.play()




/* This is for redirecting to other pages to try again or to start from beggining*/ 

let backBtn=document.getElementById("back-btn")
let retryBtn=document.getElementById("retry-btn")

backBtn.addEventListener("click",()=>{
    location.href="./index.html"
})

retryBtn.addEventListener("click",()=>{
    location.href="./game.html"
})
