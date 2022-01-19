#Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"] , o retorno deve ser "Fernanda".

def maiorNome(list):
  mairNomeDaList = list[0]
  for nome in list:
    if len(nome) > len(mairNomeDaList):
      mairNomeDaList = nome
  return mairNomeDaList

lista = ['Miguel', 'Day', 'Ellen']

print(maiorNome(lista))
