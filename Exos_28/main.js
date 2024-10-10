console.log("Exo_28");
class Vehicle {
    constructor(brand, model, mileage, year) {
        this.brand = brand;
        this.model = model;
        this.mileage = mileage;
        this.year = year;
    }

    display() {
        return `Marque: ${this.brand}, Modèle: ${this.model}, Kilométrage: ${this.mileage} km, Année: ${this.year}`;
    }
}

const vehicles = [];

document.getElementById('vehicle-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const mileage = parseFloat(document.getElementById('mileage').value);
    const year = parseInt(document.getElementById('year').value);

    const newVehicle = new Vehicle(brand, model, mileage, year);
    vehicles.push(newVehicle);

    showMessage("Veuillez prendre votre ticket.", "green");
    
    document.getElementById('vehicle-form').reset();
    document.getElementById('payment-form').classList.remove('hidden');
});

document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const duration = parseInt(document.getElementById('duration').value);

    const price = calculatePrice(duration);
    if (price !== null) {
        showMessage(`Le prix à payer est de ${price}€.`, "orange");
    } else {
        showMessage("Le véhicule n'existe pas.", "red");
    }
});

function calculatePrice(duration) {
    if (duration <= 15) {
        return 0.8;
    } else if (duration <= 30) {
        return 1.3;
    } else if (duration <= 45) {
        return 1.7;
    } else if (duration > 45) {
        return 6;
    }
    return null;
}

function showMessage(text, color) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerText = text;
    messageDiv.style.color = color;
    messageDiv.classList.remove('hidden');

    setTimeout(() => {
        messageDiv.classList.add('hidden');
    }, 5000);
}

