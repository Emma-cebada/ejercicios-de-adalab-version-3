"use strict";

const palettesContainer = document.querySelector(".js-palettes-container");
let palettes = [];

function getData() {
  fetch("https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      palettes = data.palettes;
      paintPalettes(); //Esta función tiene que ser llamada aquí pq en este punto es cuando ya tengo la información recogida y transformada al json.
    })
}

function paintPalettes() {
  let html = ""; //Esto tiene que ir fuera del for, para que cada vez se pinte una y no ocurra que las va machacando y se queda sólo con una.
  for (const palette of palettes) {
    html += "<li>";
    html += `<h2 class="palettes__name">${palette.name}</h2>`;
    html += `<div class="palettes__colors">`;
    for (const color of palette.colors) {
      html += `<div class="palettes__color" style="background-color:#${color}">1</div>`;
    }
    html += "</div>";
    html += "</li>";
  }
  palettesContainer.innerHTML = html;
}
getData();