let factorial = (number) => {
  if (number == 0) {
    return 1;
  } else {
    return number*factorial(number-1);
  }
}

console.log(`O fatorial é ${factorial(3)}`)