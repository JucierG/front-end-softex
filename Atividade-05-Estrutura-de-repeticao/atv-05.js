"use strict";
// Questão 1
// A estrutura de repetição 'for' é usada para quando quisermos repetir algum trecho de código, informamos uma variável de controle, uma condição que...
// ...enquanto ela é satisfeita o trecho de código irá ser repetido e o incremento da variável de controle. 
// Questão 2
// Na estrutura do 'for' o começo é sinalizado pela variável de controle, o valor em que a variável se iniciar o for também irá iniciar.
// Questão 3
// O fim da estrutura 'for' é dada quando a condição passada não é mais satisfeita, assim desfazendo o laço de repetição.
// Questão 4
// A alteração de valor é dada pelo incremento, a cada repetição é adicionado um valor definido para assim conseguirmos ter um controle das repetições.
// Questão 5
const questao5 = () => {
    const resposta5 = document.getElementById('resposta5');
    if (resposta5) {
        resposta5.innerText = '';
        for (let i = 0; i < 10; i++) {
            resposta5.innerText += `Testando uma frase\n`;
        }
    }
};
// Questão 6
const questao6 = () => {
    const resposta6 = document.getElementById('resposta6');
    if (resposta6) {
        resposta6.innerText = '';
        for (let i = 0; i < 10; i++) {
            resposta6.innerText += `${i}\n`;
        }
    }
};
// Questão 7
const questao7 = () => {
    const resposta7 = document.getElementById('resposta7');
    if (resposta7) {
        resposta7.innerText = '';
        for (let i = 0; i < 70; i++) {
            if (i === 5) {
                break;
            }
            resposta7.innerText += `${i}\n`;
        }
    }
};
// Questão 8
const questao8 = () => {
    const resposta8 = document.getElementById('resposta8');
    if (resposta8) {
        resposta8.innerText = '';
        for (let i = 0; i < 10; i++) {
            if (i === 5) {
                continue;
            }
            resposta8.innerText += `${i}\n`;
        }
    }
};
// Questão 9
const questao9 = () => {
    const resposta9 = document.getElementById('resposta9');
    let nomes = ['João', 'Paulo', 'Pedro', 'Gustavo', 'Maria'];
    if (resposta9) {
        resposta9.innerText = '';
        for (let n of nomes) {
            resposta9.innerText += `Nomes: ${n}\n`;
        }
    }
};
// Questão 10
const questao10 = () => {
    const resposta10 = document.getElementById('resposta10');
    if (resposta10) {
        resposta10.innerText = ``;
        for (let i = 1; i <= 10; i++) {
            resposta10.innerText += `${i}\n`;
        }
    }
};
// Questão 11
const questao11 = () => {
    const resposta11 = document.getElementById('resposta11');
    if (resposta11) {
        resposta11.innerText = ``;
        for (let i = 10; i >= 1; i--) {
            resposta11.innerText += `${i}\n`;
        }
    }
};
// Questão 12
const questao12 = () => {
    const resposta12 = document.getElementById('resposta12');
    if (resposta12) {
        resposta12.innerText = ``;
        let montante = 0;
        for (let i = 1; i <= 100; i++) {
            montante = montante + i;
        }
        resposta12.innerText += `Somando números de 1 até 100: ${montante}\n`;
    }
};
// Questão 13
const questao13 = () => {
    const resposta13 = document.getElementById('resposta13');
    if (resposta13) {
        resposta13.innerText = ``;
        for (let i = 0; i <= 50; i++) {
            if (i % 2 === 0) {
                resposta13.innerText += `${i}\n`;
            }
        }
    }
};
// Questão 14
const questao14 = () => {
    const resposta14 = document.getElementById('resposta14');
    if (resposta14) {
        resposta14.innerText = ``;
        let produto = 1;
        let soma = 0;
        for (let numeros = 1; numeros <= 5; numeros++) {
            soma = produto *= numeros;
        }
        resposta14.innerText += `Produto de 1 a 5: ${soma}\n`;
    }
};
// Questão 15
const questao15 = () => {
    const resposta15 = document.getElementById('resposta15');
    if (resposta15) {
        resposta15.innerText = ``;
        for (let i = 0; i <= 10; i++) {
            resposta15.innerText += `7 x ${i} = ${7 * i}\n`;
        }
    }
};
// Questão 16
const questao16 = () => {
    const resposta16 = document.getElementById('resposta16');
    if (resposta16) {
        resposta16.innerText = ``;
        let notas = [];
        for (let i = 1; i <= 5; i++) {
            const nota = Number(prompt(`Digite sua ${i}º nota`));
            notas.push(nota);
        }
        resposta16.innerText = `${(notas.reduce((acc, valor) => acc + valor, 0)) / notas.length}`;
    }
};
// Questão 17
const questao17 = () => {
    const resposta17 = document.getElementById('resposta17');
    if (resposta17) {
        resposta17.innerText = ``;
        for (let i = 1; i <= 50; i++) {
            if (i % 3 == 0) {
                resposta17.innerText += `Múltiplos de 3 no intervalo de 1 a 50: ${i}\n`;
            }
        }
    }
};
// Questão 18
const questao18 = () => {
    const resposta18 = document.getElementById('resposta18');
    if (resposta18) {
        resposta18.innerText = ``;
        let maior = 0;
        let menor = 0;
        let numeros = [];
        for (let i = 1; i <= 10; i++) {
            const num = Number(prompt(`Digite seu ${i}º número:`));
            numeros.push(num);
        }
        for (let i = 0; i < numeros.length; i++) {
            if (maior < numeros[i]) {
                maior = numeros[i];
            }
            if (menor > numeros[i]) {
                menor = numeros[i];
            }
        }
        resposta18.innerText = `O maior número digitado: ${maior} e o menor ${menor}`;
    }
};
// Questão 19
const questao19 = () => {
    const resposta19 = document.getElementById('resposta19');
    if (resposta19) {
        resposta19.innerText = ``;
        for (let i = 1; i <= 100; i++) {
            if (i % 2 === 1) {
                resposta19.innerText += `${i}\n`;
            }
        }
    }
};
//Questão 20
const questao20 = () => {
    const resposta20 = document.getElementById('resposta20');
    if (resposta20) {
        let notas = [];
        for (let i = 1; i <= 5; i++) {
            const nota = Number(prompt(`Digite a ${i}º nota:`));
            notas.push(nota);
            console.log(notas);
        }
        let aprovados = 0;
        let reprovados = 0;
        for (let i = 0; i < notas.length; i++) {
            if (notas[i] >= 7) {
                aprovados++;
            }
            else {
                reprovados++;
            }
        }
        resposta20.innerText = `Temos ${aprovados} alunos aprovados e ${reprovados} alunos reprovados!`;
    }
};
//Questão 21
const questao21 = () => {
    const resposta21 = document.getElementById('resposta21');
    if (resposta21) {
        const numero = prompt('Digite um número inteiro: ');
        if (numero) {
            const digitos = numero.split('').map(Number);
            const soma = digitos.reduce((acc, curr) => acc + curr, 0);
            resposta21.innerText = `A soma dos dígitos é: ${soma}`;
        }
    }
};
//Questão 22
const questao22 = () => {
    const resposta22 = document.getElementById('resposta22');
    if (resposta22) {
        const numero = Number(prompt('Digite um número inteiro: '));
        const divisores = [];
        for (let i = 1; i <= numero; i++) {
            if (numero % i === 0) {
                divisores.push(i);
            }
        }
        resposta22.innerText = `Os divisores de ${numero} são: ${divisores.join(', ')}`;
    }
};
//Questão 23
const questao23 = () => {
    const resposta23 = document.getElementById('resposta23');
    if (resposta23) {
        const alturas = [];
        for (let i = 1; i <= 5; i++) {
            const altura = Number(prompt(`Digite a ${i}º altura: `));
            alturas.push(altura);
        }
        resposta23.innerText = `A média das 5 alturas informadas é ${((alturas.reduce((acc, value) => acc + value, 0)) / alturas.length).toFixed(2)}`;
    }
};
//Questão 24
const questao24 = () => {
    const resposta24 = document.getElementById('resposta24');
    if (resposta24) {
        resposta24.innerHTML = '';
        for (let i = 1; i < 100; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                resposta24.innerHTML += `FizzBuzz<br>`;
            }
            else if (i % 3 === 0) {
                resposta24.innerHTML += `Fizz<br>`;
            }
            else if (i % 5 === 0) {
                resposta24.innerHTML += `Buzz<br>`;
            }
            else {
                resposta24.innerHTML += `${i}<br>`;
            }
        }
    }
};
//Questão 25
const questao25 = () => {
    const resposta25 = document.getElementById('resposta25');
    if (resposta25) {
        const numero = prompt('Digite um número inteiro');
        let numerosPares = [];
        if (numero) {
            for (let i = 0; i < numero.length; i++) {
                if (Number(numero[i]) % 2 === 0) {
                    numerosPares.push(Number(numero[i]));
                }
            }
            resposta25.innerText = `A soma dos digitos pares desse número: ${numerosPares.reduce((acc, value) => acc + value, 0)}`;
        }
    }
};
//Questão 26
const questao26 = () => {
    const resposta26 = document.getElementById('resposta26');
    if (resposta26) {
        const numero = prompt('Digite um número inteiro: ');
        let invert = [];
        if (numero) {
            for (let i = numero.length - 1; i >= 0; i--) {
                invert.push(numero[i]);
            }
        }
        resposta26.innerText = `Seu número inteiro invertido é ${invert}`;
    }
};
