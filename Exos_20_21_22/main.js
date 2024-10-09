console.log ("Exos_20");

let tableau = Array(10);

for(let i = 0;i < tableau.length;i++){
   tableau[i] = (Math.random()*100).toFixed(0)
}

for(let i = 0;i < tableau.length;i++){
    console.log("\t".repeat(i)+tableau[i])
}


console.log ("Exos_21");

let count = parseInt(prompt("Entrez le nombre de chiffres que vous souhaitez générer :"));

if (isNaN(count) || count <= 0) {
    console.log("Veuillez entrer un nombre valide.");
} else {

    for (let i = 0; i < count; i++) {
        let randomNumber = Math.floor(Math.random() * 50) + 1; 
        let parity = (randomNumber % 2 === 0) ? "pair" : "impair"; 
        console.log(`Le nombre ${randomNumber} est ${parity}.`); 
}}

console.log ("Exos_22");

