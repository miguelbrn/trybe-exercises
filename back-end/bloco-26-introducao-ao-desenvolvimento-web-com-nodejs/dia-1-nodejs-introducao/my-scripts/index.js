const readline = require('readline-sync');

function selecionaScript() {
  console.log(`Qual script deve ser selecionado?`)
  const scriptNumber = readline.questionInt(`IMC(1), Velocidade(2), Sorteio(3): `)
  if( scriptNumber === 1 ) {
    return require('./imc');
  } else if ( scriptNumber === 2 ) {
    return require('./velocidade');
  } else if ( scriptNumber === 3 ) {
    return require('./sorteio');
  } else {
    return console.log("Escolha inválida")
  }
}

selecionaScript();
