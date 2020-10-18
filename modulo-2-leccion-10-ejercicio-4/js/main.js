"use strict";

const inputButton = document.querySelector(".js-button");

function userGitOrg() {
  const inputValue = document.querySelector(".js-orgName").value;

  fetch(`https://api.github.com/orgs/${inputValue}`)
    .then((response) => response.json())
    .then((dataInput) => {
      const resultList = document.querySelector(".js-result");
      resultList.innerHTML = dataInput.resultList;
    })
}

//Por el ejercicio de las camisetas creo que me falta el return ya que me tendría que devolver un array, pero no sé cómo hacerlo.
inputButton.addEventListener("click", userGitOrg);