//Questão 1
type Pessoa = {
    nome: string;
    idade: number;
    endereco: string;
    profissao?: string;
}

let pessoa1: Pessoa = {
    nome: "Jucier",
    idade: 23,
    endereco: "São Lourenço da Mata, PE",
}

//Questão 2
console.log(pessoa1.nome)

//Questão 3
pessoa1.profissao = "Programador";

//Questão 4
pessoa1.idade = 22
console.log(pessoa1);

//Questão 5
type Animal = {
    nome: string;
    especie: string;
    cor: string;
}

let animal1: Animal = {
    nome: "Tobby",
    especie: "Cachorro",
    cor: "Preto",
}

//Questão 6
type Livro = {
    titulo?: string;
    autor: string;
    ano: number;
}

let livro1: Livro = {
    titulo: "A Cabana",
    autor: "William P. Young",
    ano: 2007,
}

//Questão 7
console.log(livro1.autor)

//Questão 8
livro1.ano = 1897

//Questão 9
delete livro1.titulo;

//Questão 10
type Carro = {
    marca: string;
    modelo?: string;
    ano: number;
}

let carro1: Carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2023,
}

console.log(carro1)

//Questão 11
carro1.modelo = undefined
console.log(carro1)

// OK