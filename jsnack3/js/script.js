// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.


// creo flag var per entrambi le versioni
let sum = 0; 

// // Ciclo for per chiedere 5 volte all'utente un numero

for (let i = 0; i < 5; i++) {

    const userNum = parseInt(prompt('inserisci numero'));

// // aggiungo alla flag var il numero dell'utente 
    sum += userNum;
}

// // stampo la somma
console.log(sum);

// ciclo while

// let i = 0;

// while (i < 5) {
//     const userNum = parseInt(prompt('inserisci numero'));

//     i++;
//     sum += userNum;
// }
// console.log(sum);

