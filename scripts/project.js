const currentyear = document.querySelector("#currentyear");

const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentyear.innerHTML = today.getFullYear();

lastModified.innerHTML = document.lastModified;

let pokemonList = [];

let teamList = JSON.parse(localStorage.getItem("MyTeam")) || [];

const displayPokemon = (poke) => {
    pokebox.innerHTML = "";

    poke.forEach((character) => {
        const divElement = document.createElement("div");

        const h3Element = document.createElement("h3");
        const capitalized = character.name;
        const capital = capitalized[0].toUpperCase() + capitalized.substring(1);
        h3Element.innerText = capital;

        const imgElement = document.createElement("img");
        imgElement.setAttribute("src", character.sprites.front_default);
        imgElement.setAttribute("alt", character.name);

        const buttonElement = document.createElement("button");
        buttonElement.setAttribute("id", "favoritesButton");
        buttonElement.textContent = "Add to team";
        buttonElement.addEventListener("click", () => {
            teamList.push(character);
            localStorage.setItem("MyTeam", JSON.stringify(teamList));
        })

        divElement.appendChild(h3Element);
        divElement.appendChild(imgElement);
        divElement.appendChild(buttonElement);

        pokebox.appendChild(divElement);
    })
}


const getPokemon = async (pokemon) => {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (response.ok) {
        const characters = await response.json();

        if (Array.isArray(characters)) {
            pokemonList = characters;
        } else {
            pokemonList = [characters];
        }
    }

    displayPokemon(pokemonList);
}

const displayTeam = (teamMembers) => {
    pokebox.innerHTML = "";

    teamMembers.forEach((character, index) => {
        const divElement = document.createElement("div");

        const h3Element = document.createElement("h3");
        const capitalized = character.name;
        const capital = capitalized[0].toUpperCase() + capitalized.substring(1);
        h3Element.innerText = capital;

        const imgElement = document.createElement("img");
        imgElement.setAttribute("src", character.sprites.front_default);
        imgElement.setAttribute("alt", character.name);

        const buttonElement = document.createElement("button");
        buttonElement.setAttribute("id", "removeButton");
        buttonElement.textContent = "Remove";
        buttonElement.addEventListener("click", () => {
            teamList.splice(index, 1);
            localStorage.setItem("MyTeam", JSON.stringify(teamList));
            displayTeam(teamList);
        })

        divElement.appendChild(h3Element);
        divElement.appendChild(imgElement);
        divElement.appendChild(buttonElement);

        pokebox.appendChild(divElement);
    })
}

document.getElementById("search").addEventListener("keydown", event => {
    if (event.key === "Enter") {
        let pokemon = document.getElementById("search").value;
        getPokemon(pokemon);
    }
})


document.querySelector("#searchButton").addEventListener("click", () => {
    let pokemonSearch = document.getElementById("search").value;
    getPokemon(pokemonSearch);
});

document.querySelector("#favoriteListButton").addEventListener("click", () => {
    displayTeam(teamList)
})