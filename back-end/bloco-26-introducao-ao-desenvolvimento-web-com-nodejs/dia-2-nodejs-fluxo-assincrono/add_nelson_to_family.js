const fs = require('fs').promises;

async function addNelsonToFamily() {
  const simpsonsFamily = await fs
    .readFile('./simspsonsFamily.json', 'utf-8')
    .then((file) => JSON.parse(file));

  simpsonsFamily.push({ "id": "8","name": "Nelson Muntz" });

  await fs.writeFile('./simpsonsFamily.json', simpsonsFamily);
}
