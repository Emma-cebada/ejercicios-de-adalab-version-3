"use strict";

let counter = 0;
let temp;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector(".js-time");
  time.innerHTML = `Escrito hace: ${counter}`;
  if (counter === 59) {
    time.innerHTML = `Escrito hace: 1 min.`;
  }
};

const removeMsg = () => {
  const msg = document.querySelector('.js-time');
  msg.innerHTML = '';
};

setTimeout(removeMsg, 6000);

temp = setInterval(incrementAndShowCounter, 1000);