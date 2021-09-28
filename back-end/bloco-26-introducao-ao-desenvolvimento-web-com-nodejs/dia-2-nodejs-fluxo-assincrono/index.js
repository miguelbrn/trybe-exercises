function doMath(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      reject('Informe apenas números');
    }
    
    const result = (a + b) * c;
    
    if (result < 50) {
      reject('Valor muito baixo');
    }
    resolve(result);
  })
}

doMath(3,4,5)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error));

function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 100 + 1);
}

async function callDoMath() {
  const randomNumber = Array.from({ length: 3}).map(getRandomNumber);

  try {
    const result = await doMath(...randomNumber);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
