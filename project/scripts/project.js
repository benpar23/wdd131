const currentyear = document.querySelector("#currentyear");

const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentyear.innerHTML = today.getFullYear();

lastModified.innerHTML = document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

if (window.location.pathname === `/project/search.html`) {
    let pokemonList = [];

    let teamList = JSON.parse(localStorage.getItem("MyTeam")) || [];

    let names = JSON.parse(localStorage.getItem("NameList")) || [];

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
            imgElement.setAttribute("loading", "lazy")

            const buttonElement = document.createElement("button");
            buttonElement.setAttribute("id", "favoritesButton");
            buttonElement.textContent = "Add to team";
            buttonElement.addEventListener("click", () => {

                if (names.length < 6) {
                    teamList.push(character);
                    names.push(character.name);
                    localStorage.setItem("MyTeam", JSON.stringify(teamList));
                    localStorage.setItem("NameList", JSON.stringify(names));
                }
                else {
                    alert("You already have six pokemon on your team. Try deleting some!")
                }
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
            imgElement.setAttribute("loading", "lazy");

            const buttonElement = document.createElement("button");
            buttonElement.setAttribute("id", "removeButton");
            buttonElement.textContent = "Remove";
            buttonElement.addEventListener("click", () => {
                teamList.splice(index, 1);
                names.splice(index, 1);
                localStorage.setItem("MyTeam", JSON.stringify(teamList));
                localStorage.setItem("NameList", JSON.stringify(names));
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
            getPokemon(pokemon.toLowerCase());
        }
    })


    document.querySelector("#searchButton").addEventListener("click", () => {
        let pokemonSearch = document.getElementById("search").value;
        getPokemon(pokemonSearch);
    });

    document.querySelector("#teamListButton").addEventListener("click", () => {
        if (names.length > 0) {
            displayTeam(teamList);
        }
        else {
            alert("You have no Pokemon on your team yet. Try adding some!")
        }

    })
}

const currentPath = window.location.pathname;
if (currentPath.includes(`signup.html`)) {
    setTimeout(function () {
        window.location.href = "project.html";
    }, 4000);
}