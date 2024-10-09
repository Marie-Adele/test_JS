console.log("Exo_25");

let chiens = [];

function ajouterChien(event) {
    event.preventDefault(); 

    const nom = document.getElementById('dog-name').value;
    const race = document.getElementById('dog-breed').value;
    const age = document.getElementById('dog-age').value;

    const chien = {
        id: chiens.length + 1,
        nom: nom,
        race: race,
        age: age
    };

    chiens.push(chien); 

    const select = document.getElementById('dog-select');
    const option = document.createElement('option');
    option.value = chien.id; 
    option.textContent = nom; 
    select.appendChild(option);

    
    document.getElementById('mon-form').reset();
}

function afficherDetailsChien() {
    const select = document.getElementById('dog-select');
    const chienId = select.value;

    const chien = chiens.find(c => c.id == chienId);

    const selectOutput = document.getElementById('selectOutput');
    if (chien) {
        selectOutput.innerHTML = `
            <p><strong>ID :</strong> ${chien.id}</p>
            <p><strong>Nom :</strong> ${chien.nom}</p>
            <p><strong>Race :</strong> ${chien.race}</p>
            <p><strong>Âge :</strong> ${chien.age} ans</p>
        `;
    } else {
        selectOutput.innerHTML = '';
    }
}

document.getElementById('btn-submit').addEventListener('click', ajouterChien);

document.getElementById('dog-select').addEventListener('change', afficherDetailsChien);
