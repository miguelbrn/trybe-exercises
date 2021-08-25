const readline = require('readline-sync');

const PESO = readline.questionFloat('Qual seu peso? ');
const ALTURA = readline.questionFloat('Qual sua altura? ');

function informaSituacao(imc) {
  if (imc < 18.5) return 'abaixo do peso (magreza)';
  if (imc < 25) return 'com peso normal';
  if (imc < 30) return 'acima do peso (sobrepeso)';
  if (imc < 35) return 'com Obesidade grau I ';
  if (imc < 40) return 'com Obesidade grau II ';
  return 'com Obesidade graus III e IV';
}

function calculaIMC(peso, altura) {
  const calculo = peso / (altura ** 2);
  const resultado = parseFloat(calculo.toFixed(2));
  return resultado;
};

console.log(`Seu IMC é: ${calculaIMC(PESO, ALTURA)}, você está ${informaSituacao(calculaIMC(PESO, ALTURA))}`);
