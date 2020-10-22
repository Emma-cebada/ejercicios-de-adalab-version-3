"use strict";

const palettesContainer = document.querySelector(".js-palettes-container");
let palettes = [];
let favoritesLis = [];

function getData() {
  fetch("https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      palettes = data.palettes;
      paintPalettes(); //Esta función tiene que ser llamada aquí pq en este punto es cuando ya tengo la información recogida y transformada al json.
      listenPalettes();
      setLocalStorage();
    })
}

function paintPalettes() {
  let html = ""; //Esto tiene que ir fuera del for, para que cada vez se pinte una y no ocurra que las va machacando y se queda sólo con una.
  for (let i = 0; i < palettes.length; i++) {
    let classF;
    const favoriteIndex = favoritesLis.indexOf(i);
    const favorite = favoriteIndex !== -1;
    if (favorite === true) {
      classF = "palettes__item--favorite";
    } else {
      classF = "";
    }
    html += `<li class="js-palette-item ${classF}" id="${i}">`;
    html += `<h2 class="palettes__name">${palettes[i].name}</h2>`;
    html += `<div class="palettes__colors">`;
    for (const color of palettes[i].colors) {
      html += `<div class="palettes__color" style="background-color:#${color}"></div>`;
    }
    html += "</div>";
    html += "</li>";
  }
  palettesContainer.innerHTML = html;
}

const favoritePalette = function (event) {
  const clicked = parseInt(event.currentTarget.id);
  // const isFavorite = favoritesLis.find(click => { return click });
  const indexFav = favoritesLis.indexOf(clicked);
  const isFavorite = indexFav !== -1;
  if (isFavorite === false) {
    favoritesLis.push(clicked);
  } else {
    favoritesLis.splice(indexFav, 1);
  }
  paintPalettes();
  listenPalettes();
}

function listenPalettes() {
  const paletteItems = document.querySelectorAll(".js-palette-item"); //Esta constante tiene que estar dentro de la función pq es de un array que se crea después de la respuesta del servidor.
  for (const paletteItem of paletteItems) {
    paletteItem.addEventListener("click", favoritePalette);
  }
}

function setLocalStorage() {
  localStorage.setItem("palettes", JSON.stringify(palettes));
}

function getLocalStorage() {
  const localPalette = localStorage.getItem("palettes");
  const localPaletteJ = JSON.parse(localPalette);
  if (localPaletteJ === null) {
    getData();
  } else {
    palettes = localPaletteJ;
    paintPalettes();
    listenPalettes();
  }
}
getData();
