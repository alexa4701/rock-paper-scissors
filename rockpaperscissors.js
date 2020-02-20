/*  
    Function to play a single round of the game
    playerSelection - string
    computerSelection - string
    returns the winner of the round as a string
*/

function round(playerSelection, computerSelection) {
    const roundWinMsg = `You win! ${playerSelection} beats ${computerSelection}!`;
    const roundLoseMsg = `You lose! ${computerSelection} beats ${playerSelection}`;
    const roundDrawMsg = `Draw! You both chose ${playerSelection}`;

    switch (playerSelection) {
        case "rock": {
            if (computerSelection === "rock") {
                return roundDrawMsg;
            } else if (computerSelection === "paper") {
                return roundLoseMsg;
            } else if (computerSelection === "scissors") {
                return roundWinMsg;
            }
        }
        case "paper": {
            if (computerSelection === "rock") {
                return roundWinMsg;
            } else if (computerSelection === "paper") {
                return roundDrawMsg;
            } else if (computerSelection === "scissors") {
                return roundLoseMsg;
            }
        }
        case "scissors": {
            if (computerSelection === "rock") {
                return roundLoseMsg;
            } else if (computerSelection === "paper") {
                return roundWinMsg;
            } else if (computerSelection === "scissors") {
                return roundDrawMsg;
            }
        }
    }
}

function computerPlay() {
    // Set choice to a random number from 0 - 2.
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            // If choice = 0, return "rock"
            return "rock";
        case 1:
            // If choice = 1, return "paper"
            return "paper";
        case 2:
            // If choice = 0, return "scissors"
            return "scissors";
    }
}

// Function to prompt and validate user input
function play() {
    let choice = prompt("Rock, paper, scissors?").toLowerCase();

    do {
        if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
            valid = false;
            choice = prompt(
                "Sorry, what was that? Rock, paper, scissors?"
            ).toLowerCase();
        } else {
            valid = true;
        }
    } while (!valid);

    return choice;
}

function game() {
    const rounds = 5;
    const gameWinMsg = `Congrats, you won the game!`;
    const gameLoseMsg = `Sorry, you didn't win! :(`;

    let playerSelection = "",
        computerSelection = "",
        result = "";
    let playerWins = 0;

    for (let counter = 0; counter < rounds; counter++) {
        playerSelection = play();
        computerSelection = computerPlay();
        result = round(playerSelection, computerSelection);
        if (result.indexOf("win") !== -1) {
            playerWins++;
        }
        console.log(result);
        alert(result);
    }

    if (playerWins >= Math.ceil(rounds / 2)) {
        console.log(gameWinMsg);
    } else {
        console.log(gameLoseMsg);
    }
}

game();
