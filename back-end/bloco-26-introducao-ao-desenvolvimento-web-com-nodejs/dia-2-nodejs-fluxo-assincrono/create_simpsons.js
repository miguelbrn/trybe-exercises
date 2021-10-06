const fs = require('fs').promises;

async function createSimpsonsFamily() {
  const simpsons = fs
    .readFile('./simpsons.json', 'utf-8')
    .then((file) => JSON.parse(file));
  

  const simpsonsFamily = simpsons.filter(simpson => [1, 2 ,3 ,4].includes(simpson.id));

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily))
}