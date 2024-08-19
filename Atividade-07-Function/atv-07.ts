// Questão 1
const questao1 = ()=>{
    const resposta1 = document.getElementById('resposta1');

    if (resposta1) {
        resposta1.innerHTML = '';

        resposta1.innerText += `
            Estudar é muito bom.
            Paciência e persistência.
            Revisão é a mãe do aprendizado.
        `;
    }
}

//Questão 2
const questao2 = ()=>{
    const resposta2 = document.getElementById('resposta2');

    if (resposta2) {
        resposta2.innerHTML = '';
        for (let i = 0; i < 3; i++) {
            resposta2.innerText += `
            Estudar é muito bom.
            Paciência e persistência.
            Revisão é a mãe do aprendizado.
        `;
        } 
    }
}

//Questão 3
const questao3 = (num1: number, num2: number) => {
    const resposta3 = document.getElementById('resposta3');

    if (resposta3) {
        resposta3.innerHTML = '';
        for (let i = 0; i < 3; i++) {
            resposta3.innerText = `
                ${num1} + ${num2} = ${num1 + num2}
            `;
        } 
    }
}

//Questão 4
const questao4 = (num1: number, num2: number) => {
    const resposta4 = document.getElementById('resposta4');

    let teste1: number = num1 + num2;
    let teste2: number = num1 * num2;

    if (resposta4) {
        resposta4.innerHTML = '';
       
        resposta4.innerText = `
            Teste 1 = ${teste1}
            Teste 2 = ${teste2}
            Teste 1 + Teste 2 = ${teste1 + teste2}
        `;
    }
}

//Questão 5
const questao5 = (num1: number, num2: number) => {
    const resposta5 = document.getElementById('resposta5');

    if (resposta5) {
        resposta5.innerHTML = '';
       
        resposta5.innerText = `
           ${num1} + ${num2} = ${num1 + num2}
        `;
    }
}

//Questão 6
const questao6 = (num: number) => {
    const resposta6 = document.getElementById('resposta6');

    if (resposta6) {
        resposta6.innerHTML = '';
       
        if (num % 2 === 0) {
            resposta6.innerText = `${num} é par!`;
        } else {
            resposta6.innerText = `${num} é impar!`;
        }
    }
}

//Questão 7
const questao7 = (nota1: number, nota2: number, nota3: number) => {
    const resposta7 = document.getElementById('resposta7');

    if (resposta7) {
        resposta7.innerHTML = '';
      
        resposta7.innerText = `A média aritmética das notas é: ${((nota1 + nota2 + nota3) / 3).toFixed(2)}`;  
    }
}

//Questão 8
const questao8 = (peso: number, altura: number) => {
    const resposta8 = document.getElementById('resposta8');

    if (resposta8) {
        resposta8.innerHTML = '';
      
        resposta8.innerText = `O seu IMC é: ${(peso / (altura * altura)).toFixed(2)}`;  
    }
}

//Questão 9
const questao9 = (valor: number, percentagemDesconto: number) => {
    const resposta9 = document.getElementById('resposta9');

    let desconto: number = valor * (percentagemDesconto / 100);

    if (resposta9) {
        resposta9.innerHTML = '';
      
        resposta9.innerText = `O valor com o desconto aplicado: ${(valor - desconto).toFixed(2)}`;  
    }
}

//Questão 10
const questao10 = (salario: number) => {
    const resposta10 = document.getElementById('resposta10');

    if (resposta10) {
        resposta10.innerHTML = '';

        if (salario <= 1903.98) {
            resposta10.innerText = `
            Isento de imposto de renda!
            `;
        } else if (salario > 1903.98 && salario <= 2826.65) {
            const imposto = salario * 0.075;
            resposta10.innerText = `
            Você terá que pagar R$ ${imposto.toFixed(2)} de imposto de renda.
            `;
        } else if (salario > 2826.65 && salario <= 3751.05) {
            const imposto = salario * 0.15;
            resposta10.innerText = `
            Você terá que pagar R$ ${imposto.toFixed(2)} de imposto de renda.
            `;
        } else if (salario > 3751.05 && salario <= 4664.68) {
            const imposto = salario * 0.225;
            resposta10.innerText = `
            Você terá que pagar R$ ${imposto.toFixed(2)} de imposto de renda.
            `;
        } else {
            const imposto = salario * 0.275;
            resposta10.innerText = `
            Você terá que pagar R$ ${imposto.toFixed(2)} de imposto de renda.
            `;
        }
    }
}

//Questão 11
const questao11 = (listaNumeros: Array<number>) => {
    const resposta11 = document.getElementById('resposta11');

    let somaValores = listaNumeros.reduce((value, acc)=> value + acc, 0);

    if (resposta11) {
        resposta11.innerHTML = '';

        resposta11.innerText = `
        A média artimética desses números é: ${Math.round(somaValores / listaNumeros.length)}
        `;
    }
}

//Questão 12
const questao12 = (num: string) => {
    const resposta12 = document.getElementById('resposta12');

    if (resposta12) {
        let pares = 0;
        let impares = 0;
        resposta12.innerHTML = '';

        for (let i = 0; i < num.length; i++) {
            const digito = Number(num[i]);

            if (digito % 2 === 0) {
                pares++;
            } else {
                impares++;
            }
        }
        resposta12.innerHTML = `Quantidade de dígitos pares: ${pares} e ímpares: ${impares}`;
    }     
}

//Questão 13
type Aluno = {
    nome: string;
    nota: number;
};

const questao13 = (alunos: Aluno[]) => {
    const resposta13 = document.getElementById('resposta13');

    if (resposta13) {
        resposta13.innerHTML = '';
        let somaNotas = 0;

        for (const aluno of alunos) {
            somaNotas += aluno.nota;
        }

        const media = somaNotas / alunos.length;

        resposta13.innerText = `
            A média total dos alunos é: ${(media).toFixed(2)}
        `;
    } 
}

//Questão 14
const questao14 = (anoNascimento: number) => {
    const resposta14 = document.getElementById('resposta14');

    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;

    if (resposta14) {
        resposta14.innerHTML = '';

        resposta14.innerText = `Dado o seu ano de nascimento ${anoNascimento}, você tem ${idade} anos.`;
    } 
}

//Questão 15
const questao15 = (num: number) => {
    const resposta15 = document.getElementById('resposta15');

    if (resposta15) {
        resposta15.innerHTML = '';

        for (let i = 0; i <= 10; i++) {
            resposta15.innerText += `
                ${i} x ${num} = ${i * num}
            `;   
        }
        
    } 
}

//Questão 16
const questao16 = () => {
    const resposta16 = document.getElementById('resposta16');

    let numeroAleatorio = Number((Math.random() * 10).toFixed(0));
    let numeroTentativas = 0;
    let valida = false;

    while (!valida) {
        const tentativa = Number(prompt('Digite um número'));

        numeroTentativas++;

        if (numeroAleatorio === tentativa) {
            valida = true;

            if (resposta16) {
                resposta16.innerHTML = ''; 
                resposta16.innerText = `Você acertou o número após ${numeroTentativas} ${numeroTentativas === 1 ? 'tentativa!' : 'tentativas!'}`;
            }
        } else {
            if (tentativa < numeroAleatorio) {
                alert('O número é maior!');
            } else {
                alert('O número é menor!');
            }
        }
    }
}

//Questão 17
const questao17 = (objeto: object, parametro: string) => {
    const resposta17 = document.getElementById('resposta17');

    if (resposta17) {
        if (objeto.hasOwnProperty(parametro)) {
            resposta17.innerText = `No objeto informado existe o parâmetro ${parametro}!`;  
        } else {
            resposta17.innerText = `No objeto informado não existe o parâmetro ${parametro}!`;  
        }     
    }   
}

//Questão 18
const questao18 = (valorCusto: number, lucro: number, frete: number) => {
    const resposta18 = document.getElementById('resposta18');

    let calculaLucro = valorCusto * Number(`0.${lucro}`);

    if (resposta18) {
        resposta18.innerText = `O valor total do produto é ${(valorCusto + calculaLucro + frete).toFixed(2)}`; 
    }   
}

//Questão 19
const questao19 = (palavra: string) => {
    const resposta19 = document.getElementById('resposta19');

    let maiorPalavra = '';
    let atualPalavra = '';

    if (resposta19) {
        for (let i = 0; i < palavra.length; i++) {
            if (palavra[i] === ' ') {
                if (maiorPalavra.length < atualPalavra.length) {
                    maiorPalavra = atualPalavra;
                }
                atualPalavra = '';
            } else {
                atualPalavra += palavra[i];
            }
        }

        if (maiorPalavra.length < atualPalavra.length) {
            maiorPalavra = atualPalavra;
        }

        resposta19.innerText = `A maior palavra é ${maiorPalavra}`;
    }  
}

//Questão 20
const questao20 = (arrayStrings: Array<string>) => {
    const resposta20 = document.getElementById('resposta20');

    if (resposta20) {
        let vertical = 0;

        for (let i = 0; i < arrayStrings.length; i++) {
            if (arrayStrings[i].length > vertical) {
                vertical = arrayStrings[i].length;
            }
        }

        const horizontal = vertical + 2;

        let resultado = '';

        const padRight = (str: string, length: number, padChar: string = ' ') => {
            while (str.length < length) {
                str += padChar;
            }
            return str;
        };

        resultado += '*'.repeat(horizontal) + '\n';

        for (let i = 0; i < arrayStrings.length; i++) {
            resultado += `*${padRight(arrayStrings[i], vertical)}*\n`;
        }

        resultado += '*'.repeat(horizontal);

        resposta20.innerText = resultado;
    }
}

//Questão 21
const questao21 = (arrayStrings: Array<string>) => {
    const resposta21 = document.getElementById('resposta21');

    if (resposta21) {
        let array5: string[] = [];
        
        for (let i = 0; i < arrayStrings.length; i++) {
            if (arrayStrings[i].length > 5) {
                array5.push(arrayStrings[i]);
            }
        }

        resposta21.innerText = `O novo array com itens que tenham mais que 5 caracteres: ${array5}`;
    }
}

//Questão 22
const questao22 = (arrayObjetos: Array<{ título: string, autor: string, ano: number }>) => {
    const resposta22 = document.getElementById('resposta22');
    
    const autoresRepetidos = new Set<string>();

    const autoresVistos = new Set<string>();

    arrayObjetos.forEach(livro => {
        if (autoresVistos.has(livro.autor)) {
            autoresRepetidos.add(livro.autor);
        } else {
            autoresVistos.add(livro.autor);
        }
    });

    const autorRepetido = Array.from(autoresRepetidos)[0];

    if (resposta22) {
        resposta22.innerText = autorRepetido
            ? `O autor que se repetiu é: ${autorRepetido}`
            : 'Nenhum autor se repetiu';
    }
}

//Questão 23
const questao23 = (arrayPessoas: Array<{ nome: string, idade: number }>) => {
    const resposta23 = document.getElementById('resposta23');

    if (arrayPessoas.length === 0) {
        if (resposta23) {
            resposta23.innerText = 'Nenhuma pessoa no array.';
        }
        return 'Nenhuma pessoa no array.';
    }

    const pessoaMaisVelha = arrayPessoas.reduce((maisVelha, pessoaAtual) =>
        pessoaAtual.idade > maisVelha.idade ? pessoaAtual : maisVelha
    );

    if (resposta23) {
        resposta23.innerText = `A pessoa mais velha é: ${pessoaMaisVelha.nome}`;
    }
}

//Questão 24
const questao24 = (arrayCarros: Array<{ marca: string, modelo: string, ano: number }>, anoLimite: number) => {
    const resposta24 = document.getElementById('resposta24');

    const carrosFiltrados = arrayCarros.filter(carro => carro.ano > anoLimite);

    const modelosCarrosFiltrados = carrosFiltrados.map(carro => carro.modelo);

    const modelosCarrosString = modelosCarrosFiltrados.join(', ');

    if (resposta24) {
        resposta24.innerText = modelosCarrosFiltrados.length > 0
            ? `Modelos de carros fabricados após ${anoLimite}: ${modelosCarrosString}`
            : `Nenhum carro fabricado após ${anoLimite}`;
    }
}

//Questão 25
const questao25 = (string: string) => {
    const resposta25 = document.getElementById('resposta25');

    const stringInvertida = string.split('').reverse().join('');

    if (resposta25) {
        resposta25.innerText = `String invertida: ${stringInvertida}`;
    }
}