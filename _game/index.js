const username = window.localStorage.getItem("username");

const option = document.querySelectorAll(".option");

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const lizard = document.querySelector(".lizard");
const spock = document.querySelector(".spock");
const playerChoice = document.querySelector(".player-choice");
const computerChoice = document.querySelector(".computer-choice");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const playerOptions = document.querySelector(".player-options");

console.log(username);

const getValue = (e) => {
    console.log(this.getAttribute("data-value"));
};

// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock
// (and as it always has) Rock crushes Scissors
