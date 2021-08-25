const readline = require('readline-sync');


function numeroRandom() {
  const NUMERO = readline.questionInt("Digite um número entre 1 e 10: ");
  const min = Math.ceil(0);
  const max = Math.floor(10);
  const numeroGerado = Math.floor(Math.random() * (max - min) + min);
  if (NUMERO === numeroGerado) {
    return "Parabéns, você acertou!!!";
  } else {
    return `Opa, não foi dessa vez. O número era ${numeroGerado}`;
  };
};

let jogarNovamente = null;
do {
  const resultado = numeroRandom();
  console.log(resultado);
  jogarNovamente = readline.question('Deseja jogar novamente? (Y/n): ');
} while (jogarNovamente.toLowerCase() === 'y');
