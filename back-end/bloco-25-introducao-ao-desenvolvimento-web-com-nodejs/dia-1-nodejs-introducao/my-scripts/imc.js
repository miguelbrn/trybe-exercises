const readlineSync = require('readline-sync');

const getImc = () => {
  const peso = readlineSync.questionFloat('Digite seu peso(KG): ')
  const altura = readlineSync.questionInt('Agora digite sua altura(CM): ')
  const imc  = (peso / Math.pow(altura / 100, 2))
  
  console.log(`Seu IMC é ${imc.toFixed(2)}`)
  
  if (imc < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
    return;
  }

  if (imc >= 18.5 && imc < 25) {
    console.log('Situação: Peso normal');
    return;
  }

  if (imc >= 25 && imc < 30) {
    console.log('Situação: Acima do peso (sobrepeso)');
    return;
  }

  if (imc >= 30 && imc < 35) {
    console.log('Situação: Obesidade grau I');
    return;
  }

  if (imc >= 35 && imc < 40) {
    console.log('Situação: Obesidade grau II');
    return;
  }

  console.log('Situação: Obesidade graus III e IV');
};

getImc();
