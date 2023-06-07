var choices = ["✊", "✋", "✌"];
var computerPoint = 0;
var playerPoint = 0;
var computerScore = document.querySelector('#computerScore');
var playerScore = document.querySelector('#playerScore');
var scoreInfo = document.querySelector('#scoreInfo');
var scoreMessage = document.querySelector('#scoreMessage');
var computerSign = document.querySelector('#computerSign');
var playerSign = document.querySelector('#playerSign');
var nameOfComputerChoice = '';
var nameOfPlayerChoice = '';

var resultModal = document.querySelector('#resultModal');
var resultMessage = document.querySelector('#resultMessage');
var restartButton = document.querySelector('#restartButton');

restartButton.addEventListener('click', resetGame);

function getComputerChoice() {
    var randomIndex = Math.floor(Math.random() * choices.length);
    var randomChoice = choices[randomIndex];
    computerSign.innerHTML = randomChoice;
    named();
    play();
}

function named() {
    if (computerSign.innerHTML === "✊") {
        nameOfComputerChoice = 'Rock';
    } else if (computerSign.innerHTML === "✋") {
        nameOfComputerChoice = 'Paper';
    } else {
        nameOfComputerChoice = 'Scissors';
    }
    if (playerSign.innerHTML === "✊") {
        nameOfPlayerChoice = 'Rock';
    } else if (playerSign.innerHTML === "✋") {
        nameOfPlayerChoice = 'Paper';
    } else {
        nameOfPlayerChoice = 'Scissors';
    }
}

function play() {
    if (nameOfComputerChoice === nameOfPlayerChoice) {
        scoreInfo.innerHTML = "It's a tie!";
        scoreMessage.innerHTML = nameOfComputerChoice + " ties with " + nameOfPlayerChoice.toLowerCase();
    } else if ((nameOfPlayerChoice === 'Rock' && nameOfComputerChoice === 'Scissors') || (nameOfPlayerChoice === 'Scissors' && nameOfComputerChoice === 'Paper') || (nameOfPlayerChoice === 'Paper' && nameOfComputerChoice === 'Rock')) {
        scoreInfo.innerHTML = "You won!";
        scoreMessage.innerHTML = nameOfPlayerChoice + ' beats ' + nameOfComputerChoice.toLowerCase();
        playerPoint++;
    } else {
        scoreInfo.innerHTML = "You lost...";
        scoreMessage.innerHTML = nameOfPlayerChoice + ' is beaten by ' + nameOfComputerChoice.toLowerCase();
        computerPoint++;
    }
    computerScore.innerHTML = "Computer: " + computerPoint;
    playerScore.innerHTML = "Player: " + playerPoint;

    if (playerPoint === 5) {
        showModal("Congratulations! You won the game!");
    } else if (computerPoint === 5) {
        showModal("Sorry! You lost the game.");
    }
}

function selectChoice(index) {
    playerSign.innerHTML = choices[index];
    getComputerChoice();
}

function resetGame() {
    computerPoint = 0;
    playerPoint = 0;
    computerScore.innerHTML = "Computer: " + computerPoint;
    playerScore.innerHTML = "Player: " + playerPoint;
    scoreInfo.innerHTML = "";
    scoreMessage.innerHTML = "";
    computerSign.innerHTML = "❔";
    playerSign.innerHTML = "❔";
    closeModal();
}

function showModal(message) {
    resultMessage.innerHTML = message;
    resultModal.style.display = "block";
}

function closeModal() {
    resultModal.style.display = "none";
}


var gameHistory = document.getElementById('gameHistory');

function addToHistory(result) {
  var li = document.createElement('li');
  li.textContent = result;
  gameHistory.appendChild(li);
}



