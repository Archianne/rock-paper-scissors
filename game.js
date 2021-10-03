const eachOption = document.querySelectorAll("img");
const displayPlayerSelection = document.querySelector(".player-selection");
const displayComputerSelection = document.querySelector(".computer-selection");

const playGame = (e) => {
  let playerSelection = e.target.getAttribute("data-value");
  console.log(playerSelection);

  displayPlayerSelection.innerHTML = playerSelection;
};

eachOption.forEach((option) => option.addEventListener("click", playGame));
