let Words = "Antônio foi no banheiro e não sabemos o que aconteceu"; // retorna 'aconteceu'
let big = "";

Words.split(" ").forEach(word => {
  if (word.trim().length > big.length) {
    big = word.trim();
  }
});

console.log(big);