console.log("Exos_14_15_16");

function prenomnom(prenom, nom) {
    return prenom + ' ' + nom;
}

const prenom = prompt("Veuillez saisir votre prénom :");
const nom = prompt("Veuillez saisir votre nom :");

const resultat01 = prenomnom(prenom, nom);
console.log(resultat01);




function soustraire(a, b) {
    return a-b;
}

const a = prompt("Veuillez saisir un premier nombre :");
const b = prompt("Veuillez saisir un second nombre :");

const resultat02 = soustraire(a,b);
console.log(a + ' - ' + b + ' = ' + resultat02);



function quelleHeure(heure = "12h00") {
    console.log("Il est " + heure);
    //    console.log(`Il est ${heure}`);
}

quelleHeure();       
quelleHeure("14h00"); 


