let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']
let todosArray = [];

function stringsMaisCompridas(array) {
    let tlength = 0;
    for(let i =0; i < nomes.length; i++){
      if(tlength < nomes[i].length){
        tlength = nomes[i].length;
      }
    }
    for(let j =0; j < nomes.length; j++){
      if(nomes[j].length == tlength){
         todosArray.push(nomes[j]);
      }
    }
   if(todosArray.length == 1){
     return todosArray[0]
   }else{
      return todosArray
  }
}


console.log(stringsMaisCompridas(nomes));