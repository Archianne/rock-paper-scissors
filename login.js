// LOGIN ================================================================================================

const howtoButton = document.querySelector(".howto-button");
const box = document.querySelector(".box");
const form = document.querySelector("#form");
const closeButton = document.querySelector(".x-button");
const title = document.querySelector("#title");
const input = document.querySelector(".input");
const bodyPage = document.querySelector("#body-page");
const gamePage = document.querySelector("#game-page");

const toggleDisplay = () => {
  box.classList.toggle("hide");
  form.classList.toggle("hide");
  title.classList.toggle("hide");
};

const saveUsername = () => {
  window.localStorage.setItem("username", input.value);
  bodyPage.classList.toggle("hide");
  gamePage.classList.toggle("hide");
};