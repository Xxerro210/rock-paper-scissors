/* build a "rock, paper, scissors" (rps) game to play in the browser's console window */
function rpsGame(){
// tell the player the rules of rps/ welcome message
console.log("Welcome to \"Rock, Paper, Scissors\". To win a game you must win 5 rounds, in order to win a round you must decide to play rock, paper, or scissors. Rock crushes scissors, scissors cuts paper, and paper covers rock. There is only 3 possible outcome to each round win, lose, or draw.")
  // create variables
  let playerScore = 0; // players score
  let compScore = 0; // computers score
  let playerThrow; // records the players throw
  let compThrow; // records the computers throw
  let newGame; // yes or no
  // play a round of rps
  function playRound(){
    // inform player of score
    console.log("The current score is - " + playerScore + " player - " + compScore + " computer")
    // create function to get throw from player
    function getPlayerThrow(){
      // ask the player to type "rock, paper, or scissors" and assign it to a variable.
      playerThrow = prompt("Please type \"rock, paper, or scissors\".");
      // accept multiple inputs for the throw
      playerThrow = playerThrow.toLowerCase();
      if (playerThrow == "r" || playerThrow == "1" || playerThrow == "rock") {
        return playerThrow = "rock";
      } else if (playerThrow == "p" || playerThrow == "2" || playerThrow == "paper") { 
        return playerThrow = "paper";
      } else if (playerThrow == "s" || playerThrow == "3" || playerThrow == "scissors") {
        return playerThrow = "scissors"
      } else {
        getPlayerThrow();
      }
      console.log("The player throws " + playerThrow);
    }
    // function to get computers throw
    function compThrowCheck(){
      // have a random number generator to create the computers rps choice
      let ranNum = Math.floor(Math.random() * 3);
      // assign the random number to the computers throw
      if (ranNum == 0){
        compThrow = "rock"
      } else if (ranNum == 1){
        compThrow = "paper"
      } else if (ranNum == 2){
        compThrow = "scissors"
      } else {
        compThrowCheck();
      }
      console.log("The computer throws " + compThrow);
    }
    // compare players choice to computers choice, add points, decide winner
    function decideRound(){
      // if tie go again
      if (playerThrow == compThrow){
        console.log("Draw")
        playRound();
      // player wins 
      } else if (playerThrow == "rock" && compThrow == "scissors"){
          console.log("rock crushes scissors");
          playerScore++; // if the player wins add 1 to score
      } else if (playerThrow == "paper" && compThrow == "rock"){
          console.log("paper covers rock");
          playerScore++;
      } else if (playerThrow == "scissors" && compThrow == "paper"){
          console.log("scissors cut paper");
          playerScore++;
      // Computer Wins
      } else if (compThrow == "rock" && playerThrow == "scissors"){
          console.log("scissors crushed by rock");
          compScore++;
      } else if (compThrow == "paper" && playerThrow == "rock"){
          console.log("rock is covered by paper");
          compScore++;
      } else if (compThrow == "scissors" && playerThrow == "paper"){
          console.log("paper is cut by scissors");
          compScore++;
      } 
    }
    
    function checkIfGameOver(){
      if (compScore == 5){
        console.log("Game Over, you lose")
        return;
      } else if (playerScore == 5){
        console.log("Congats, you have won the game.")
        return;
      } else {
        playRound();
      }
    }
    // call for throws and compare
    getPlayerThrow();
    compThrowCheck();
    decideRound();
    checkIfGameOver();
  }// closing bracket for playRound
  playRound();
  // play again?
  newGame = prompt("would you like to play again?");
  if (newGame == "yes"){
    rpsGame();
  } else {
    return;
  }
}
rpsGame();