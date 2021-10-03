const howtoButton = document.querySelector(".howto-button");
const box = document.querySelector(".box");
const form = document.querySelector("#form");
const readyButton = document.querySelector(".ready-button");
const title = document.querySelector("#title");

const toggleDisplay = () => {
  box.classList.toggle("hide");
  form.classList.toggle("hide");
  title.classList.toggle("hide");
};
