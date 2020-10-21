"use strict";

let counter = 0;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.js-time');
  time.innerHTML = `Contador: ${counter}`;
};

setInterval(incrementAndShowCounter, 2000);
