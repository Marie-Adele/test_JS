const localContent = $("#localContent");
let currentPokemonId; // Pour suivre l'ID du Pokémon actuel

function isEmpty() {
    if ($.trim($("#pokemon").val()) === "") {
        localContent.html("<div class=\"center\">Enter the name|id of the pokémon to perform the search.</div>");
    } else {
        getPokemon($("#pokemon").val().toLowerCase());
    }
}

function getPokemon(valor) {
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/" + valor,
        method: "get",
        dataType: "json"
    })
    .done(function (data) {
        currentPokemonId = data.id; // Mettre à jour l'ID du Pokémon actuel
        let content = "";
        
        if (data.types.length > 1) {
            content = "<div class=\"col-6 " + data.types[0].type.name + "\"><div>" + data.types[0].type.name + "</div></div><div class=\"col-6 " + data.types[1].type.name + "\"><div>" + data.types[1].type.name + "</div></div>";
        } else {
            content = "<div class=\"col-12 " + data.types[0].type.name + "\"><div>" + data.types[0].type.name + "</div></div>";
        }
        
        content += "<div class=\"center\"><img alt=\"\" src=" + data.sprites.other.dream_world.front_default + "><div>" + data.id + " - " + data.name + "</div></div>";
        localContent.html(content);
    })
    .fail(function () {
        localContent.html("<div class=\"center\">Wrong name or ID!</div>");
    });
}

// Fonction pour charger le Pokémon suivant
function loadNextPokemon() {
    getPokemon(currentPokemonId + 1);
}

// Fonction pour charger le Pokémon précédent
function loadPreviousPokemon() {
    if (currentPokemonId > 1) {
        getPokemon(currentPokemonId - 1);
    }
}

// Écouter les événements de touche
$(document).keydown(function (event) {
    if (event.key === "ArrowRight") { // Flèche droite
        loadNextPokemon();
    } else if (event.key === "ArrowLeft") { // Flèche gauche
        loadPreviousPokemon();
    } else if (event.key === "Enter") { // Touche Entrée
        event.preventDefault(); // Empêche le rechargement de la page
        isEmpty();
    }
});

// Événement de soumission du formulaire
$("#pokemon-search-form").on("submit", function(event) {
    event.preventDefault();
    isEmpty();
});
