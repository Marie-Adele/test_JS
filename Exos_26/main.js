console.log("Exo_26");

class Contact {
    constructor(titre, nom, prenom, dateNaissance, telephone, email) {
        this.titre = titre;
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.telephone = telephone;
        this.email = email;
    }
}


const contacts = [];


function ajouterContact(event) {
    event.preventDefault(); 


    const titre = document.querySelector('input[name="titre"]:checked').value;
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const dateNaissance = document.getElementById('date-naissance').value;
    const telephone = document.getElementById('telephone').value;
    const email = document.getElementById('email').value;


    const contact = new Contact(titre, nom, prenom, dateNaissance, telephone, email);
    

    contacts.push(contact);


    afficherContacts();

  
    document.getElementById('contact-form').reset();
}


function afficherContacts() {
    const tableBody = document.getElementById('contacts-table-body');
    tableBody.innerHTML = ""; 

    contacts.forEach(contact => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${contact.titre}</td>
            <td>${contact.nom}</td>
            <td>${contact.prenom}</td>
            <td>${contact.dateNaissance}</td>
            <td>${contact.telephone}</td>
            <td>${contact.email}</td>
        `;
        tableBody.appendChild(row);
    });
}

document.getElementById('contact-form').addEventListener('submit', ajouterContact);
