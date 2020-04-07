function Opdracht(vak, beschrijving) {
    let opdrObj = this;

    opdrObj.vak = vak;
    opdrObj.beschrijving = beschrijving;
}

// OPDRACHT 1.
// Maak de Cijfer functie af.

// opdracht is een object die met behulp van de bovenstaande
// functie is aangemaakt.

// Cijfer een nummer van 0 tot 10


let nummertje = 0
function Cijfer(opdracht, cijfer) {
    let cijferObj = this;
    cijferObj.opdracht = opdracht;
    cijferObj.cijfer = cijfer;
    
}

// OPDRACHT 2.
// Maak verschillende variabelen voor je opdrachten.
    // Minimaal 3 opdrachten voor 3 verschillende vakken.
    // Totaal dus 9 opdrachten
// Kijk in week6 of studie.js hoe je een variabele aanmaakt met het keyword new
let opdracht1 = new Opdracht('FRO', 'opdracht 1');
let opdracht2 = new Opdracht('FRO', 'opdracht 2');
let opdracht3 = new Opdracht('FRO', 'opdracht 3');
let opdracht4 = new Opdracht('WVO', 'opdracht 1');
let opdracht5 = new Opdracht('WVO', 'opdracht 2');
let opdracht6 = new Opdracht('WVO', 'opdracht 3');
let opdracht7 = new Opdracht('BAP', 'opdracht 1');
let opdracht8 = new Opdracht('BAP', 'opdracht 2');
let opdracht9 = new Opdracht('BAP', 'opdracht 3');

console.log(opdracht1);

let cijfer1 = new Cijfer(opdracht1, 1);
let cijfer2 = new Cijfer(opdracht2, 2);
let cijfer3 = new Cijfer(opdracht3, 3);
let cijfer4 = new Cijfer(opdracht4, 4);
let cijfer5 = new Cijfer(opdracht5, 5);
let cijfer6 = new Cijfer(opdracht6, 6);
let cijfer7 = new Cijfer(opdracht7, 7);
let cijfer8 = new Cijfer(opdracht8, 8);
let cijfer9 = new Cijfer(opdracht9, 9);

console.log(cijfer3);



// Maak voor al deze opdrachten een cijfer variabele aan
// Kijk in week6 of studie.js hoe je een variabele aanmaakt met het keyword new

// OPDRACHT 3.
// Vul de arrays met de opdrachten en cijfers die je hebt aangemaakt.
// Kijk in week6 voor een voorbeeld hoe je objecten in een array stopt!
let opdrachten = [];
let cijfers = [];

for (let counter = 0; counter < 10; counter++) {
    opdrachten.push('cijfer'[counter]);
}

function Periode (opdrachten, cijfers) {
    let periodeObj = this;

    periodeObj.opdrachten = opdrachten;
    periodeObj.cijfers = cijfers;
}

// OPDRACHT 4.
// Maak een periode variabele op basis van de bovenstaande functie

// OPDRACHT 5.
// Schrijf de periode variabele naar een JSON variabele
// Kijk in week7 hoe je een JSON variabele aanmaakt

// OPDRACHT 6.
// Schrijf de json variabele naar de localStorage
// Kijk in week week 6 hoe je een variabele naar de localStorage wegschrijft