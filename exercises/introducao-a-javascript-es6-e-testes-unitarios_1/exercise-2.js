const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const orderNumbers = (array) => array.sort(function(a, b){return a - b});

console.log(`Os números ${orderNumbers(oddsAndEvens)} se encontram ordenados de forma crescente!`);