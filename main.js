//hide table before the game starts
function hide() {
  document.getElementById("table").style.display = "table";
}

const message = document.querySelector(".message");
const scorePlayer = document.querySelector(".scorePlayer");
const scoreComputer = document.querySelector(".scoreComputer");
const scoreDraw = document.querySelector(".scoreDraw");
const buttons = document.querySelectorAll("button");
const main = document.querySelector(".main");
const logIn = document.querySelector("#logIn");
const input = document.querySelector("#input");
const button = document.querySelector("#button");
let winnerScores = [0, 0, 0];

main.style.display = "none";

//let user add a username
input.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("button").click();
    let value = event.target.value;
    document.getElementById("userName").innerHTML = value;
  }
});

function startGame() {
  main.style.display = "initial";
  logIn.style.display = "none";
  let value = input.value;
  document.getElementById("userName").innerHTML = value;
}

//add event listeners to buttons
buttons.forEach((button) => button.addEventListener("click", playGame));

function playGame(event) {
  //setup player's selection
  let playerSelection = event.target.innerText;

  //display player's selection
  document.getElementById("playerChoice").innerHTML = playerSelection;

  let bgPlayer = document.getElementById("playerChoice");
  if (playerSelection === "Rock") {
    bgPlayer.style.backgroundColor = "teal";
  } else if (playerSelection === "Paper") {
    bgPlayer.style.backgroundColor = "tomato";
  } else {
    bgPlayer.style.backgroundColor = "yellowgreen";
  }

  //setup a random number to select for computer
  //selects a number between 0 and 1
  let computerSelection = Math.random();
  let bgComputer = document.getElementById("computerChoice");

  if (computerSelection < 0.333) {
    computerSelection = "Rock";
    bgComputer.style.backgroundColor = "teal";
  } else if (computerSelection <= 0.666) {
    computerSelection = "Paper";
    bgComputer.style.backgroundColor = "tomato";
  } else {
    computerSelection = "Scissors";
    bgComputer.style.backgroundColor = "yellowgreen";
  }

  document.getElementById("computerChoice").innerHTML = computerSelection;

  //setup a function to compare winners and return result
  let result = checkWinner(playerSelection, computerSelection);

  //output scores to the DOM
  if (result === "Player") {
    result += " wins!";
    winnerScores[0]++;
  } else if (result === "Computer") {
    result += " wins!";
    winnerScores[1]++;
  } else {
    result;
    winnerScores[2]++;
  }

  //output result
  document.getElementById("message").innerHTML = result;

  //output score player
  scorePlayer.innerHTML = winnerScores[0];

  //output score player
  scoreComputer.innerHTML = winnerScores[1];

  //draw
  scoreDraw.innerHTML = winnerScores[2];
}
function checkWinner(player, computer) {
  if (player === computer) {
    return "Draw";
  }

  if (player === "Rock") {
    if (computer === "Paper") {
      return "Computer";
    } else {
      return "Player";
    }
  }

  if (player === "Paper") {
    if (computer === "Scissors") {
      return "Computer";
    } else {
      return "Player";
    }
  }

  if (player === "Scissors") {
    if (computer === "Rock") {
      return "Computer";
    } else {
      return "Player";
    }
  }
}
