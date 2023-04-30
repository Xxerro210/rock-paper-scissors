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
          function playerThrowCheck(){
            // ask the player to type "rock, paper, or scissors" and assign it to a variable.
            playerThrow = prompt("Please type \"rock, paper, or scissors\"");
            // check to make sure the throw is valid, if not prompt for throw again.
            if (playerThrow == "rock" || playerThrow == "paper" || playerThrow == "scissors"){
              console.log("The player throws " + playerThrow);
              return playerThrow;
            } else {
              playerThrowCheck();
            }
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
              console.log("rock crushes scissors")
              playerScore++; // if the player wins add 1 to score
              if (playerScore < 5){
                playRound(); // keep playing if player does not have 5 points
              } else {
                console.log("Congats, you have won the game.")// you win with 5 points
                return;
              }
            } else if (playerThrow == "paper" && compThrow == "rock"){
              console.log("paper covers rock")
              playerScore++;
              if (playerScore < 5){
                playRound();
              } else {
                console.log("Congats, you have won the game.")
                return;
              }
            } else if (playerThrow == "scissors" && compThrow == "paper"){
              console.log("scissors cut paper")
              playerScore++;
              if (playerScore < 5){
                playRound();
              } else {
                console.log("Congats, you have won the game.")
                return;
              }
            // Computer Wins
            } else if (compThrow == "rock" && playerThrow == "scissors"){
              console.log("scissors crushed by rock")
              compScore++;
              if (compScore < 5){
                playRound();
              } else {
                console.log("Game Over, you lose")
                return;
              }
            } else if (compThrow == "paper" && playerThrow == "rock"){
              console.log("rock is covered by paper")
              compScore++;
              if (compScore < 5){
                playRound();
              } else {
                console.log("Game Over, you lose")
                return;
              }
            } else if (compThrow == "scissors" && playerThrow == "paper"){
              console.log("paper is cut by scissors")
              compScore++;
              if (compScore < 5){
                playRound();
              } else {
                console.log("Game Over, you lose")
                return;
              }
            } else {
                console.log("you should not see this error")
            }
          }
          // call for throws and compare
          playerThrowCheck();
          compThrowCheck();
          decideRound();
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