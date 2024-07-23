//Questão 1
const questao1 = () => { 
    const numero: number = Number(prompt('Digite um número inteiro: '));
    
    const resposta1 = document.getElementById('resposta1');

    if (resposta1) {
        if(numero < 0){
            resposta1.innerText = `O número ${numero} é negativo!`
        } else if(numero > 0){
            resposta1.innerText = `O número ${numero} é positivo!`
        } else {
            resposta1.innerText = `O é igual a 0!`
        }
    }
}

//Questão 2
const questao2 = () => { 
    const idade: number = Number(prompt('Digite sua idade: '));
    
    const resposta2 = document.getElementById('resposta2');

    if (resposta2) {
        if(idade < 18){
            resposta2.innerText = `Sua idade é ${idade}, logo você é menor de idade!`
        } else {
            resposta2.innerText = `Sua idade é ${idade}, logo você é maior de idade!`
        }
    }
}

//Questão 3
const questao3 = () => {
    const numero1: number = Number(prompt('Digite o primeiro número: '));
    const numero2: number = Number(prompt('Digite o segundo número: '));

    const resposta3 = document.getElementById('resposta3');

    if (resposta3) {
        if(numero1 > numero2){
            resposta3.innerText = `${numero1} é maior que ${numero2}`;;
        } else if(numero1 < numero2) {
            resposta3.innerText = `${numero1} é menor que ${numero2}`;
        } else {
            resposta3.innerText = `Seus números são iguais!`;
        }
    } 
}

//Questão 4
const questao4 = () => {
    const numero: number = Number(prompt('Digite seu número: '));

    const resposta4 = document.getElementById('resposta4');

    if (resposta4) {
        if(numero % 2 === 0){
            resposta4.innerText = `${numero} é par!`;
        } else {
            resposta4.innerText = `${numero} é impar!`;
        }
    } 
}

//Questão 5
const questao5 = () => {
    const nota1: number = Number(prompt('Digite sua primeira nota: '));
    const nota2: number = Number(prompt('Digite sua segunda nota: '));
    const nota3: number = Number(prompt('Digite sua terceira nota: '));

    const media = (nota1 + nota2 + nota3) / 3 

    const resposta5 = document.getElementById('resposta5');

    if (resposta5) {
        if(media >= 7){
            resposta5.innerText = `
            nota 1: ${nota1}
            nota 2: ${nota2}
            nota 3: ${nota3}

            média: ${media.toFixed(2)}

            situação: Aprovado
            `;
        } else {
            resposta5.innerText = `
            nota 1: ${nota1}
            nota 2: ${nota2}
            nota 3: ${nota3}

            média: ${media.toFixed(2)}

            situação: Reprovado
            `;
        }
    } 
}

//Questão 6
const questao6 = () => {
    const primeiroNome: string | null = prompt('Digite o primeiro nome: ');
    const segundoNome: string | null = prompt('Digite o segundo nome: ');

    const resposta6 = document.getElementById('resposta6');

    if (resposta6) {

        if (primeiroNome && segundoNome) {

            if(primeiroNome.length > segundoNome.length){
                resposta6.innerText = `O nome ${primeiroNome} tem maior número de caracteres que ${segundoNome}!`;
            } else if(primeiroNome.length < segundoNome.length) {
                resposta6.innerText = `O nome ${segundoNome} tem maior número de caracteres que ${primeiroNome}!`;
            } else {
                resposta6.innerText = `${primeiroNome} e ${segundoNome} tem o mesmo número de caracteres!`;
            }
        } 
    } 
}

//Questão 7
const questao7 = () => {
    const letra: string | null = prompt('Digite uma letra: ');
    const letraMin = letra?.toLowerCase();

    let tipo: string;

    const resposta7 = document.getElementById('resposta7');

    switch (letraMin) {
        case 'a' || 'e' || 'i' || 'o' || 'u':
            tipo = 'vogal';
            break;
        default:
            tipo = 'consoante';
            break;
    }

    if (resposta7) {
        resposta7.innerText = `A letra ${letra} é uma ${tipo}!`;
    } 
}

//Questão 8
const questao8 = () => {
    let ordem: number[] = [3];

    const numero1: number = Number(prompt('Digite o primeiro número: '));
    const numero2: number = Number(prompt('Digite o segundo número: ')); 
    const numero3: number = Number(prompt('Digite o terceiro número: '));
    
    if (numero1 > numero2 && numero1 > numero3) {
        ordem[0] = numero1;
    } else if (numero1 < numero2 && numero1 < numero3) {
        ordem[2] = numero1;
    } else {
        ordem[1] = numero1;
    }

    if (numero2 > numero1 && numero2 > numero3) {
        ordem[0] = numero2;
    } else if (numero2 < numero1 && numero2 < numero3) {
        ordem[2] = numero2;
    } else {
        ordem[1] = numero2;
    }

    if (numero3 > numero2 && numero3 > numero1) {
        ordem[0] = numero3;
    } else if (numero3 < numero2 && numero3 < numero1) {
        ordem[2] = numero3;
    } else {
        ordem[1] = numero3;
    }
    
    const resposta8 = document.getElementById('resposta8');

    if (resposta8) {
        resposta8.innerText= `Os números informados em ordem crescente é: ${ordem[2]}, ${ordem[1]} e ${ordem[0]}`;
    }
}

//Questão 9
const questao9 = () => {
    const peso: number = Number(prompt('Digite o seu peso: '));
    const altura: number = Number(prompt('Digite sua altura: '));

    const imc = (peso / (altura * altura));
    
    const resposta9 = document.getElementById('resposta9');

    if (resposta9) {
        if (imc < 18.5) {
            resposta9.innerText= `Com o IMC de ${imc.toFixed(2)} você está abaixo do peso!`;
        } else if (imc >= 18.5 && imc <= 24.9) {
            resposta9.innerText= `Com o IMC de ${imc.toFixed(2)} você está com o peso normal!`;
        } else if (imc >= 25 && imc <= 29.9 ) {
            resposta9.innerText= `Com o IMC de ${imc.toFixed(2)} você está com sobrepreso!`;
        } else {
            resposta9.innerText= `Com o IMC de ${imc.toFixed(2)} você está obeso!`;
        }
    }
}

//Questão 10
const questao10 = () => {
    const numMes: number = Number(prompt('Digite um número: '));
    
    const resposta10 = document.getElementById('resposta10');

    if (resposta10) {
        switch (numMes) {
            case 1:
                resposta10.innerText = `O mês correspondente ao número ${numMes} é Janeiro!`;
                break;
            case 2:
                resposta10.innerText = `O mês correspondente ao número ${numMes} é Fevereiro!`;
                break;
            case 3:
                resposta10.innerText = `O mês correspondente ao número ${numMes} é Março!`;
                break;
            case 4:
                resposta10.innerText = `O mês correspondente ao número ${numMes} é Abril!`;
                break;
            case 5:
                resposta10.innerText = `O mês correspondente ao número ${numMes} é Maio!`;
                break;
            case 6:
                resposta10.innerText = `O mês correspondente ao número ${numMes} é Junho!`;
                break;
            case 7:
                resposta10.innerText = `O mês correspondente ao número ${numMes} é Julho!`;
                break;
            case 8:
                resposta10.innerText = `O mês correspondente ao número ${numMes} é Agosto!`;
                break;
            case 9:
                resposta10.innerText = `O mês correspondente ao número ${numMes} é Setembro!`;
                break;
            case 10:
                resposta10.innerText = `O mês correspondente ao número ${numMes} é Outubro!`;
                break;
            case 11:
                resposta10.innerText = `O mês correspondente ao número ${numMes} é Novembro!`;
                break;
            case 12:
                resposta10.innerText = `O mês correspondente ao número ${numMes} é Dezembro!`;
                break;
            default:
                resposta10.innerText = `Não existe mês correspondente ao número ${numMes}!`;
                break;
        }
    }
}

//Questão 11
const questao11 = () => {
    let salario: number = Number(prompt('Digite seu salário: '));
    
    const resposta11 = document.getElementById('resposta11');

    if (resposta11) {
        if (salario > 1500) {
            resposta11.innerText = `Você recebeu um aumento de ${salario * 0.10}, seu novo salário é ${salario + (salario * 0.10)}`;
        } else {
            resposta11.innerText = `Você recebeu um aumento de ${salario * 0.15}, seu novo salário é ${salario + (salario * 0.15)}`;
        }
    }
}

//Questão 12
const questao12 = () => {
    const numero: number = Number(prompt('Digite um número: '));
    
    const resposta12 = document.getElementById('resposta12');

    if (resposta12) {
        if (numero % 5 === 0 && numero % 3 === 0) {
            resposta12.innerText = `O número ${numero} é divisível por 3 e 5!`;
        } else {
            resposta12.innerText = `O número ${numero} não é divisível por 3 e 5!`;
        }
    }
}

//Questão 13
const questao13 = () => {
    const diaSemana: string | null = prompt('Digite um dia da semana: ');
    const diaSemanaLw = diaSemana?.toLowerCase();
    
    const resposta13 = document.getElementById('resposta13');

    if (resposta13) {
        if (diaSemanaLw === 'sábado' || diaSemanaLw === 'sabado' || diaSemanaLw === 'domingo') {
            resposta13.innerText = `O dia informado está no final de semana!`;
        } else {
            resposta13.innerText = `O dia informado é um dia útil!`;
        }
    }
}

//Questão 14
const questao14 = () => {
    const diaSemana: number = Number(prompt('Digite um número de 1 a 5: '));
    
    const resposta14 = document.getElementById('resposta14');

    if (resposta14) {
        switch (diaSemana) {
            case 1:
                resposta14.innerText = `Muito insuficiente!`;
                break;
            case 2:
                resposta14.innerText = `Insuficiente!`;
                break;
            case 3:
                resposta14.innerText = `Regular!`;
                break;
            case 4:
                resposta14.innerText = `Bom!`;
                break;
            case 5:
                resposta14.innerText = `Muito bom!`;
                break;
            default:
                resposta14.innerText = `Entrada inválida!`;
                break;
        }
    }
}

//Questão 15
const questao15 = () => {
    const numero: number = Number(prompt('Digite um número entre 1 a 7: '));
    
    const resposta15 = document.getElementById('resposta15');

    if (resposta15) {
        switch (numero) {
            case 1:
                resposta15.innerText = `O dia ${numero} é Domingo!`;
                break;
            case 2:
                resposta15.innerText = `O dia ${numero} é Segunda-feira!`;
                break;
            case 3:
                resposta15.innerText = `O dia ${numero} é Teça-feira!`;
                break;
            case 4:
                resposta15.innerText = `O dia ${numero} é Quarta-feira!`;
                break;
            case 5:
                resposta15.innerText = `O dia ${numero} é Quinta-feira!`;
                break;
            case 6:
                resposta15.innerText = `O dia ${numero} é Sexta-feira!`;
                break;
            case 7:
                resposta15.innerText = `O dia ${numero} é Sábado!`;
                break;
            default:
                resposta15.innerText = `Entrada inválida!`;
                break;
        }
    }
}

//Questão 16
const questao16 = () => {
    const numeroDecimal: number = Number(prompt('Digite um número decimal: '));
    
    const resposta16 = document.getElementById('resposta16');

    try {
        if (resposta16) {
            resposta16.innerText = `Seu número convertido para inteiro é: ${Math.round(numeroDecimal)}`; 
        }
    } catch (error) {
        if (resposta16) {
            resposta16.innerText = `Algo deu errado...`; 
        }

        console.log(error);
    }    
}

//Questão 17
const questao17 = () => {
    const idade: number = Number(prompt('Digite sua idade: '));
    
    const resposta17 = document.getElementById('resposta17');

    if (resposta17) {
        if (idade >= 0 && idade <= 1) {
            resposta17.innerText = `Você tem ${idade} anos e é um bebê!`;
        } else if (idade > 1 && idade <= 12) {
            resposta17.innerText = `Você tem ${idade} anos e é uma criança!`;
        } else if (idade >= 13 && idade <= 18) {
            resposta17.innerText = `Você tem ${idade} anos e é um adolescente!`;
        } else {
            resposta17.innerText = `Você tem ${idade} anos e é um adulto!`;
        }
    }
}

//Questão 18
const questao18 = () => {
    const estadoCivil: string | undefined = prompt('Digite seu estado cívil: ')?.toLowerCase();
    
    const resposta18 = document.getElementById('resposta18');

    if (resposta18) {
        switch (estadoCivil) {
            case 'solteiro' || 'solteira':
                resposta18.innerText = `você é ${estadoCivil}, eita encalhado(a)!`;
                break;
            case 'casado' || 'casada': 
                resposta18.innerText = `Você é ${estadoCivil}, o romantismo é lindo!`;
                break;
            case 'divorciado' || 'divorciada':
                resposta18.innerText = `Você é ${estadoCivil}, você vai encontrar alguém melhor!`;
                break;
            case 'viúvo' || 'viuvo' || 'viúva' || 'viuva':
                resposta18.innerText = `Você é ${estadoCivil}, meus pêsames :/`;
                break;
            default:
                resposta18.innerText = `Entrada inválida!`;
                break;
        }
    }
}

//Questão 19
const questao19 = () => {
    const primeiroNumero: number = Number(prompt('Digite o primeiro número: '));
    const segundoNumero: number = Number(prompt('Digite o segundo número: '));
    
    const operacao: number = Number(prompt('Escolha uma operação: 1 - Soma / 2 - Subtração / 3 - Multiplicação / 4 - Divisão'));

    const resposta19 = document.getElementById('resposta19');

    if (resposta19) {
        switch (operacao) {
            case 1 :
                resposta19.innerText = `A soma do número ${primeiroNumero} e ${segundoNumero} é igual a ${primeiroNumero + segundoNumero}`;
                break;
            case 2 : 
                resposta19.innerText = `A subtração do número ${primeiroNumero} e ${segundoNumero} é igual a ${primeiroNumero - segundoNumero}`;
                break;
            case 3 :
                resposta19.innerText = `A multiplicação do número ${primeiroNumero} e ${segundoNumero} é igual a ${primeiroNumero * segundoNumero}`;
                break;
            case 4 :
                resposta19.innerText = `A divisão do número ${primeiroNumero} e ${segundoNumero} é igual a ${primeiroNumero / segundoNumero}`;
                break;
            default:
                resposta19.innerText = `Entrada inválida!`;
                break;
        }
    }
}

//Questão 20
const questao20 = () => {
    const nome: number = Number(prompt('Digite o primeiro número: '));

    const resposta20 = document.getElementById('resposta20');

    if (resposta20) {
        try {
            const idade: number = Number(prompt('Digite o segundo número: '));

            resposta20.innerText = `Olá ${nome} você tem ${idade} anos!`;
        } catch (error) {
            resposta20.innerText = `Número inválido`
        }
    }  
}

//Questão 21
const questao21 = () => {
    const metros: number = Number(prompt('Digite um valor em metros: '));

    const resposta21 = document.getElementById('resposta21');

    if (resposta21) {
        try {
            resposta21.innerText = `O valor em centrímetos é igual a ${metros * 100}
            O valor em milímetros é igual a ${metros * 1000}
            O valor em quilometros é igual a ${metros * 0.001}
            `;
        } catch (error) {
            resposta21.innerText = `Algo deu errado...`
        }
    }  
}