const fs = require('fs').promises;

async function filterSimpsons() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((file) => JSON.parse(file));

  const newArray = simpsons.filter(simpson => simpson.id !== '10' && simpson.id !== '6');

  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}
