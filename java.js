let computerChoice;
const getComputerChoice = function () {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = "Rock";
  } else if (randomNumber === 2) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }
};

let playerChoice;
const buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    playerChoice = button.textContent;
    getComputerChoice();
    playGame()
  });
});



let userWins = 0;
let computerWins = 0;

const resultDiv = document.getElementById("result")
const userWinTracker = document.getElementById("userWinTracker")
const computerWinTracker = document.getElementById("computerWinTracker")

const playRound = function (playerChoice,computerChoice) {
  console.log(`Player choice: ${playerChoice}`);
  console.log(`Computer choice: ${computerChoice}`);
  if (playerChoice === "Rock" && computerChoice === "Scissors") {
    userWins++;
    resultDiv.innerHTML = `You win! ${playerChoice} beats ${computerChoice}`;
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    userWins++;
    resultDiv.innerHTML = `You win! ${playerChoice} beats ${computerChoice}`;
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    userWins++;
    resultDiv.innerHTML = `You win! ${playerChoice} beats ${computerChoice}`;
  } else if (playerChoice === computerChoice) {
    resultDiv.innerHTML = "It's a tie"
  } else {
    computerWins++;
   resultDiv.innerHTML = `Computer wins! ${computerChoice} beats ${playerChoice}`;
  }
  userWinTracker.innerHTML = (`User wins: ${userWins}`);
  computerWinTracker.innerHTML = (`Computer wins: ${computerWins}`);
  }

let round = 0;
const playGame = function() {
  round++;
  getComputerChoice();
  playRound(playerChoice, computerChoice);

  if (userWins === 3) {
    resultDiv.innerHTML = "You win the game!";
  } else if (computerWins === 3) {
    resultDiv.innerHTML = "Computer wins the game!";
  } else if (round === 5) {
    if (userWins > computerWins) {
      resultDiv.innerHTML = "You win the game!";
    } else if (userWins < computerWins) {
      resultDiv.innerHTML = "Computer wins the game!";
    } else {
      resultDiv.innerHTML = "The game is a tie.";
    }
  }
}




