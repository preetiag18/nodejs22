"use strict";

(function () {
  let resultset;
  let resultsection;
  let keyInput;
  let searchValueInput;
  let messagearea;

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    resultset = document.getElementById("resultset");
    resultsection = document.getElementById("resultsection");
    keyInput = document.getElementById("key");
    searchValueInput = document.getElementById("searchvalue");
    messagearea = document.getElementById("messagearea");

    document.getElementById("submit").addEventListener("click", submit);
  }

  async function submit() {
    const key = keyInput.value;
    const searchValue = searchValueInput.value;

    try {
      const uri = key ? `/persons/${key}?value=${searchValue}` : "/persons";
      const result = await fetch(uri);
      const personData = await result.json();
      updatePage(personData);
    } catch (err) {
      showError(err.message);
    }
  }
  function showError(message) {
    messagearea.innerHTML = `<p>${message}</p>`;
  }

  function updatePage(searchResult) {
    if (searchResult.message) {
      showError(searchResult.message);
    } else if (searchResult.length === 0) {
      showError("No Person Found");
    } else {
      let htmlString = "";
      for (const person of searchResult) {
        htmlString += `<tr>
            <td>${person.firstname}</td>
            <td>${person.lastname}</td>
            <td>${person.age}</td>
            </tr>`;
      }
      resultset.innerHTML = htmlString;
    }
  }
})();
