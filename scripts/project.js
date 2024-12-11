const currentyear = document.querySelector("#currentyear");

const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentyear.innerHTML = today.getFullYear();

lastModified.innerHTML = document.lastModified;

let pokemonList = [];

let teamList = [];

const getPokemon = async (pokemon) => {
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (response.ok){
        const characters = await response.json();

        if (Array.isArray(characters.data)){
            pokemonList = characters.data;
    } else {
        pokemonList = [characters.data];
    }}

    displayDisneyChar(disneyList);    
}