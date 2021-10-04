const results = document.querySelector(".results");
const eachOption = document.querySelectorAll("img");
const displayPlayerSelection = document.querySelector(".player-selection");
const displayComputerSelection = document.querySelector(".computer-selection");
const displayPlayerScore = document.querySelector(".player-score");
const displayComputerScore = document.querySelector(".computer-score");
const displayMessage = document.querySelector(".show-message");

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

const playerFunction = (e) => {
  results.classList.remove("hide");
  let playerSelection = e.target.getAttribute("data-value");

  displayPlayerSelection.innerHTML = `<img src="./img/${playerSelection}.svg" alt="${playerSelection}" />`;
  computerFuntion(playerSelection);
};

eachOption.forEach((option) =>
  option.addEventListener("click", playerFunction)
);

const computerFuntion = (playerSelection) => {
  let computerSelection = Math.floor(Math.random() * 5 + 1);

  computerSelection === 1
    ? (computerSelection = "rock")
    : computerSelection === 2
    ? (computerSelection = "paper")
    : computerSelection === 3
    ? (computerSelection = "scissors")
    : computerSelection === 4
    ? (computerSelection = "lizard")
    : (computerSelection = "spock");

  displayComputerSelection.innerHTML = `<img src="./img/${computerSelection}.svg" alt="${computerSelection}" />`;
  let result = checkWinner(playerSelection, computerSelection);
  displayResults(result);
  showMessage(playerSelection, computerSelection, result);
};

const checkWinner = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "Draw";
  }

  if (playerSelection === "rock") {
    return computerSelection === "paper" || computerSelection === "spock"
      ? "Computer"
      : "Player";
  }

  if (playerSelection === "paper") {
    return computerSelection === "scissors" || computerSelection === "lizard"
      ? "Computer"
      : "Player";
  }

  if (playerSelection === "scissors") {
    return computerSelection === "rock" || computerSelection === "spock"
      ? "Computer"
      : "Player";
  }

  if (playerSelection === "lizard") {
    return computerSelection === "scissors" || computerSelection === "rock"
      ? "Computer"
      : "Player";
  }

  if (playerSelection === "spock") {
    return computerSelection === "paper" || computerSelection === "lizard"
      ? "Computer"
      : "Player";
  }
};

const showMessage = (playerSelection, computerSelection, result) => {
  (playerSelection === "scissors" && computerSelection === "paper") ||
  (computerSelection === "scissors" && playerSelection === "paper")
    ? (displayMessage.innerHTML = `Scissors cuts Paper. ${result} wins!`)
    : (playerSelection === "scissors" && computerSelection === "lizard") ||
      (computerSelection === "scissors" && playerSelection === "lizard")
    ? (displayMessage.innerHTML = `Scissors decapitates Lizard. ${result} wins!`)
    : (playerSelection === "paper" && computerSelection === "rock") ||
      (computerSelection === "paper" && playerSelection === "rock")
    ? (displayMessage.innerHTML = `Paper covers Rock. ${result} wins!`)
    : (playerSelection === "paper" && computerSelection === "spock") ||
      (computerSelection === "paper" && playerSelection === "spock")
    ? (displayMessage.innerHTML = `Paper disproves Spock. ${result} wins!`)
    : (playerSelection === "rock" && computerSelection === "lizard") ||
      (computerSelection === "rock" && playerSelection === "lizard")
    ? (displayMessage.innerHTML = `Rock crushes Lizard. ${result} wins!`)
    : (playerSelection === "rock" && computerSelection === "scissors") ||
      (computerSelection === "rock" && playerSelection === "scissors")
    ? (displayMessage.innerHTML = `Rock crushes Scissors. ${result} wins!`)
    : (playerSelection === "lizard" && computerSelection === "spock") ||
      (computerSelection === "lizard" && playerSelection === "spock")
    ? (displayMessage.innerHTML = `Lizard poisons Spock. ${result} wins!`)
    : (playerSelection === "lizard" && computerSelection === "paper") ||
      (computerSelection === "lizard" && playerSelection === "paper")
    ? (displayMessage.innerHTML = `Lizard eats Paper. ${result} wins!`)
    : (playerSelection === "spock" && computerSelection === "scissors") ||
      (computerSelection === "spock" && playerSelection === "scissors")
    ? (displayMessage.innerHTML = `Spock smashes Scissors. ${result} wins!`)
    : (playerSelection === "spock" && computerSelection === "rock") ||
      (computerSelection === "spock" && playerSelection === "rock")
    ? (displayMessage.innerHTML = `Spock vaporizes Rock. ${result} wins!`)
    : (displayMessage.innerHTML = "Nothing happens");

  console.log(playerSelection, computerSelection);
};

const displayResults = (result) => {
  result === "Player"
    ? playerScore++
    : result === "Computer"
    ? computerScore++
    : drawScore++;

  displayPlayerScore.innerHTML = playerScore;
  displayComputerScore.innerHTML = computerScore;
};
