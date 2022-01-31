const doMath = (a, b, c) => {
  const promise = new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
      reject('Informe apenas números');
    
    const result = (a + b) * c;

    if (result < 50) {
      return reject('Valor muito baixo');
    }

    resolve(result);
  })

  return promise;
}

const getRamdom = () => {
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  return randomNumber;
}

const callDoMath = () => {
  const randomNumbers = Array.from({ length: 3 }).map(getRamdom)
  doMath(...randomNumbers)
    .then(result => console.log(result))
    .catch(error => console.log(error.messsage))
}

const callDoMathWhitAsync = async () => {
  const randomNumbers = Array.from({ length: 3 }).map(getRamdom)
  try {
    const result = await doMath(...randomNumbers)
    console.log(result)
  } catch (error) {
    console.error(error)
  }
}
