"use strict";

let counter = 0;
let temp;
const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.js-time');
  time.innerHTML = `Campanadas: ${counter}`;
  if (counter === 12) {
    clearInterval(temp);
  }
};

temp = setInterval(incrementAndShowCounter, 1000);