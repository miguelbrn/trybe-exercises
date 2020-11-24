const testingScope = (escopo)  => { 
  if (escopo === true) { 
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    //ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    ifScope = `${ifScope} ótimo, fui utilizada no ecopo !`;
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  //console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  console.log(`${ifScope} o que estou fazendo aqui ? :O`)
}

testingScope(true);