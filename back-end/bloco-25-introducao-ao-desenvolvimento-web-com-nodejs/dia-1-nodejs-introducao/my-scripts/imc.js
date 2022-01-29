const readlineSync = require('readline-sync');

const getImc = () => {
  const peso = readlineSync.questionFloat('Digite seu peso: ')
  const altura = readlineSync.questionFloat('Agora digite sua altura: ')
  const imc  = peso / (Math.pow(altura, 2))
  return console.log(`Seu IMC é ${imc.toFixed(2)}`)
};

getImc();
