function getComputerChoice (){
    let choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random()*choices.length);
    return choices[choice]
}
function playAround(playerSelection, computerSelection) {
    
    if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
        return console.log("It's a tie!"), result = "tie";
    }
    if (playerSelection == "rock" && computerSelection != "paper") {
        return console.log( `You win!${playerSelection} beats ${computerSelection}` ),result = "win";
    }
    else {
        return console.log(`You lose!  ${computerSelection} beats ${playerSelection}`),result = "loss";
    }
    if (playerSelection == "paper" && computerSelection != "scissors") {
        return console.log( `You win!${playerSelection} beats ${computerSelection}` ), result = "win";
    }
    else {
        return console.log(`You lose!  ${computerSelection} beats ${playerSelection}`), result = loss;
    }
    if (playerSelection == "scissors" && computerSelection != "rock") {
        return console.log( `You win!${playerSelection} beats ${computerSelection}` ), result = "win";
    }
    else {
        return console.log(`You lose!  ${computerSelection} beats ${playerSelection}`), result = loss;
    }

}
function game() {
    playAround(computerSelection, playerSelection);
    for (let i = 0; i < 5; i++) {
        if (result == "win") {
            playerScore += 1;
        }
        else if (result == "loss") {
            computerScore += 1;
        }
        else {
            playerScore += 1;
            computerScore += 1;
        }
        console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`);
        console.log(`Player Selection: ${playerSelection} Computer Selection: ${computerSelection}`);
    }
    if (playerScore > computerScore) {
        return console.log("You win!")
    }
    else if (playerScore == computerScore) {
        return console.log("You tie!")

    }
    else {
        return console.log("You lose!")
    }

}
let computerSelection = getComputerChoice();
let playerSelection = prompt("rock, paper, or scissors");

let result = ""

let computerScore = 0;
let playerScore = 0;
game();
