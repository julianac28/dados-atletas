// CRIAÇÃO DA CLASSE

class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;        
    }

    calculaCategoria(){             
        if(this.idade<9){return "\nCategoria: Sem categoria"}
        else if(this.idade <=11){return "\nCategoria: Infantil"}
        else if(this.idade <=13){return  "Categoria: Juvenil"}
        else if(this.idade <=15){return "Categoria: Intermediário"}
        else if(this.idade <=30){return   "Categoria: Adulto"}
        else {return  "Sem categoria"}   
    }

    calculaIMC(){
        let imc = this.peso / (this.altura * this.altura)
        return imc;
        }

    calculaMediaValida(){
        let notasComputadas = this.notas.toSorted((a,b) => a-b).slice(1,4);
        let soma =0;
        notasComputadas.forEach(function(nota){
            return soma = soma + nota
        })        
        return soma/notasComputadas.length;        
    }

    obtemNomeAtleta(){
        return `Nome: ${this.nome}`;
    }

    obtemIdadeAtleta(){
        return `Idade: ${this.idade}`;
    }

    obtemPesoAtleta(){
        return `Peso: ${this.peso}`;
    }

    obtemAlturaAtleta(){
        return `Altura: ${this.altura}`;
    }

     obtemNotasAtleta(){
        return `Notas: ${this.notas}`;
    }

    obtemCategoria(){        
        return this.calculaCategoria();
    }

    obtemIMC(){
        return 'IMC: ' + this.calculaIMC();
    }

    obtemMediaValida(){
        return 'Média válida: ' + this.calculaMediaValida();
    }    
    
}

// CRIAÇÃO DE OBJETO

const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

// EXECUÇÃO DOS MÉTODOS

console.log(atleta.obtemNomeAtleta())
console.log(atleta.obtemIdadeAtleta())
console.log(atleta.obtemPesoAtleta())
console.log(atleta.obtemAlturaAtleta())
console.log(atleta.obtemNotasAtleta())
console.log(atleta.obtemCategoria())
console.log(atleta.obtemIMC())
console.log(atleta.obtemMediaValida())

// OBSERVAÇÃO - CORREÇÃO DE CÁLCULO DA ORDENAÇÃO

// Ao salvar no objeto atleta e selecionar a lista de notas o sistema não ordenou corretamento
// utilizando apenas a função sort(), como apresentado abaixo. 
//Para corrigir esse erro foi utilizado a função toSorted((a,b) => a-b)


console.log(`\nRegra de Negócio: 
 O cálculo esperado da média na lista [ 10, 9.34, 8.42, 10, 7.88 ] é: 
 *excluir o menor e maior valor [7.88, 10] 
 *somar os 3 valores restantes [8.42, 9.34, 10] 
 *retornar a média entre eles [8.42, 9.34, 10]/3
 *média 9,253333333333333`)

console.log('\nOBSERVAÇÃO CÁLCULO INCORRETO')
//lista original
console.log('Lista origina:',atleta.notas) //[ 10, 9.34, 8.42, 10, 7.88 ]
//lista ordenada
console.log('Lista ordenada sort()',atleta.notas.sort()) // [ 10, 10, 7.88, 8.42, 9.34 ]
//lista fatiada, entre a posição 1 e 3
console.log('Lista slice(1,4)',atleta.notas.sort().slice(1,4)) // [ 10, 7.88, 8.42 ]

//CÁLCULO ERRADO
// média = (10 + 7.88 + 8.42)/3
// média =  8,766666666666667
console.log('Média: 8,766666666666667')








