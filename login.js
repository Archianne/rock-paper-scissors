const loginPage = document.querySelector("#login");
const gamePage = document.querySelector("#game");
const input = document.querySelector(".input");
const howtoButton = document.querySelector(".howto-button");
const box = document.querySelector(".box");
const form = document.querySelector("#form");
const closeButton = document.querySelector(".x-button");
const title = document.querySelector("#title");

const toggleDisplay = () => {
  box.classList.toggle("hide");
  form.classList.toggle("hide");
  title.classList.toggle("hide");
};

const saveUsername = () => {
  window.localStorage.setItem("username", input.value);
  loginPage.classList.add("hide");
  gamePage.classList.remove("hide");
};

form.addEventListener("submit", (e) => e.preventDefault());
