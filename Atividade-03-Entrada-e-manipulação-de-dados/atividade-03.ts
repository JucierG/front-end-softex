// Questão 5
let nome = prompt("Digite seu nome:");
console.log("Seja bem vindo " + nome);

// Questão 6
let idade = String(prompt("Digite sua idade:"));
console.log("Questão 6: " + Number(idade));

// Questão 7
let inteiro = Number(prompt("Digite um número inteiro:"));
console.log("Questão 7: " + inteiro.toFixed(2));

// Questão 8
let numero3 = Number(prompt("Digite o primeiro número:"));
let numero4 = Number(prompt("Digite o segundo número:"));

if (numero3 !== null && numero4 !== null) {
  console.log("Questão 8: " + (numero3 + numero4));
}

//Questão 9
let decimal = Number(prompt("Digite um número decimal: "));
console.log("Questão 9: " + decimal ** 2);

//Questão 10
let anoNascimento = Number(prompt("Digite seu ano de nascimento"));
let idade2: number = 2024 - anoNascimento;
console.log("Questão 10: " + idade2);

//Questão 11
let primeiroNome = String(prompt("Digite seu primeiro nome"));
let segundoNome = String(prompt("Digite seu sobrenome nome"));
let nomeCompleto: string = primeiroNome + " " + segundoNome;
console.log("Questão 11: " + nomeCompleto);

//Questão 12
const numeros = prompt(
  "Digite uma sequência de números separados por espaço: "
);
let array: string[] = [];

if (numeros != null) {
  array = numeros.split(" ");
} else {
  console.log("Nenhum número foi digitado.");
}
console.log(
  "Questão 12: " +
    "A quantidade de caracteres da frase digitada é de: " +
    array.length
);

//Questão 13
let animal = prompt("Digite o nome de um animal: ");
console.log("Questão 13: " + "O nome do animal digitado foi: " + animal);

//Questão 14
console.log(
  "Questão 14: " +
    "Seu nome na ordem inversa: " +
    segundoNome +
    " " +
    primeiroNome
);

//Questão 15
const texto = prompt("Digite uma frase qualquer: ");

if (texto != null) {
  let tamanhoTexto = texto.length;
  console.log("Questão 15: " + tamanhoTexto);
} else {
  console.log("Questão 15: " + "Nenhuma frase foi digitada.");
}

//Questão 16
const num = Number(
  prompt(
    "Digite um número para checarmos se ele é par ou ímpar, positivo ou negativo: "
  )
);
if (num % 2 == 0) {
  console.log("Questão 16: " + "O número é par");
} else {
  console.log("Questão 16: " + "O número é ímpar");
}

//Questão 17
if (num >= 0) {
  console.log("Questão 17: " + "O número é positivo");
} else {
  console.log("Questão 17: " + "O número é negativo");
}

//Questão 18
console.log(
  "Questão 18: " +
    "O maior número que você digitou foi:" +
    Math.max(num, numero3, numero4)
);

//Questão 19
const peso = Number(prompt("Digite seu peso: "));
const altura = Number(prompt("Digite sua altura: "));
let imc = peso / altura ** 2;

console.log("Questão 19: " + imc.toFixed(2));

// Questão 20
if (primeiroNome != null) {
  if (primeiroNome.length > 5) {
    console.log("Questão 20: " + "O seu nome tem mais de 5 letras");
  } else {
    console.log("Questão 20: " + "O seu nome tem menos de 5 letras");
  }
}

//Questão 21
const estadoCivil = prompt("Digite seu estado civil: ");

console.log(
  `${
    estadoCivil == "solteiro" || estadoCivil == "solteira"
      ? "Questão 21: Voce é solteiro(a)"
      : estadoCivil == "casado" || estadoCivil == "casada"
      ? "Questão 21: Você é casado(a)"
      : "Questão 21: Você não é nem solteiro(a) e nem casado(a)."
  }`
);

//Questão 22

const baseTriangulo = Number(prompt("Digite a base de um triangulo: "));
const alturaTriangulo = Number(prompt("Digite a altura de um triangulo: "));
const areaTriangulo = baseTriangulo * alturaTriangulo;

console.log("Questão 22: A base do triângulo é: " + areaTriangulo);

//Questão 23
const cidade = prompt("Digite o nome da cidade em que você mora: ");

if (cidade != null) {
  console.log(
    `${
      cidade.toLocaleLowerCase().charAt(0) == "s"
        ? "Questão 23: A cidade digitada começa com a letra S"
        : "Questão 23: A cidade digitada não começa com a letra S"
    }`
  );
}

//Questão 24
const numeroDecimal1 = Number(prompt("Digite um número decimal: "));
const numeroDecimal2 = Number(prompt("Digite outro número decimal: "));

console.log(
  "Questão 24: O resto da divisão dos números decimais que você digitou é: " +
    (numeroDecimal1 % numeroDecimal2).toFixed(2)
);

//Questão 25
const digito = Number(prompt("Digite um número decimal para arrendondarmos: "));
console.log(
  "Questão 25: " +
    "O número " +
    digito +
    " arrendondado é " +
    Math.floor(digito)
);

//Questão 26
const numInt = Number(prompt("Digite um número inteiro: "));
let numIntAdicionado = numInt + 10;
let numString = numIntAdicionado.toString();

console.log("Questão 26: " + numString + " é do tipo " + typeof numString);

//Questão 27
const dataNascimento = prompt(
  "Digite sua data de nascimento. Exemplo: 'dd/mm/aaaa': "
);
let dataSeparada: string[] = [];

if (dataNascimento != null) {
  dataSeparada = dataNascimento.split("/");
}

let dia: number = parseInt(dataSeparada[0]);
let mes: number = parseInt(dataSeparada[1]);
let ano: number = parseInt(dataSeparada[2]);

console.log("Questão 27: " + "Dia: " + dia + ", Mês: " + mes + ", Ano: " + ano);

//Questão 28
const estado = prompt(
  "Você já disse a cidade em que mora, agora diga qual o estado: "
);

console.log("Questão 28: " + "Você mora em " + cidade + ", " + "estado.");

//Questão 29
console.log(
  "Questão 29: Bem-vindo ao nosso programa, nascido em " + anoNascimento
);

//Questão 30
const dados1 = Number(prompt("Digite um número inteiro: "));
const dados2 = prompt("Digite uma string: ");

console.log("Questão 30: " + "Dados concatenados: " + dados1 + " " + dados2);

//Questão 31
const produto = prompt("Digite o produto: ");
const preco = prompt("Digite o preço do produto: ");

console.log("Questão 31: Resumo pedido: " + produto + ", R$" + preco);

//Questão 32
console.log("Questão 31: O dobro de " + numInt + " é igual a " + numInt ** 2);

//Questão 33
const email = prompt("Digite seu e-mail: ");
console.log(
  "Questão 33: Obrigada por se inscrever. Enviaremos mais notícias para o e-mail: " +
    email
);

//Questão 34

console.log(
  "Questão 34: A soma de" + num + " + " + numInt + " é " + (num + numInt)
);
console.log(
  "Questão 34: A diferença de " +
    num +
    " + " +
    numInt +
    " é " +
    Math.abs(num - numInt)
);
console.log(
  "Questão 34: O produto de " + num + " + " + numInt + " é " + num * numInt
);
console.log(
  "Questão 34: O quociente de " + num + " + " + numInt + " é " + num / numInt
);

//Questão 35
const baseTriangulo1 = Number(prompt("Digite a base do triangulo: "));
const alturaTriangulo1 = Number(prompt("Digite a altura do triangulo: "));
const areaTriangulo1 = baseTriangulo1 * alturaTriangulo1;
console.log("Questão 35: A base do triângulo é " + areaTriangulo1);

//Questão 36
const raio = Number(prompt("Digite o raio de uma circunferência: "));
const pi = 3.14;
const perimetro = 2 * pi * raio;

console.log("Questão 36: " + perimetro);

//Questão 37
console.log(
  "Questão 37: O perímetro do triângulo 1 é: " +
    2 * (baseTriangulo + alturaTriangulo)
);

//Questão 38
console.log(
  "Questão 38: A média aritmética entre os três números decimais já digitados aqui é: " +
    (decimal + numeroDecimal1 + numeroDecimal2 / 3)
);

//Questão 39
console.log(
  "Questão 39: " +
    primeiroNome +
    ", você já viveu " +
    idade2 * 365 +
    " dias e " +
    idade2 * 12 +
    " meses."
);

//Questão 40
const valorReal = Number(prompt("Digite o valor valor em real: "));
const cotacaoDolar = Number(prompt("Digite a cotação do dólar atualmente: "));
const valorDolar = valorReal * cotacaoDolar;

console.log("Questão 40: " + valorDolar);

// Questão 41
console.log(
  "Questão 41: " +
    "O número decimal " +
    decimal +
    "convertido para o número mais próximo é: " +
    Math.ceil(decimal)
);

// Questão 42
console.log(
  "Questão 42: " +
    "O resultado da operação com três números inteiros ((n1 + n2) * n3) é: " +
    (num + numero3) * numInt
);

// Questão 43
const temperatura = Number(prompt("Digite uma temperatura em graus Celsius: "));
const temperaturaConvertida = (temperatura * 9) / 5 + 32;

console.log("Questão 43: " + temperaturaConvertida);
