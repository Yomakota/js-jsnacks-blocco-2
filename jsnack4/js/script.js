// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.


// Crea due array che hanno un numero di elementi diversi.
const firstArr = ['matteo', 'marco', 'pippo', 'francesco', 'andrea', 'maria',];

// console.log(firstArr);

const secondArr = [1, 2, 3,];

// console.log(secondArr);


// Fino a quando l'array con meno elementi ne avrà tanti quanti l’altro.
while (secondArr.length < firstArr.length) {

    // Aggiungi elementi casuali all’array che ha meno elementi,
    secondArr.push(Math.floor(Math.random() * 10));

}

console.log(secondArr);