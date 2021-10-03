const eachOption = document.querySelectorAll("img");
const displayPlayerSelection = document.querySelector(".player-selection");
const displayComputerSelection = document.querySelector(".computer-selection");

const playerFunction = (e) => {
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
};

const checkWinner = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "Draw";
  }

  // Scissors cuts Paper
  // Scissors decapitates Lizard
  if (playerSelection === "paper" || playerSelection === "lizard") {
    return computerSelection === "scissors" ? "Computer" : "Player";
  }

  // Paper covers Rock
  // Paper disproves Spock
  if (playerSelection === "rock" || playerSelection === "spock") {
    return computerSelection === "paper" ? "Computer" : "Player";
  }

  // Rock crushes Lizard
  // (and as it always has) Rock crushes Scissors
  if (playerSelection === "scissors" || playerSelection === "lizard") {
    return computerSelection === "rock" ? "Computer" : "Player";
  }

  // Lizard poisons Spock
  // Lizard eats Paper
  if (playerSelection === "spock" || playerSelection === "paper") {
    return computerSelection === "lizard" ? "Computer" : "Player";
  }

  // Spock smashes Scissors
  // Spock vaporizes Rock
  if (playerSelection === "scissors" || playerSelection === "rock") {
    return computerSelection === "spock" ? "Computer" : "Player";
  }
};

const displayResults = (result) => {
  console.log(result);
};
