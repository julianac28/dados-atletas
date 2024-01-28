# DEVstart Desenvolvedor Front-end-React
## Entrega do  Projeto de certificação 2 – Dados dos atletas

O código resolve o projeto com uma classe **Aleta()** com os métodos:
+ **constructor(nome, idade, peso, altura, notas)**
+ **calculaCategoria()**, para calcular a categoria do atleta
  + Infantil: 9 a 11 anos, Juvenil: 12 e 13 anos, Intermediário: 14 e 15 anos, Adulto: 16 a 30 anos, Sem categoria: demais idades
+ **calculaIMC()**, para calcular o IMC do atleta;
+ **calculaMediaValida()**, para calcular a média válida do atleta.
+ **obtemNomeAtleta()**, que retorna o nome do atleta
+ **obtemIdadeAtleta()**, que retorna a idade do atleta
+ **obtemPesoAtleta()**, que retorna o peso do atleta
+ **obtemNotasAtleta()**, que retorna as notas do atleta
+ **obtemCategoria()**, que retorna a categoria do atleta
+ **obtemIMC()**, que retorna o IMC do atleta
+ **obtemMediaValida()**, que retorna a média válida do atleta

#### OBSERVAÇÃO - CORREÇÃO DE CÁLCULO DA ORDENAÇÃO

Ao salvar no objeto atleta e selecionar a lista de notas o sistema não ordenou corretamento utilizando apenas a função sort(). 
##### Para corrigir esse erro foi utilizado a função toSorted((a,b) => a-b)


##### REGRA DE NEGÓCIO: 
O cálculo esperado da média na lista [ 10, 9.34, 8.42, 10, 7.88 ] é: 
 * excluir o menor e maior valor [7.88, 10] 
 * somar os 3 valores restantes [8.42, 9.34, 10] 
 * retornar a média entre eles [8.42, 9.34, 10]/3
 * média 9,253333333333333`)

##### OBSERVAÇÃO CÁLCULO MÉDIA
* lista original [ 10, 9.34, 8.42, 10, 7.88 ]
* lista ordenada atleta.notas.sort()) // [ 10, 10, 7.88, 8.42, 9.34 ]
* lista fatiada, entre a posição 1 e 3, atleta.notas.sort().slice(1,4)) // [ 10, 7.88, 8.42 ]

##### Cálculo errado
* média = (10 + 7.88 + 8.42)/3
* média =  8,766666666666667

