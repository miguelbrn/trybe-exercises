const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf-8')
  .then((file) => {
    return JSON.parse(file)
  })
  .then((simpsons) => {
    return simpsons.map(({ id, name }) => `${id} - ${name}`)
  })
  .then((strings) => {
    strings.forEach((string) => console.log(string))
  })

async function getSimpsonsById(id) {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((file) => JSON.parse(file));

    const chosenSimpson = simpsons.find((simpson) => simpson.id === id)

    if(!chosenSimpson) {
      throw new Error('id não encontrado');
    }
    
    return chosenSimpson;
}

// function callSimpsons() {

// }
