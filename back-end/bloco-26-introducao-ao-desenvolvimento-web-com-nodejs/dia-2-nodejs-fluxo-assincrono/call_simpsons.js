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

// function callSimpsons() {

// }
