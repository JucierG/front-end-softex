//Questão 01
//for é um comando de repetição melhor utilizado quando a quantidade de repetição é pré definida, while quando ainda
//precisa ser definida pelo usuário ou quando é incerta.
//Questão 02
//Quando o laço tem repetições limitadas o for é o melhor. Quando é incerto o while é indicado para uso. 
//Questão 03
var i = 0;
while (i < 10) {
    console.log("Testa uma frase!");
    i++;
}
//Questão 04
i = 465484133;
while (i > 10) {
    console.log(i);
    i /= 35;
}
//Questão 05
i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
//Questão 06
i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
//Questão 07
i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}
//Questão 08
i = 1;
var soma = 0;
while (i <= 100) {
    soma = +i;
    i++;
}
console.log(soma);
//Questão 09
i = 1;
var produto = 1;
while (i <= 5) {
    produto *= i;
    i++;
}
console.log(produto);
//Questão 10
i = 1;
while (i <= 10) {
    console.log("".concat(i, " X 9 = ").concat(i * 9));
}
//Questão 11
var numeros = [];
while (i !== 0) {
    i = Number(prompt("Digite um número. Digite '0' para parar a aplicação "));
    numeros.push(i);
}
var menor = Math.min.apply(Math, numeros);
var maior = Math.max.apply(Math, numeros);
console.log("Maior n\u00FAmero: ".concat(maior, ". Menor n\u00FAmero: ").concat(menor, "."));
//Questão 12
soma = 0;
i = 0;
var contador = 0;
while (i !== -1) {
    i = Number(prompt("Digite um número. Digite '-1' para parar a aplicação "));
    soma += i;
    contador++;
}
console.log("M\u00E9dia: ".concat(soma / contador));
//Questão 13
i = 0;
soma = 0;
var numero = prompt('Digite um número inteiro: ');
if (numero) {
    while (i < numero.length) {
        soma = soma + Math.pow(Number(numero[i]), 3);
        i++;
    }
}
console.log(soma);
//Questão 14
i = 1;
while (i <= 100) {
    if (i % 2 == 1) {
        console.log("".concat(i, " \u00E9 \u00EDmpar."));
    }
}
//Questão 15
i = 1;
while (i <= 50) {
    if (i % 3 == 0) {
        console.log("".concat(i, " \u00E9 m\u00FAltiplo de 3."));
    }
    i++;
}
//Questão 16
i = 1;
var aprovados = 0;
while (i <= 5) {
    var nota = Number(prompt("Digite a nota do aluno ".concat(i, ".")));
    if (nota >= 7) {
        aprovados++;
    }
}
console.log("".concat(aprovados, " alunos foram aprovados."));
//Questão 17
var quantidadePares = 0;
while (true) {
    var numero_1 = Number(prompt("Digite um n\u00FAmero inteiro (digite 0 para parar): "));
    if (numero_1 === 0) {
        console.log("Saindo... Voc\u00EA digitou ".concat(quantidadePares, " n\u00FAmeros pares antes do primeiro \u00EDmpar."));
        break;
    }
    if (numero_1 % 2 === 0) {
        quantidadePares++;
    }
    else {
        console.log("Voc\u00EA digitou ".concat(quantidadePares, " n\u00FAmeros pares antes do primeiro \u00EDmpar."));
        break;
    }
}
//Questão 18
var impares = 0;
var pares = 0;
i = 1;
while (i != 0) {
    i = Number(prompt("Digite um número. Digite '0' para sair da aplicação."));
    if (i % 2 == 0) {
        pares++;
    }
    else {
        impares++;
    }
}
console.log("Quantidade de pares: ".concat(pares, ". Quantidade de impares: ").concat(impares, "."));
//Questão 19
i = 1;
var multiplo2 = 0;
var multiplo3 = 0;
var multiplo5 = 0;
while (i != 0) {
    i = Number(prompt("Digite um número. Digite '0' para sair da aplicação."));
    if (i % 2 == 0) {
        multiplo2++;
    }
    else if (i % 3 == 0) {
        multiplo3++;
    }
    else if (i % 5 == 0) {
        multiplo5++;
    }
}
console.log("".concat(multiplo2, " n\u00FAmeros s\u00E3o m\u00FAltiplos de 2. ").concat(multiplo3, " n\u00FAmeros s\u00E3o m\u00FAltiplos de 3. ").concat(multiplo5, " n\u00FAmeros s\u00E3o m\u00FAltiplos de 5."));
//Questão 20
i = 1;
soma = 0;
contador = 0;
while (i != 0) {
    i = Number(prompt("Digite um número. Digite '0' para sair da aplicação."));
    if (i % 3 == 0) {
        soma += i;
        contador++;
    }
}
console.log("A m\u00E9dia dos n\u00FAmeros m\u00FAltiplos de 3 digitados \u00E9: ".concat(soma / contador));
//Questão 21
i = 1;
contador = 0;
while (i != 0) {
    i = Number(prompt("Digite um número. Digite '0' para sair da aplicação."));
    if (i >= 100) {
        contador++;
    }
}
console.log("".concat(contador, " n\u00FAmeros possuem mais que 3 digitos."));
//Questão 22
i = 1;
soma = 0;
contador = 0;
while (i != 0) {
    i = Number(prompt("Digite um número. Digite '0' para sair da aplicação."));
    if (i > 50 && i < 100) {
        soma += i;
        contador++;
    }
}
console.log("A m\u00E9dia dos n\u00FAmeros entre 50 e 100 digitados s\u00E3o: ".concat(soma / contador));
//Questão 23
var menorNum = null;
while (true) {
    var numero_2 = Number(prompt("Digite um n\u00FAmero inteiro (digite 0 para parar): "));
    if (menor !== null) {
        if (menor % 3 === 0 && menor > numero_2) {
            menor = numero_2;
        }
    }
    else {
        menor = numero_2;
    }
    if (numero_2 === 0) {
        console.log("Saindo... O menor valor digitado positivo e \u00EDmpar: ".concat(menor));
        break;
    }
}
//Questão 24
var primeiroNumero = null;
var ultimoNumero = null;
pares = 0;
impares = 0;
while (true) {
    var numero_3 = Number(prompt("Digite um n\u00FAmero inteiro (digite 0 para parar): "));
    if (numero_3 === 0) {
        console.log("Total de n\u00FAmeros pares: ".concat(pares, ", Total de n\u00FAmeros \u00EDmpares: ").concat(impares));
        break;
    }
    if (primeiroNumero === null) {
        primeiroNumero = numero_3;
    }
    ultimoNumero = numero_3;
    if (numero_3 % 2 === 0) {
        pares++;
    }
    else {
        impares++;
    }
}
