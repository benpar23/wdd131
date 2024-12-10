const currentyear = document.querySelector("#currentyear");

const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentyear.innerHTML = today.getFullYear();

lastModified.innerHTML = document.lastModified;

const count = localStorage.getItem('submissionCount') || 0;

document.querySelector("#submission").textContent = count;