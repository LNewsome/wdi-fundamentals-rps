////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
   var getInput = function() {
   console.log("Please choose either 'rock', 'paper', or 'scissors'.");
   var answer = prompt();
   return answer;
   }
}

var randomPlay = function() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return 'scissors';
    } else if (randomNumber < 0.66) {
        return 'rock';
    } else {
        return 'paper';
    }
};

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
   var getInput = function() {
   console.log("Please choose either 'rock', 'paper', or 'scissors'.");
   var answer = prompt();
   return answer;
   }
}

var random = function() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return 'paper';
    } else if (randomNumber < 0.66) {
        return 'scissors';
    } else {
        return 'rock';
    }
};

function getWinner(playerMove,computerMove) {

    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
}
  if (playerMove === computerMove) {
    winner = "Tie";
  }
  else if (PlayerMove === "Paper"){
    if (ComputerMove === "Scissors") {
      winner = "Computer";
    }
    }
  else if (PlayerMove === "Scissors") {
    if (ComputerMove === "Rock") {
      winner = " Computer";
    }
    }
  else if (PlayerMove === "Rock") {
    if (ComputerMove === "Paper") {
      winner = "Computer";
    }
    }
  else if (PlayerMove === "Scissors"){
    if (ComputerMove === "Paper") {
      winner = "Player";
    }
    }
  else if (PlayerMove === "Rock"){
    if (ComputerMove === "Scissors") {
      winner = "Player";
      }
  else if (PlayerMove === "Paper"){
    if (ComputerMove === "Rock"){
      winner = "Player";
    }
    return winner;
  }

{
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
}
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while ((player<5) && (computer < 5)) {
    }
        var player = getPlayerMove (getInput());
        console.log ('Player plays' + playerMove);

        var computer = getComputerMove (getInput());
        console.log ('Computer plays' + computerMove);

        var result = getWinner (playerMove, computerMove);
        console.log ('The Winner is' + result);

          if (results === "Player") {
            player +=1;
            console.log ("The Player Wins!");
          }
          else if (results === "Computer") {
            computer +=1;
            console.log ("The Computer Wins!");
          }
          else if (results === "Tie") {
            console.log ("It was a tie!");
          }
    }
    return [playerWins, computerWins];
