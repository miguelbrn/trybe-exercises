#Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n

def asteriscos(num):
  for row in range(num):
    print(num * '*')


print(asteriscos(2))
