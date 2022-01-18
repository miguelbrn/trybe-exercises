# Exercício 6: Crie uma função que receba os três lados de um triângulo e informe qual o tipo de triâgulo formado ou "não é triangulo" , caso não seja possível formar um triângulo.

def tipoDeTriangulo(lado1, lado2, lado3):
  ehTriangulo = (
    lado1 + lado2 > lado3 and
    lado2 + lado3 > lado1 and
    lado1 + lado3 > lado2
  )
  if not ehTriangulo:
    return "Não é um triângulo"
  elif lado1 == lado2 == lado3:
    return "Triângulo equilátero"
  elif lado1 == lado2 or lado2 == lado3 or lado1 == lado3:
    return "Triãngulo isósceles"
  else:
    return "Triãngulo escaleno"

print(tipoDeTriangulo(2,2,2))
