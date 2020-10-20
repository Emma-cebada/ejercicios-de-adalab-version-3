"use strict";
// const name = document.querySelector(".name");
// const surname = document.querySelector(".surname");
// const email = document.querySelector(".email");
// const tel = document.querySelector(".tel");
// const previewName = document.querySelector(".preview-name");
// const previewSurname = document.querySelector(".preview-surname");
// const previewEmail = document.querySelector(".preview-email");
// const previewTel = document.querySelector(".preview-tel");

const arrayInput = document.querySelectorAll(".js-input");
const arrayPreview = document.querySelectorAll(".js-preview");

const data = {
  name: "",
  surName: "",
  email: "",
  phone: "",
};

if (!!localStorage.getItem("name")) {
  name.value = localStorage.getItem("name");
  previewName.innerHTML = localStorage.getItem("name");
}

function getName() {
  // const nameValue = name.value;
  // previewName.innerHTML = nameValue;
  // localStorage.setItem("name", nameValue);
  for (let i = 0; i < arrayInput.length; i++) {
    arrayPreview[i].innerHTML = arrayInput[i].value;
  }
}


function saveData(event) {
  let currentInput = event.currentTarget.name;
  data[currentInput] = event.currentTarget.value;
  getName();
}

for (let i = 0; i < arrayInput.length; i++) {
  arrayInput[i].addEventListener("keyup", getName);
}