let playerMove = "",
    computerMove = "",
    roundResult = "";
let playerScore = 0,
    computerScore = 0;
let gameOver = false;

const buttonListDOM = document.querySelectorAll(".moveButton");
const resetButtonDOM = document.querySelector(".resetButton");
const playerScoreDOM = document.querySelector(".playerScore");
const computerScoreDOM = document.querySelector(".computerScore");
const playerMoveImgDOM = document.querySelector(".playerMoveImg");
const computerMoveImgDOM = document.querySelector(".computerMoveImg");
const playerMoveDescDOM = document.querySelector("#playerMoveDesc");
const computerMoveDescDOM = document.querySelector("#computerMoveDesc");
const resultsDOM = document.querySelector(".results");

buttonListDOM.forEach(button => {
    button.addEventListener("mouseup", playRound);
});

resetButtonDOM.addEventListener("mouseup", resetGame);

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
    const winMsg = `Yay, you win! ${playerMove[0].toUpperCase() +
        playerMove.slice(1)} beats ${computerMove}!`;
    const loseMsg = `Oh no, you lost! ${computerMove[0].toUpperCase() +
        computerMove.slice(1)} beats ${playerMove}!`;
    const drawMsg = `Draw! You both chose ${playerMove}!`;

    let resultMsg = "";

    // Update the scores text
    playerScoreDOM.textContent = playerScore;
    computerScoreDOM.textContent = computerScore;

    // Update the computer and player's moves
    playerMoveImgDOM.setAttribute("src", `img/${playerMove}.png`);
    playerMoveImgDOM.setAttribute("alt", playerMove);
    playerMoveDescDOM.textContent = `You chose: ${playerMove[0].toUpperCase() +
        playerMove.slice(1)}!`;
    computerMoveImgDOM.setAttribute("src", `img/${computerMove}.png`);
    computerMoveImgDOM.setAttribute("alt", computerMove);
    computerMoveDescDOM.textContent = `Computer chose: ${computerMove[0].toUpperCase() +
        computerMove.slice(1)}!`;

    // Update the results text
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
    playerScoreDOM.textContent = "0";
    computerScoreDOM.textContent = "0";
    playerMoveImgDOM.setAttribute("src", `img/person.png`);
    playerMoveImgDOM.setAttribute("alt", "person icon");
    playerMoveDescDOM.textContent = `You`;
    computerMoveImgDOM.setAttribute("src", `img/computer.png`);
    computerMoveImgDOM.setAttribute("alt", "computer");
    computerMoveDescDOM.textContent = `Computer`;
    resultsDOM.textContent = "Choose a move to start.";
}

function playRound(event) {
    if (gameOver === true) return;

    playerMove = event.target.getAttribute("id");

    if (!playerMove) {
        playerMove = event.target.parentNode.getAttribute("id");
    }

    computerMove = computerPlay();

    roundResult = getResult();

    if (roundResult === "win") {
        playerScore++;
        if (playerScore >= 5) {
            gameOver = true;
        }
    } else if (roundResult === "lose") {
        computerScore++;
        if (computerScore >= 5) {
            gameOver = true;
        }
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
    gameOver = false;
    resetDOM();
}
