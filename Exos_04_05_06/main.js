console.log("Exos_04_05_06");

const age = prompt("Entrez votre âge :");
console.log((age >= 18) ? true : false);
alert((age >= 18) ? "Vous êtes majeur" : "Vous êtes mineur");

const temp = prompt("Entrez la température de l'eau :");
console.log((temp < 0) ? "SOLIDE" : (temp > 100) ? "GAZEUX" : "LIQUIDE");
alert((temp < 0) ? "SOLIDE" : (temp > 100) ? "GAZEUX" : "LIQUIDE");

const agecandidat = Number(prompt("Veuillez saisir l'âge du candidat :"));
if (agecandidat < 30) {
    console.log("L'âge minimum pour le poste est 30 ans");
    alert("L'âge minimum pour le poste est 30 ans");
} else {
    const xp = Number(prompt("Veuillez saisir le nombre d'années d'expérience du candidat :"));
    if (xp < 5) {
        console.log("Le nombre d'années d'expérience minimum est de 5 ans.");
        alert("Le nombre d'années d'expérience minimum est de 5 ans.");
    } else {
        const salairecandidat = Number(prompt("Veuillez saisir le salaire exigé :")); 
        if (salairecandidat > 40000) {
            console.log("Le salaire maximum possible est 40 000 euros.");
            alert("Le salaire maximum possible est 40 000 euros.");
        } else {
            console.log("Le candidat correspond au profil recherché.");
            alert("Le candidat correspond au profil recherché.");
        }
    }
}
