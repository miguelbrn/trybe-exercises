let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0

for (let i = 0; i < numbers.length; i++ ) {
    soma = soma + numbers[i]
}

let media = soma / numbers.length

console.log(media)

if (media >= 20) {
    console.log("Valor maior que 20")
}else{
    console.log("Valor menor que 20")
}