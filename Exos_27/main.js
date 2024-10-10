console.log("Exo_27");

let currentPokemonId;

async function fetchPokemon(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Pokémon non trouvé');
    }
    return response.json();
}
function displayPokemonInfo(pokemon) {
    currentPokemonId = pokemon.id;

    // Mettre à jour les éléments d'affichage
    document.getElementById('pokemon-picture').src = pokemon.sprites.front_default;
    document.getElementById('pokemon-name').innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    document.getElementById('pokemon-weight').innerText = `Poids: ${pokemon.weight}`;
    document.getElementById('pokemon-height').innerText = `Taille: ${pokemon.height}`;
    

    // Afficher les types
    const typesList = document.getElementById('pokemon-types');
    typesList.innerHTML = '';
    pokemon.types.forEach(type => {
        const li = document.createElement('li');
        li.innerText = type.type.name;
        typesList.appendChild(li);
    });

    // Afficher les capacités
    const abilitiesList = document.getElementById('pokemon-abilities');
    abilitiesList.innerHTML = '';
    pokemon.abilities.forEach(ability => {
        const li = document.createElement('li');
        li.innerText = ability.ability.name;
        abilitiesList.appendChild(li);
    });

    // Activer ou désactiver les boutons Précédent et Suivant
    document.getElementById('pokemon-previous').disabled = currentPokemonId === 1;
    document.getElementById('pokemon-next').disabled = currentPokemonId >= 898; // 898 est l'ID du dernier Pokémon.
}

async function searchPokemon() {
    const inputValue = document.getElementById('search-input').value.trim();
    const url = isNaN(inputValue) ? `https://pokeapi.co/api/v2/pokemon/${inputValue.toLowerCase()}` : `https://pokeapi.co/api/v2/pokemon/${inputValue}`;
    
    try {
        const pokemon = await fetchPokemon(url);
        displayPokemonInfo(pokemon);
    } catch (error) {
        alert(error.message);
    }
}

// Gérer l'événement de recherche
document.getElementById('pokemon-search').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    searchPokemon();
});

// Fonctions de navigation
async function nextPokemon() {
    if (currentPokemonId < 898) {
        const pokemon = await fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${currentPokemonId + 1}`);
        displayPokemonInfo(pokemon);
    }
}

async function prevPokemon() {
    if (currentPokemonId > 1) {
        const pokemon = await fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${currentPokemonId - 1}`);
        displayPokemonInfo(pokemon);
    }
}

// Ajouter des gestionnaires d'événements pour les boutons de navigation
document.getElementById('pokemon-next').addEventListener('click', nextPokemon);
document.getElementById('pokemon-previous').addEventListener('click', prevPokemon);
