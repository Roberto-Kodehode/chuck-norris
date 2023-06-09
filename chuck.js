const button = document.querySelector(".container button");
const url = "https://api.chucknorris.io/jokes/random";

document.addEventListener("DOMContentLoaded", getJoke);

button.addEventListener("click", getJoke);

async function getJoke() {
  const jokeData = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });
  const jokeObj = await jokeData.json();

  document.getElementById("joke").textContent = jokeObj.value;
}
