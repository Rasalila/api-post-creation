"use strict";

function onAddPost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: document.getElementById("addTitleInt").value,
      body: document.getElementById("addBodyInt").value,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      return response.json();
    })
    // заполняем полученным текстом
    .then((reslt) => {
      document.getElementById("main__Post").innerHTML += `
        <div class="addPostList">
      <h2 class="title">${reslt.title}</h2>
      <p class="body">${reslt.body}</p>
    </div>`;
    })
    .catch((error) => console.log(error));
}