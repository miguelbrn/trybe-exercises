let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: 'Sim'
  };

  let info2 = {
      personagem: 'Tio Patinhas',
      origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
      nota: "O último MacPatinhas",
      recorrente: 'Sim'
  };
  let allRecorrente = false;
  //First Exercise
  console.log('Bem vinda, ' + info.personagem)

  //Seconde Exercise
  for (let key in info) {
      console.log(key)
  }

  for (let key in info) {
      console.log(info[key])
  }

  for (let key in info, info2) {
      if (info.recorrente === info2.recorrente) {
          delete info.recorrente
          delete info2.recorrente
          allRecorrente = true
      }
      console.log(info[key] + ' e ' + info2[key])    
  }
  if (allRecorrente == true) {
      console.log('Ambos recorrentes')
  }