#Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.

def mediaAritmetica(list):
  tot = 0
  for num in list:
    tot += num
  return tot / len(list)

lista = [4,2,5]
print(mediaAritmetica(lista))
   