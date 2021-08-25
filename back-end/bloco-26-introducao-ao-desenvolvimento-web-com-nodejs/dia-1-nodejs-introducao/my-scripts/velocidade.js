const readline = require('readline-sync');

const DISTANCIA = readline.questionInt("Qual a distância (metros)? ");
const TEMPO = readline.questionInt("Qual o tempo (em segundos)? ");

function velocidadeMedia(distancia, tempo) {
  const calculo = distancia / tempo;
  const resultado = parseFloat(calculo.toFixed(2));
  return resultado;
}

console.log(`A velocidade média é ${velocidadeMedia(DISTANCIA, TEMPO)}`);
