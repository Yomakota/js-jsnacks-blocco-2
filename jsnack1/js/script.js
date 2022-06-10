// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando
// la somma degli elementi è minore di 50.


// Creo un array vuoto
const myArray = [];

let sum = 0;

// ciclo WHILE per chiedere i numeri all’utente e inserirli nell’array fino a quando la somma degli elementi è minore di 50.
while ( sum < 50) {

    // chiedi all’utente un numero
    userNum = parseInt(prompt('inserisci numero'));

    sum += userNum // somma
    myArray.push(userNum); //inserisco nell’array

}

