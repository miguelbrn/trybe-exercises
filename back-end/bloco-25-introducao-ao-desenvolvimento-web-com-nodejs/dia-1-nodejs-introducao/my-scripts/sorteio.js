const readlineSync = require('readline-sync');

const jogoDaAdvinhacao = () => {
  const numeroInput = readlineSync.questionInt('Digite um número (0 a 10) => ')
  const min = Math.ceil(0);
  const max = Math.floor(10);
  const numeroRandon = Math.floor(Math.random() * (max - min)) + min;
  if (numeroInput === numeroRandon) {
    console.log(`Parabéns, você acertou! O número sorteado foi ${numeroRandon}`)
  }
  else {
    console.log(`Não foi dessa vez! O número sorteado foi ${numeroRandon}`)
  }

  const novamente = readlineSync.question(
    'Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não) '
  );

  if (novamente !== "s") return console.log("Até a próxima")

  jogoDaAdvinhacao()
}

jogoDaAdvinhacao()
