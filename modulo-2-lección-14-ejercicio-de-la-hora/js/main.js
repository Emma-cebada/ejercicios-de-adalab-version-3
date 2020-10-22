"use strict";

let interval;

const paintHour = () => {
  const date = new Date();
  let h = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  document.querySelector(".hour").innerHTML = h;
}

interval = setInterval(paintHour, 1000);