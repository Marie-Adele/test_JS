console.log("Exos_01_02_03")

let nom = prompt("Entrez votre nom :");
 
let prenom = prompt("Entrez votre prénom :");
 
let message01 = "Bonjour " + nom + " " + prenom + "!";
 
console.log(message);
alert(message);

let nb1 = parseFloat(prompt("Veuillez entrer un premier nombre :"));

let nb2 = parseFloat(prompt("Veuillez entrer un second nombre :"));

let resultat = nb1 + nb2;

console.log(nb1 + " + " + nb2 + " = " + resultat);
alert(nb1 + " + " + nb2 + " = " + resultat);


let rayon, hauteur, volume;
rayon=Number(prompt("Saisir le rayon : "))
hauteur=Number(prompt("Saisir la hauteur : "))
volume=(Math.PI * rayon**2 * hauteur) / 3
let message02 = "Le volume est de : " + volume.toFixed(2);
console. log(message);
alert.message;


