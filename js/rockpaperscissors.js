let playerMove = "",
    computerMove = "",
    roundResult = "";
let playerScore = 0,
    computerScore = 0,
    roundNumber = 0;
let gameOver = false;

const buttonList = document.querySelectorAll(".moveButton");
const resetButton = document.querySelector(".resetButton");
const playerScoreDOM = document.querySelector(".playerScore");
const computerScoreDOM = document.querySelector(".computerScore");
const playerMoveDOM = document.querySelector(".playerMove");
const computerMoveDOM = document.querySelector(".computerMove");
const resultsDOM = document.querySelector(".results");

buttonList.forEach(button => {
    button.addEventListener("mouseup", playRound);
});

resetButton.addEventListener("mouseup", resetGame);

function computerPlay() {
    // Set choice to a random number from 0 - 2.
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getResult() {
    switch (playerMove) {
        case "rock": {
            if (computerMove === "rock") {
                return "draw";
            } else if (computerMove === "paper") {
                return "lose";
            } else if (computerMove === "scissors") {
                return "win";
            }
        }
        case "paper": {
            if (computerMove === "rock") {
                return "win";
            } else if (computerMove === "paper") {
                return "draw";
            } else if (computerMove === "scissors") {
                return "lose";
            }
        }
        case "scissors": {
            if (computerMove === "rock") {
                return "lose";
            } else if (computerMove === "paper") {
                return "win";
            } else if (computerMove === "scissors") {
                return "draw";
            }
        }
    }
}

function updateDOM() {
    const winMsg = `Yay, you win! ${playerMove} beats ${computerMove}!`;
    const loseMsg = `Oh no, you lost! ${computerMove} beats ${playerMove}!`;
    const drawMsg = `Draw! You both chose ${playerMove}!`;

    let resultMsg = "";

    playerScoreDOM.textContent = `Player score: ${playerScore}`;
    computerScoreDOM.textContent = `Computer score: ${computerScore}`;

    if (gameOver === true) {
        if (playerScore > computerScore) {
            resultMsg = "win";
        } else {
            resultMsg = "lose";
        }
        resultsDOM.textContent = `Game over, you ${resultMsg}! Click new game to play again!`;
    } else if (roundResult === "win") {
        resultsDOM.textContent = winMsg;
    } else if (roundResult === "lose") {
        resultsDOM.textContent = loseMsg;
    } else {
        resultsDOM.textContent = drawMsg;
    }
}

function resetDOM() {
    playerScoreDOM.textContent = "";
    computerScoreDOM.textContent = "";
    resultsDOM.textContent = "Choose a move to start.";
}

function playRound(event) {
    if (gameOver === true) return;

    playerMove = event.target.getAttribute("id");

    if (!playerMove) return;

    computerMove = computerPlay();

    roundResult = getResult();

    console.log(`Player: ${playerMove}, Computer : ${computerMove}`);

    if (roundResult === "win") {
        console.log("win");
        playerScore++;
        if (playerScore >= 5) {
            gameOver = true;
        }
    } else if (roundResult === "lose") {
        console.log("lose");
        computerScore++;
        if (computerScore >= 5) {
            gameOver = true;
        }
    } else {
        console.log("draw");
    }

    roundNumber++;
    updateDOM();
}

function resetGame() {
    playerMove = "";
    computerMove = "";
    roundResult = "";
    playerScore = 0;
    computerScore = 0;
    roundNumber = 0;
    gameOver = false;
    resetDOM();
}
