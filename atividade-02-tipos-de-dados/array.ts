//Questão 1
let numeros: number[] = []

//Questão 2
numeros.push(1, 2, 3, 4)

//Questão 3
console.log(numeros[1])

//Questão 4
numeros[2] = 10

//Questão 5
numeros.pop()

//Questão 6
console.log(numeros.length)

//Questão 7
let frutas: string[] = ["maçã", "banana", "laranja"]

//Questão 8
console.log(frutas[0])

//Questão 9
frutas.push("uva")

//Questão 10
type Aluno ={
    nome: string;
    idade: number;
}

let aluno: Aluno = {
    nome: "Jucier Gregorio",
    idade: 23,
}


let alunos: Aluno[] = []
alunos.push(aluno)

//Questão 11 
console.log(alunos[0].nome)

//Questão 12
let aluno2: Aluno = {
    nome: "Igor Gabriel",
    idade: 21,
}

alunos.push(aluno2)

let aluno3: Aluno = {
    nome: "Julia",
    idade: 18,
}

alunos.push(aluno3)

let aluno4: Aluno = {
    nome: "Luana Calisto",
    idade: 21,
}

alunos.push(aluno4)

console.log(alunos[3])

//Questão 13
let produtos: string[] = ["pizza", "desinfetante", "biscoito", "cerveja", "palitos", "sandalias", "leite", "farinha", "arroz", "feijao"]
for (let i = 0; i < produtos.length; i++) {
    if(i % 2 == 0){
        console.log(produtos[i])
    }
}
// OK