const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const li = document.createElement('li');

const deleteButton = document.createElement('button');

li.textContent = input.value;

deleteButton.textContent = "❌";

li.append(deleteButton);

list.append(li);