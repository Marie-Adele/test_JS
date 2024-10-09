console.log("Exo_24_bis");

 class Voiture {
    constructor(marque, modele, vitesse) {
        this.marque = marque;
        this.modele = modele;
        this.vitesse = vitesse;
    }

   
    accelerer() {
        this.vitesse += 10;
    }

    tourner() {
        this.vitesse -= 5;
    }
}


function calculerVitesses() {
    const resultatsDiv = document.getElementById('resultats');
    const etapesDiv = document.getElementById('etapes');
    etapesDiv.innerHTML = ""; 

    const voiture1 = new Voiture("Bmw", "Serie 1", 80);
    const voiture2 = new Voiture("Mercedes", "GLB", 100);
 

    // voiture 1
    for (let i = 0; i < 3; i++) {
        etapesDiv.innerHTML += `<p>La voiture ${voiture1.marque} ${voiture1.modele} accélère ${i + 1} fois.</p>`;
        voiture1.accelerer(); 
        etapesDiv.innerHTML += `<p>La voiture <span class="bold">${voiture1.marque} ${voiture1.modele}</span> avance désormais à <span class="bold">${voiture1.vitesse}</span> km/h.</p>`;
    }

    // voiture 2
    for (let i = 0; i < 2; i++) {
        etapesDiv.innerHTML += `<p>La voiture ${voiture2.marque} ${voiture2.modele} accélère ${i + 1} fois.</p>`;
        voiture2.accelerer(); 
        etapesDiv.innerHTML += `<p>La voiture <span class="bold">${voiture2.marque} ${voiture2.modele}</span> avance désormais à <span class="bold">${voiture2.vitesse}</span> km/h.</p>`;
    }
    for (let i = 0; i < 2; i++) {
        etapesDiv.innerHTML += `<p>La voiture ${voiture2.marque} ${voiture2.modele} tourne ${i + 1} fois.</p>`;
        voiture2.tourner(); 
        etapesDiv.innerHTML += `<p>La voiture <span class="bold">${voiture2.marque} ${voiture2.modele}</span> avance désormais à <span class="bold">${voiture2.vitesse}</span> km/h.</p>`;
    }

   
    resultatsDiv.innerHTML = `
        <p>La vitesse finale de la voiture 1 (<span class="bold">${voiture1.marque} ${voiture1.modele}</span>) est <span class="bold">${voiture1.vitesse}</span> km/h.</p>
        <p>La vitesse finale de la voiture 2 (<span class="bold">${voiture2.marque} ${voiture2.modele}</span>) est <span class="bold">${voiture2.vitesse}</span> km/h.</p>
    `;
}

document.getElementById('calculer').addEventListener('click', calculerVitesses);
