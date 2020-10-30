let n = [2, 3, 6, 7, 10, 1];

function maiorValor (array) {
    maior = Math.max.apply(null, array);
    return maior
}

console.log(maiorValor(n))