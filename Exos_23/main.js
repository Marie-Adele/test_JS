console.log("Exo_23");

let etudiants = [ 
    { 
        prenom: "José", 
        nom: "Garcia", 
        matieres: { 
            francais: 16, 
            anglais: 7, 
            humour: 14 
        }  
    }, 
    { 
        prenom: "Antoine", 
        nom: "De Caunes", 
        matieres: { 
            francais: 15, 
            anglais: 6, 
            humour: 16, 
            informatique: 4, 
            sport: 10 
        } 
    } 
];

etudiants.forEach(etudiant => {
    console.log("########### DEBUT etudiant ###########");
    console.log(`${etudiant.nom} ${etudiant.prenom}`);
    
    let total = 0;
    let nombreMatieres = 0;

    for (let matiere in etudiant.matieres) {
        let note = etudiant.matieres[matiere];
        console.log(`${matiere}: ${note}`);
        total += note;
        nombreMatieres++;
    }
    
    let moyenne = total / nombreMatieres;
    console.log(`La moyenne est de ${moyenne}`);
    console.log(`Soit ${moyenne.toFixed(2)}`);
    console.log("########### FIN etudiant ###########");
});
