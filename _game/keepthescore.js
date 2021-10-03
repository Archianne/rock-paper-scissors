const PUBLIC_TOKEN = "wkqgnmsknde";
const EDIT_TOKEN = "xvrynjqlgne";
const displayScore = document.querySelector(".displayScore");

async function keepScore () {
    const url = "https://keepthescore.co/api/wkqgnmsknde";
    const response = await fetch(url);
    const data = await response.json();
    const score = data.players;
    console.log(score);
}

keepScore ()