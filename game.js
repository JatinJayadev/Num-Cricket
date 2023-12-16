/*Getting elements from html and storing*/


let Name = document.getElementById("name");
let nickName = document.getElementById("nickName");
let clickedBtn = document.querySelectorAll(".buttons");
let playerScoreDisplay = document.getElementById("playerScore");
let compScoreDisplay = document.getElementById("computerScore");
let playerRunChoiceDisplay = document.getElementById("player-run-display");
let compRunChoiceDisplay = document.getElementById("comp-run");
let result = document.getElementById("result-board");


let playerName = localStorage.getItem("playerName");
let playerNickName = localStorage.getItem("playerNickName");
Name.innerHTML = playerName;
nickName.innerHTML = playerNickName;


/*Declaring variables for adding score and displaying choices*/
let playerScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;
let turn = Number(localStorage.getItem("turn"));


/*This function is the main key to run the game as soon as player click the button game starts*/
function playerClicked() {
  clickedBtn.forEach((button) => {
    button.addEventListener("click", () => {
      // console.log(`Player clicked:${button.innerHTML}`)

      /*storing innerHtml of button in playerChoice*/
      playerChoice = Number(button.innerHTML);
      computerChoice = computerRandom();

      playerRunChoiceDisplay.innerHTML = playerChoice;
      compRunChoiceDisplay.innerHTML = computerChoice;
      scoreChecking();
      storingScore();
      btnClicked();
    });
  });
}
playerClicked();



/* This is for computer to generate random numbers from 1-6 */
function computerRandom() {
  return Math.floor(Math.random() * 6) + 1;
}





/*This is to check score and to decide who will win */
function scoreChecking() {

    /*If player choose batting then turn will be 1 and later he will do bowling which is turn 2*/
  
    if (turn == 1) {
    //This is when player choice and computer choice is not equal
    if (playerChoice != computerChoice) {
      playerScore += playerChoice;
      playerScoreDisplay.innerHTML = playerScore;
      compScoreDisplay.innerHTML = computerScore;
    }

    //If player choice is equal to computer choice he will lose
    if (playerChoice == computerChoice) {
      turn = 2;
      result.innerHTML = `You are out !! Computer's Turn`;
      playerOut();
    }


  } else if (turn == 2) {
    //This is when computer choice and player choice is not equal
    if (computerChoice != playerChoice) {
      computerScore += computerChoice;
      playerScoreDisplay.innerHTML = playerScore;
      compScoreDisplay.innerHTML = computerScore;
      result.innerHTML = `Computer is Batting and ${playerName} is Bowling`;
    }
    
    //If computer choose the same no as player and computer score is less than player then player wins
    if (computerChoice == playerChoice && computerScore < playerScore) {
      result.innerHTML = `${playerName} won and Computer Lost`;
      window.location.href = "./result.html";
      computerOut();
    }
    
    //This case is when the plyaer score and computer score are equal
    if (computerScore == playerScore && computerChoice == playerChoice) {
      result.innerHTML = `It's a Tie`;
      window.location.href = "./result.html";
      computerOut();
    }
    
    //If computer crosses the target than computer wins
    if (computerScore > playerScore) {
      result.innerHTML = `Computer Won`;
      window.location.href = "./result.html";
    }

  }


  /*If player chose bowling then turn starts form 3 */
  if (turn == 3) {
    //This is when computer choice and player choice is not equal
    if (computerChoice != playerChoice) {
      computerScore += computerChoice;
      playerScoreDisplay.innerHTML = playerScore;
      compScoreDisplay.innerHTML = computerScore;
    }
    
    //If computer choice is equal to player choice, computer will lose
    if (computerChoice == playerChoice) {
      turn = 4;
      result.innerHTML = `Computer is out !! It's Your Turn`;
      computerOut();
    }
  } 
  
  //After computer gets out layer will play batting
  else if (turn == 4) {
  
    //This is when player choice and computer choice is not equal
    if (playerChoice != computerChoice) {
      playerScore += playerChoice;
      playerScoreDisplay.innerHTML = playerScore;
      compScoreDisplay.innerHTML = computerScore;
      result.innerHTML = `${playerName} is Batting and Computer is Bowling`;
    }

    //If player choose the same no as player and player score is less than computer then computer wins
    if (playerChoice == computerChoice && playerScore < computerScore) {
      result.innerHTML = `Computer Won and ${playerName} Lost`;
      window.location.href = "./result.html";
      playerOut();
    }
    
    //This case is when the computer score and plyaer score are equal
    if (playerScore == computerScore && playerChoice == computerChoice) {
      result.innerHTML = `It's a Tie`;
      window.location.href = "./result.html";
      playerOut();
    }

     //If player crosses the target than player wins
    if (playerScore > computerScore) {
      result.innerHTML = `You Won the Match`;
      window.location.href = "./result.html";
    }
  }
}


//This is to update who is playing and who is bowling
function updateResult() {
  if (turn == 1) {
    result.innerHTML = `${playerName} is Batting and Computer is Bowling`;
  }

  if (turn == 3) {
    result.innerHTML = `Computer is Batting and ${playerName} is Bowling`;
  }
}
updateResult();



/*This is for bat sound*/
function btnClicked() {
  let bat = new Audio("assets/Bat-sound.mp3");
  bat.play();
}



/*This is when player gets out*/
function playerOut() {
  let pout = new Audio("assets/player-out.mp3");
  pout.play();
}



/*This is when computer gets out */
function computerOut() {
  let cout = new Audio("assets/Computer-out.mp3");
  cout.play();
}


/*This is for background */
let bg = new Audio("./assets/Crowd-cheering.mp3");
bg.play();
bg.loop = true;


/*This is for storing values */
function storingScore() {
  localStorage.setItem("playerScore", playerScore);
  localStorage.setItem("computerScore", computerScore);
}
