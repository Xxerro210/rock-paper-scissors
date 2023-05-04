/* build a "rock, paper, scissors" (rps) game to play in the browser's console window */

// create variables
const playerScoreBoard = document.querySelector('.playerScore');
const computerScoreBoard = document.querySelector('.computerScore');
const throwText = document.querySelector('.throwText');
const submitButton = document.querySelector('.submit')
let playerScore = 0; // players score
let compScore = 0; // computers score
let playerThrow; // records the players throw
let compThrow; // records the computers throw
let newGame; // yes or no
let playerT;

// tell the player the rules of rps/ welcome message
console.log("Welcome to \"Rock, Paper, Scissors\". To win a game you must win 5 rounds, in order to win a round you must decide to play rock, paper, or scissors. Rock crushes scissors, scissors cuts paper, and paper covers rock. There is only 3 possible outcome to each round win, lose, or draw.")

submitButton.addEventListener('click', function (e){
  getPlayerThrow();
});

// create function to get throw from player
function getPlayerThrow() {
  playerT = throwText.value;
  console.log(playerT);
  processPlayerThrow(playerT);
}

function processPlayerThrow(playerT) {
  // accept multiple inputs for the throw
  playerThrow = playerT.toLowerCase();
  if (playerThrow === "r" || playerThrow === "1" || playerThrow === "rock") {
    playerThrow = "rock";
  } else if (playerThrow === "p" || playerThrow === "2" || playerThrow === "paper") { 
    playerThrow = "paper";
  } else if (playerThrow === "s" || playerThrow === "3" || playerThrow === "scissors") {
    playerThrow = "scissors"
  } else {
    return;
  }
  console.log("The player throws " + playerThrow);
  compThrowCheck(playerThrow);
}

// function to get computers throw
function compThrowCheck() {
  // have a random number generator to create the computers rps choice
  let ranNum = Math.floor(Math.random() * 3);
  // assign the random number to the computers throw
  if (ranNum == 0) {
    compThrow = "rock"
  } 
  if (ranNum == 1) { 
    compThrow = "paper" 
  }
  if (ranNum == 2) {
    compThrow = "scissors"
  } 
  console.log("The computer throws " + compThrow);
  decideRound();
}

// compare players choice to computers choice, add points, decide winner
function decideRound() {
  // if tie go again
  if (playerThrow == compThrow){
    console.log("Draw");
    return;
  // player wins 
  } else if (playerThrow == "rock" && compThrow == "scissors"){
    console.log("Player Wins Throw - rock crushes scissors");
    playerScore++;// if the player wins add 1 to score
  } else if (playerThrow == "paper" && compThrow == "rock"){
    console.log("Player Wins Throw - paper covers rock");
    playerScore++;
  } else if (playerThrow == "scissors" && compThrow == "paper"){
    console.log("Player Wins Throw - scissors cut paper");
    playerScore++;
  // Computer Wins
  } else if (compThrow == "rock" && playerThrow == "scissors"){
    console.log("Computer Wins Throw - scissors crushed by rock");
    compScore++;
  } else if (compThrow == "paper" && playerThrow == "rock"){
    console.log("Computer Wins Throw - rock is covered by paper");
    compScore++;
  } else if (compThrow == "scissors" && playerThrow == "paper"){
    console.log("Computer Wins Throw - paper is cut by scissors");
    compScore++;
  } 
  currentScore(playerScore, compScore);
}

// inform player of score
function currentScore(playerScore, compScore) {
  console.log(`The current score is - ${playerScore} player - ${compScore} computer`);
  playerScoreBoard.innerHTML = playerScore;
  computerScoreBoard.innerHTML = compScore;
  checkIfGameOver();
}

function checkIfGameOver() {
  if (compScore == 5){
    console.log("Game Over, you lose");
  } else if (playerScore == 5){
    console.log("Congats, you have won the game.");
  } else {
    return;
  }
  startNewGame();
}

function startNewGame() {
  console.log("Start New Game?");
}
  
  // play again?
  //newGame = prompt("would you like to play again?");
  //if (newGame == "yes"){
  //  rpsGame();
  //} else {
  //  return;
  //}