console.log("Exo_24");

function calculerNotes() {
    // Récupérer les notes saisies par l'utilisateur
    let saisie = document.getElementById('notes').value;
    let notes = saisie.split(',').map(note => parseFloat(note.trim())).filter(note => !isNaN(note));
    
    if (notes.length === 0) {
        document.getElementById('resultats').innerText = "Veuillez saisir des notes valides.";
        return;
    }

    // Calculer la meilleure note, la moins bonne note et la moyenne
    let meilleureNote = Math.max(...notes);
    let moinsBonneNote = Math.min(...notes);
    let somme = notes.reduce((acc, note) => acc + note, 0);
    let moyenne = somme / notes.length;

    // Construire le message des notes saisies
    let nombreDeNotes = notes.length;
    let notesSaisies = notes.map((note, index) => `<span style="color: gray;">En note</span> ${index + 1}<span style="color: gray;">, vous avez saisi</span> ${note}/20`).join('<br>');

    // Afficher les résultats avec les styles directement dans innerHTML
    document.getElementById('resultats').innerHTML = `
    ${notesSaisies}<br><br>
    <hr />
    Sur l'ensemble des ${nombreDeNotes} notes :<br><br>
    <span style="color: green;">La meilleure note est de <span style="font-weight: bold;">${meilleureNote}/20</span></span><br>
    <span style="color: red;">La moins bonne note est de <span style="font-weight: bold;">${moinsBonneNote}/20</span></span><br>
    <span style="color: gray;">La moyenne des notes est de <span style="font-weight: bold;">${moyenne.toFixed(2)}/20</span></span>
`;

}
