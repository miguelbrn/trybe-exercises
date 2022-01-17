# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede(em m²).

def funcaoDaTinta(area):
    tintaPeloMQuadrado = area / 3
    precoDaLata = 80
    numeroDeLatas = tintaPeloMQuadrado // 18
    if tintaPeloMQuadrado % 18:
        numeroDeLatas += 1
    return numeroDeLatas, numeroDeLatas * precoDaLata

print(funcaoDaTinta(150))
