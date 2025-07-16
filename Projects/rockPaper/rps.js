const choices = ["rock", "paper", "scissors"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const tiedGameDisplay = document.getElementById("tiedGameDisplay");

let playerScore = 0;
let computerScore = 0;
let tiedScore = 0;


function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!"
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOST!";
                break;

            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOST!";
                break;

            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOST!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;
    
    resultDisplay.classList.remove("greenText", "redText", "blackText");

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;

        case "YOU LOST!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;

        case "IT'S A TIE!":
            resultDisplay.classList.add("blackText");
            tiedScore++;
            tiedGameDisplay.textContent = tiedScore;
            break;
    }
}