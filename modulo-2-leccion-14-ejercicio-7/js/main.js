"use strict";

const button = document.querySelector(".button");
const message = document.querySelector(".message");
let temp;

function showMessage() {
  message.innerHTML = "¿Te has dormido?";
}
//Retrasar la ejecución de la función showMessage 10 seg
temp = setTimeout(showMessage, 10000); //Esta línea se tiene que poner para que todo empiece a ocurrir cuando se carga la pág. y no tener que esperar a que una usuaria le de por primera vez al botón para que todo ocurra, por eso es necesaria.

function handler() {
  //Vaciamos el mensaje
  message.innerHTML = "";
  //Volvemos a poner en marcha el setTimeout
  temp = setTimeout(showMessage, 10000);
}

button.addEventListener("click", handler);