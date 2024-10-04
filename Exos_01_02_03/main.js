console.log("Exos_01_02_03");

let nom = prompt("Entrez votre nom :");
let prenom = prompt("Entrez votre prénom :");
let message01 = "Bonjour " + nom + " " + prenom + "!";
console.log(message01);
alert(message01);

let nb1 = parseFloat(prompt("Veuillez entrer un premier nombre :"));
let nb2 = parseFloat(prompt("Veuillez entrer un second nombre :"));
let resultat = nb1 + nb2;
console.log(nb1 + " + " + nb2 + " = " + resultat);
alert(nb1 + " + " + nb2 + " = " + resultat);

let rayon, hauteur, volume;
rayon=parseFloat(prompt("Saisir le rayon : "));
hauteur=parseFloat(prompt("Saisir la hauteur : "));
volume=(Math.PI * rayon**2 * hauteur);
let message02 = "Le volume est de : " + volume.toFixed(2);
console.log(message02);
alert(message02);


