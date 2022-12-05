let computerSelection = 0;
let playerSelection = 0
let result;

function computerPlay() {
    let words = ["rock", "paper", "scissors"];
    return words[Math.floor(Math.random() * words.length)];
}

function playerPlay() {
    prompt(`Round ${i + 1}: Choose Rock, Paper, or Scissors?`);
    let player = playerSelection.toLowerCase();
    player = player.trim();
}

function playRound(playerSelection, computerSelection) {
    let computer = computerSelection;
    let player = playerSelection;
    
    console.log("player:" + player + " and computer: " + computer);
    
    if (player === "rock") {
        if (computer === "rock") {
            return ["Draw", 2];
        }
        else if (computer === "paper") {
            return ["You Lose! Paper beats Rock", 0];
        }
        else if (computer === "scissors") {
            return ["You Win! Rock beats Scissors", 1];
        }
    }
    if (player === "paper") {
        if (computer === "rock") {
            return ["You Win! Paper beats Rock", 1];
        }
        else if (computer === "paper") {
            return ["Draw", 2];
        }
        else if (computer === "scissors") {
            return ["You lose! Scissors beats Paper", 0];
        }
    }
    if (player === "scissors") {
        if (computer === "rock") {
            return ["You Lose! Rock beats Scissors", 0];
        }
        else if (computer === "paper") {
            return ["You Win! Scissors beats Paper", 1];
        }
        else if (computer === "scissors") {
            return ["Draw", 2];
        }
    }
    else {
        return -1;
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;

    console.log("You have 5 rounds" + "\n" + "========================================================");

    for (let i = 0; i < 5; i++) {
        computerSelection = computerPlay();
        playerSelection = playerPlay();
        if (playerSelection !== null) {
            result = playRound(playerSelection, computerSelection);
        }
        else {
            console.log("You quit the game");
            break;
        }
        if (result == -1) {
            i--;
            console.log("Try again with the correct input! You didnt lost your round... Choose one of these Rock, Paper, or Scissors" + "\n" 
            + "========================================================");
        }
        else {
            console.log(result[0]);
            if (result[1] == 0) {
                computerScore += 1;
                console.log(`Computer earned 1 point from round ${i + 1}`);
            }
            if (result[1] == 1) {
                playerScore += 1;
                console.log(`You earned 1 point from round ${i + 1}`);
            }
            if (result[1] == 2) {
                console.log(`You draw from round ${i + 1}`);
            }
        }
        if(playerScore == 3 || computerScore == 3){
            break;
        }
    }

    if(result != null){
        console.log(`${result[0]} \nYour final score is: ${playerScore} /5 \n========================================================`);
        if (playerScore == computerScore) {
            console.log("Finished!" + "\n" + "It's a tie!");
        }
        else if (playerScore >= computerScore) {
            console.log("Finished!" + "\n" + "Congratulations! WINNER!");
        }
        else {
            console.log("Finished!" + "\n" + "You lost. Better luck next time!");
        }
    }
}

game();