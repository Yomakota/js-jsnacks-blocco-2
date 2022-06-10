// Calcola la somma e la media dei primi 10 numeri.

// flag var
let sum = 0;

// creo i primi 10 numeri
for ( let i = 1; i < 11; i++) {
    
    // li aggiungo alla somma
    sum += i;
}

// calcolo la media
let media = sum / 10;

// stampo la media e la somma
console.log(media);
console.log(sum);   
