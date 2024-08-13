//Questão 01
//for é um comando de repetição melhor utilizado quando a quantidade de repetição é pré definida, while quando ainda
//precisa ser definida pelo usuário ou quando é incerta.

//Questão 02
//Quando o laço tem repetições limitadas o for é o melhor. Quando é incerto o while é indicado para uso. 

//Questão 03
let i : number = 0;
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
while(i >= 1){
    console.log(i);
    i--;
}

//Questão 08
i = 1;
let soma : number = 0;
while (i <= 100 ) {
    soma =+ i;
    i++;
}
console.log(soma);

//Questão 09
i = 1;
let produto : number = 1;
while (i <= 5) {
    produto *= i;
    i++;
}
console.log(produto);

//Questão 10
i = 1;
while(i <= 10){
    console.log(`${i} X 9 = ${i*9}`);
}

//Questão 11
let numeros : number[] = [];
while (i !== 0) {
    i = Number(prompt("Digite um número. Digite '0' para parar a aplicação "));
    numeros.push(i);
}
let menor: number = Math.min(...numeros);
let maior: number = Math.max(...numeros);
console.log(`Maior número: ${maior}. Menor número: ${menor}.`);

//Questão 12
soma = 0;
i = 0;
let contador: number = 0;
while (i !== -1) {
    i = Number(prompt("Digite um número. Digite '-1' para parar a aplicação "));
    soma += i;
    contador++;
}
console.log(`Média: ${soma / contador}`)

//Questão 13
i = 0;
soma = 0;
let numero = prompt('Digite um número inteiro: ');

if (numero) {
    while (i < numero.length) {
        soma = soma + Math.pow(Number(numero[i]), 3)
        i++;
    }
}
console.log(soma);

//Questão 14
i = 1;
while (i <= 100) {
    if(i % 2 == 1){
        console.log(`${i} é ímpar.`);
    }
}

//Questão 15
i = 1;
while (i <= 50) {
    if (i % 3 == 0) {
        console.log(`${i} é múltiplo de 3.`);
    }
    i++;
}

//Questão 16
i = 1;
let aprovados: number = 0;
while (i <= 5) {
    let nota = Number(prompt(`Digite a nota do aluno ${i}.`))
    if (nota >= 7) {
        aprovados++;
    }
}
console.log(`${aprovados} alunos foram aprovados.`)

//Questão 17
let quantidadePares = 0;

while (true) {
    const numero = Number(prompt(`Digite um número inteiro (digite 0 para parar): `));
    if (numero === 0) {
       console.log(`Saindo... Você digitou ${quantidadePares} números pares antes do primeiro ímpar.`);
        break;
    }

    if (numero % 2 === 0) {
        quantidadePares++;
    } else {
        console.log(`Você digitou ${quantidadePares} números pares antes do primeiro ímpar.`);
        break;
    }
}

//Questão 18
let impares: number = 0;
let pares: number = 0;
i = 1;
while (i != 0) {
    i = Number(prompt("Digite um número. Digite '0' para sair da aplicação."));
    if (i % 2 == 0) {
        pares++;
    } else {
        impares++
    }
}
console.log(`Quantidade de pares: ${pares}. Quantidade de impares: ${impares}.`)

//Questão 19
i = 1;
let multiplo2: number = 0;
let multiplo3: number = 0;
let multiplo5: number = 0;
while (i != 0) {
    i = Number(prompt("Digite um número. Digite '0' para sair da aplicação."));
    if (i % 2 == 0) {
        multiplo2++;
    } else if (i % 3 == 0) {
        multiplo3++;
    } else if (i % 5 == 0) {
        multiplo5++;
    } 
}
console.log(`${multiplo2} números são múltiplos de 2. ${multiplo3} números são múltiplos de 3. ${multiplo5} números são múltiplos de 5.`)

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
console.log(`A média dos números múltiplos de 3 digitados é: ${soma / contador}`);

//Questão 21
i = 1;
contador = 0;
while (i != 0) {
    i = Number(prompt("Digite um número. Digite '0' para sair da aplicação."));
    if (i >= 100) {
        contador++;
    }
}
console.log(`${contador} números possuem mais que 3 digitos.`)

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
console.log(`A média dos números entre 50 e 100 digitados são: ${soma / contador}`);

//Questão 23
let menorNum = null;

while (true) {
    const numero = Number(prompt(`Digite um número inteiro (digite 0 para parar): `));          
    if(menor !== null) {
        if(menor % 3 === 0 && menor > numero) {
            menor = numero;
        }  
    } else {
         menor = numero;
     }

    if (numero === 0) {
        console.log(`Saindo... O menor valor digitado positivo e ímpar: ${menor}`);
            break;
    }
} 
//Questão 24
let primeiroNumero = null;
let ultimoNumero = null;
pares = 0;
impares = 0;
while (true) {
    const numero = Number(prompt(`Digite um número inteiro (digite 0 para parar): `));
    if (numero === 0) {
        console.log(`Total de números pares: ${pares}, Total de números ímpares: ${impares}`);
        break;
    }

    if (primeiroNumero === null) {
        primeiroNumero = numero;
    }

    ultimoNumero = numero;

    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}