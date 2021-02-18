let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
impar = 0
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
        impar = impar + 1    
    }
}
if (impar >= 0 ) {
    console.log(impar)
}else {
    console.log("Não há números ímpares")
}