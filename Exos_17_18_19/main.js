console.log("Exos_17_18_19");

const ask = (question, yes, no) => {
    if (confirm(question))
        yes();
    else 
        no();
};

ask(
    "Do you agree?",
    () => {
        alert("You agreed.");
    },
    () => {
        alert("You canceled the execution.");
    }
);




function estPalindrome(chaine01) {

    const min = chaine01.replace(/\s+/g, '').toLowerCase();
    
    const inverse = min.split('').reverse().join('');
    
    return min === inverse;
}

console.log(estPalindrome("Bonjour"));
console.log(estPalindrome("abba")); 
const chaine01 = prompt("Veuillez saisir une chaine :");
console.log(estPalindrome(chaine01)); 




function compterLettreA(chaine02) {
    let compteur = 0; 

    for (let i = 0; i < chaine02.length; i++) {
        if (chaine02[i] === 'a') {
            compteur++; 
        }
    }

    return compteur;
}

console.log(compterLettreA("abba")); 
console.log(compterLettreA("mixer")); 
const chaine02 = prompt("Veuillez saisir une chaine :");
console.log(compterLettreA(chaine02)); 
