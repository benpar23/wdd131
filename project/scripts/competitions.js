const tableCells = document.querySelectorAll(".team");

tableCells.forEach(async (cell) => {
    const pokemonNames = cell.textContent
        .split(',')
        .map(name => name.trim().toLowerCase().replace(' ', '-'));

    cell.textContent = "";

    for (const name of pokemonNames) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            if (response.ok) {
                const data = await response.json();
                const imgUrl = data.sprites.front_default;

                const img = document.createElement('img');
                img.src = imgUrl;
                img.alt = name;
                img.title = name;
                img.setAttribute('loading', 'lazy');
                cell.appendChild(img);
            } else {
                console.warn(`No image found for: ${name}`);
            }
    }
});

