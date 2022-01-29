const readlineSync = require('readline-sync');

const get_velocity = () => {
  const distancia = readlineSync.questionInt('Qual a distância?(Mts)=> ')
  const tempo = readlineSync.questionInt('Qual o tempo?(sec)=> ')
  const velocidade = distancia / tempo

  console.log(`A velocidade é: ${velocidade.toFixed(2)}`)
}

get_velocity()
