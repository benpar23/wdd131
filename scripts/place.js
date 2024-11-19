const currentyear = document.querySelector("#currentyear");

const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentyear.innerHTML = today.getFullYear();

lastModified.innerHTML = document.lastModified;

const windChill = document.querySelector(".chill");

const temp = parseInt(document.querySelector(".temp").textContent);

const wind = parseInt(document.querySelector(".wind").textContent);

function calculateWindChill(temp, wind) {
    return 13.12 + 0.6215 * temp - 11.37 * wind ** 0.16 + 0.3965 * temp * wind ** 0.16;
}

if (temp <= 10 && wind > 4.8) {
    windChill.textContent = `${Math.round(calculateWindChill(temp, wind))} °C`;
} else {
    windChill.textContent = "N/A";
}

