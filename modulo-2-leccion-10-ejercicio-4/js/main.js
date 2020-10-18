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

inputButton.addEventListener("click", userGitOrg);