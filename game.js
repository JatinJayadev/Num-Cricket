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

let playerScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;
let turn = Number(localStorage.getItem("turn"));

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
  if (turn == 1) {
    if (playerChoice != computerChoice) {
      playerScore += playerChoice;
      playerScoreDisplay.innerHTML = playerScore;
      compScoreDisplay.innerHTML = computerScore;
    }

    if (playerChoice == computerChoice) {
      turn = 2;
      console.log("User Out");
      result.innerHTML = `You are out !! Computer's Turn`;
      playerOut();
    }
  } else if (turn == 2) {
    if (computerChoice != playerChoice) {
      computerScore += computerChoice;
      playerScoreDisplay.innerHTML = playerScore;
      compScoreDisplay.innerHTML = computerScore;
      result.innerHTML = `Computer is Batting and ${playerName} is Bowling`;
    }

    if (computerChoice == playerChoice && computerScore < playerScore) {
      console.log("Player won and Computer Lost");
      result.innerHTML = `${playerName} won and Computer Lost`;
      window.location.href = "./result.html";
      computerOut();
    }

    if (computerScore == playerScore && computerChoice == playerChoice) {
      console.log("It's a Tie");
      result.innerHTML = `It's a Tie`;
      window.location.href = "./result.html";
      computerOut();
    }

    if (computerScore > playerScore) {
      console.log("Computer Won");
      result.innerHTML = `Computer Won`;
      window.location.href = "./result.html";
    }
  }

  if (turn == 3) {
    if (computerChoice != playerChoice) {
      computerScore += computerChoice;
      playerScoreDisplay.innerHTML = playerScore;
      compScoreDisplay.innerHTML = computerScore;
    }

    if (computerChoice == playerChoice) {
      turn = 4;
      console.log("Computer Out");
      result.innerHTML = `Computer is out !! It's Your Turn`;
      computerOut();
    }
  } else if (turn == 4) {
    if (playerChoice != computerChoice) {
      playerScore += playerChoice;
      playerScoreDisplay.innerHTML = playerScore;
      compScoreDisplay.innerHTML = computerScore;
      result.innerHTML = `${playerName} is Batting and Computer is Bowling`;
    }

    if (playerChoice == computerChoice && playerScore < computerScore) {
      console.log("COmputer Won and Player Lost");
      result.innerHTML = `Computer Won and ${playerName} Lost`;
      window.location.href = "./result.html";
      playerOut();
    }

    if (playerScore == computerScore && playerChoice == computerChoice) {
      console.log("It's a Tie");
      result.innerHTML = `It's a Tie`;
      window.location.href = "./result.html";
      playerOut();
    }

    if (playerScore > computerScore) {
      console.log("Player Won");
      result.innerHTML = `You Won the Match`;
      window.location.href = "./result.html";
    }
  }
}

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
let bg = new Audio("./assets/page-2-background.mp3");
bg.play();
bg.loop = true;

/*This is for storing values */
function storingScore() {
  localStorage.setItem("playerScore", playerScore);
  localStorage.setItem("computerScore", computerScore);
}
