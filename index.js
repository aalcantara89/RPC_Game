function getComputerChoice (){
    let choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random()*choices.length);
    return choices[choice]
}
function playAround(playerSelection, computerSelection) {
    computerSelection = getComputerChoice().toLowerCase();   
    if (playerSelection === computerSelection) {
        result = "tie";
        computerScore = ++computerScore;
        playerScore = ++playerScore;
        return results.innerText = "It's a tie!";
    }
    else if ((computerSelection.toLowerCase() == "rock" && playerSelection == "scissors") ||
    (computerSelection.toLowerCase() == "scissors" && playerSelection == "paper") ||
    (computerSelection.toLowerCase() == "paper" && playerSelection == "rock")) {
        result = "loss";
        computerScore = ++computerScore;
        return results.innerText = (`You lose!  ${computerSelection} beats ${playerSelection}`);
    }
    
    else {
        result = "win";
        playerScore = ++playerScore;
        return results.innerText = ( `You win! ${playerSelection} beats ${computerSelection}`);

        
    }         
}
function winner() {
    if (playerScore > computerScore) {
        return alert("You won!");
      } else {
       return alert("You lost!");
      }
        
    
}
function game() {
    let playing = prompt("Would you like to play rock, paper, scissors? Type 'yes' to play!");
    if (playing == "yes") {
        btns.forEach(function (btn){
            btn.addEventListener('click', () => {
                playerSelection = btn.innerText.toLowerCase(); // gets the selection from button click text
                results.innerText = "YOU CHOSE " + (playerSelection).toUpperCase();
                playAround(playerSelection, computerSelection); 
                results2.innerText = (`Player Score: ${playerScore}  Computer Score: ${computerScore}`)
                if (playerScore === 5 || computerScore === 5) {
                    winner();
                    
                }           
            })}
        )
    }
    else {
        alert("You don't want to play");
    }
}
function playAgain() {
   let replay = prompt("Would you like to play again? Type 'yes' to play again.");
   if (replay == "yes") {
    window.location.reload();
   }
}

let btns = document.querySelectorAll("button");
let results = document.getElementById("results");
let results2 = document.getElementById("results2");
let computerSelection = getComputerChoice();
let result = "";
let computerScore = 0;
let playerScore = 0;
//let roundResult = results.innerText = (`You lose!  ${computerSelection} beats ${playerSelection}`);
let scores = (`Player Score: ${playerScore}  Computer Score: ${computerScore}`);


//do {   
//    let endMsg = ""; 
//    if (playerScore > computerScore) {
//        endMsg = results.innerText = ("You win!");
//    }
//    else if (playerScore == computerScore) {
//        endMsg = results.innerText = ("You tie!");

//    }
//    else {
//        endMsg = results.innerText = ("You lose!");
//    }        
//} while ((playerScore > 5 || computerScore > 5) );






game();
