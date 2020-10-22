"use strict";

const input = document.querySelector(".js-input");
const button = document.querySelector(".js-button");
const result = document.querySelector(".js-result");

function clickButton() {
  let inputValue = input.value;
  fetch(`https://swapi.dev/api/people/?search=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      for (const character of data.results) {
        result.innerHTML += `<li>Tu personaje es ${character.name} y su género es ${character.gender}</li>`;
      }
    });
}

button.addEventListener("click", clickButton);