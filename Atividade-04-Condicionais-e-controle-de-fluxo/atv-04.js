//Questão 1
var questao1 = function () {
    var numero = Number(prompt('Digite um número inteiro: '));
    var resposta1 = document.getElementById('resposta1');
    if (resposta1) {
        if (numero < 0) {
            resposta1.innerText = "O n\u00FAmero ".concat(numero, " \u00E9 negativo!");
        }
        else if (numero > 0) {
            resposta1.innerText = "O n\u00FAmero ".concat(numero, " \u00E9 positivo!");
        }
        else {
            resposta1.innerText = "O \u00E9 igual a 0!";
        }
    }
};
//Questão 2
var questao2 = function () {
    var idade = Number(prompt('Digite sua idade: '));
    var resposta2 = document.getElementById('resposta2');
    if (resposta2) {
        if (idade < 18) {
            resposta2.innerText = "Sua idade \u00E9 ".concat(idade, ", logo voc\u00EA \u00E9 menor de idade!");
        }
        else {
            resposta2.innerText = "Sua idade \u00E9 ".concat(idade, ", logo voc\u00EA \u00E9 maior de idade!");
        }
    }
};
//Questão 3
var questao3 = function () {
    var numero1 = Number(prompt('Digite o primeiro número: '));
    var numero2 = Number(prompt('Digite o segundo número: '));
    var resposta3 = document.getElementById('resposta3');
    if (resposta3) {
        if (numero1 > numero2) {
            resposta3.innerText = "".concat(numero1, " \u00E9 maior que ").concat(numero2);
            ;
        }
        else if (numero1 < numero2) {
            resposta3.innerText = "".concat(numero1, " \u00E9 menor que ").concat(numero2);
        }
        else {
            resposta3.innerText = "Seus n\u00FAmeros s\u00E3o iguais!";
        }
    }
};
//Questão 4
var questao4 = function () {
    var numero = Number(prompt('Digite seu número: '));
    var resposta4 = document.getElementById('resposta4');
    if (resposta4) {
        if (numero % 2 === 0) {
            resposta4.innerText = "".concat(numero, " \u00E9 par!");
        }
        else {
            resposta4.innerText = "".concat(numero, " \u00E9 impar!");
        }
    }
};
//Questão 5
var questao5 = function () {
    var nota1 = Number(prompt('Digite sua primeira nota: '));
    var nota2 = Number(prompt('Digite sua segunda nota: '));
    var nota3 = Number(prompt('Digite sua terceira nota: '));
    var media = (nota1 + nota2 + nota3) / 3;
    var resposta5 = document.getElementById('resposta5');
    if (resposta5) {
        if (media >= 7) {
            resposta5.innerText = "\n            nota 1: ".concat(nota1, "\n            nota 2: ").concat(nota2, "\n            nota 3: ").concat(nota3, "\n\n            m\u00E9dia: ").concat(media.toFixed(2), "\n\n            situa\u00E7\u00E3o: Aprovado\n            ");
        }
        else {
            resposta5.innerText = "\n            nota 1: ".concat(nota1, "\n            nota 2: ").concat(nota2, "\n            nota 3: ").concat(nota3, "\n\n            m\u00E9dia: ").concat(media.toFixed(2), "\n\n            situa\u00E7\u00E3o: Reprovado\n            ");
        }
    }
};
//Questão 6
var questao6 = function () {
    var primeiroNome = prompt('Digite o primeiro nome: ');
    var segundoNome = prompt('Digite o segundo nome: ');
    var resposta6 = document.getElementById('resposta6');
    if (resposta6) {
        if (primeiroNome && segundoNome) {
            if (primeiroNome.length > segundoNome.length) {
                resposta6.innerText = "O nome ".concat(primeiroNome, " tem maior n\u00FAmero de caracteres que ").concat(segundoNome, "!");
            }
            else if (primeiroNome.length < segundoNome.length) {
                resposta6.innerText = "O nome ".concat(segundoNome, " tem maior n\u00FAmero de caracteres que ").concat(primeiroNome, "!");
            }
            else {
                resposta6.innerText = "".concat(primeiroNome, " e ").concat(segundoNome, " tem o mesmo n\u00FAmero de caracteres!");
            }
        }
    }
};
//Questão 7
var questao7 = function () {
    var letra = prompt('Digite uma letra: ');
    var letraMin = letra === null || letra === void 0 ? void 0 : letra.toLowerCase();
    var tipo;
    var resposta7 = document.getElementById('resposta7');
    switch (letraMin) {
        case 'a' || 'e' || 'i' || 'o' || 'u':
            tipo = 'vogal';
            break;
        default:
            tipo = 'consoante';
            break;
    }
    if (resposta7) {
        resposta7.innerText = "A letra ".concat(letra, " \u00E9 uma ").concat(tipo, "!");
    }
};
//Questão 8
var questao8 = function () {
    var ordem = [3];
    var numero1 = Number(prompt('Digite o primeiro número: '));
    var numero2 = Number(prompt('Digite o segundo número: '));
    var numero3 = Number(prompt('Digite o terceiro número: '));
    if (numero1 > numero2 && numero1 > numero3) {
        ordem[0] = numero1;
    }
    else if (numero1 < numero2 && numero1 < numero3) {
        ordem[2] = numero1;
    }
    else {
        ordem[1] = numero1;
    }
    if (numero2 > numero1 && numero2 > numero3) {
        ordem[0] = numero2;
    }
    else if (numero2 < numero1 && numero2 < numero3) {
        ordem[2] = numero2;
    }
    else {
        ordem[1] = numero2;
    }
    if (numero3 > numero2 && numero3 > numero1) {
        ordem[0] = numero3;
    }
    else if (numero3 < numero2 && numero3 < numero1) {
        ordem[2] = numero3;
    }
    else {
        ordem[1] = numero3;
    }
    var resposta8 = document.getElementById('resposta8');
    if (resposta8) {
        resposta8.innerText = "Os n\u00FAmeros informados em ordem crescente \u00E9: ".concat(ordem[2], ", ").concat(ordem[1], " e ").concat(ordem[0]);
    }
};
//Questão 9
var questao9 = function () {
    var peso = Number(prompt('Digite o seu peso: '));
    var altura = Number(prompt('Digite sua altura: '));
    var imc = (peso / (altura * altura));
    var resposta9 = document.getElementById('resposta9');
    if (resposta9) {
        if (imc < 18.5) {
            resposta9.innerText = "Com o IMC de ".concat(imc.toFixed(2), " voc\u00EA est\u00E1 abaixo do peso!");
        }
        else if (imc >= 18.5 && imc <= 24.9) {
            resposta9.innerText = "Com o IMC de ".concat(imc.toFixed(2), " voc\u00EA est\u00E1 com o peso normal!");
        }
        else if (imc >= 25 && imc <= 29.9) {
            resposta9.innerText = "Com o IMC de ".concat(imc.toFixed(2), " voc\u00EA est\u00E1 com sobrepreso!");
        }
        else {
            resposta9.innerText = "Com o IMC de ".concat(imc.toFixed(2), " voc\u00EA est\u00E1 obeso!");
        }
    }
};
//Questão 10
var questao10 = function () {
    var numMes = Number(prompt('Digite um número: '));
    var resposta10 = document.getElementById('resposta10');
    if (resposta10) {
        switch (numMes) {
            case 1:
                resposta10.innerText = "O m\u00EAs correspondente ao n\u00FAmero ".concat(numMes, " \u00E9 Janeiro!");
                break;
            case 2:
                resposta10.innerText = "O m\u00EAs correspondente ao n\u00FAmero ".concat(numMes, " \u00E9 Fevereiro!");
                break;
            case 3:
                resposta10.innerText = "O m\u00EAs correspondente ao n\u00FAmero ".concat(numMes, " \u00E9 Mar\u00E7o!");
                break;
            case 4:
                resposta10.innerText = "O m\u00EAs correspondente ao n\u00FAmero ".concat(numMes, " \u00E9 Abril!");
                break;
            case 5:
                resposta10.innerText = "O m\u00EAs correspondente ao n\u00FAmero ".concat(numMes, " \u00E9 Maio!");
                break;
            case 6:
                resposta10.innerText = "O m\u00EAs correspondente ao n\u00FAmero ".concat(numMes, " \u00E9 Junho!");
                break;
            case 7:
                resposta10.innerText = "O m\u00EAs correspondente ao n\u00FAmero ".concat(numMes, " \u00E9 Julho!");
                break;
            case 8:
                resposta10.innerText = "O m\u00EAs correspondente ao n\u00FAmero ".concat(numMes, " \u00E9 Agosto!");
                break;
            case 9:
                resposta10.innerText = "O m\u00EAs correspondente ao n\u00FAmero ".concat(numMes, " \u00E9 Setembro!");
                break;
            case 10:
                resposta10.innerText = "O m\u00EAs correspondente ao n\u00FAmero ".concat(numMes, " \u00E9 Outubro!");
                break;
            case 11:
                resposta10.innerText = "O m\u00EAs correspondente ao n\u00FAmero ".concat(numMes, " \u00E9 Novembro!");
                break;
            case 12:
                resposta10.innerText = "O m\u00EAs correspondente ao n\u00FAmero ".concat(numMes, " \u00E9 Dezembro!");
                break;
            default:
                resposta10.innerText = "N\u00E3o existe m\u00EAs correspondente ao n\u00FAmero ".concat(numMes, "!");
                break;
        }
    }
};
//Questão 11
var questao11 = function () {
    var salario = Number(prompt('Digite seu salário: '));
    var resposta11 = document.getElementById('resposta11');
    if (resposta11) {
        if (salario > 1500) {
            resposta11.innerText = "Voc\u00EA recebeu um aumento de ".concat(salario * 0.10, ", seu novo sal\u00E1rio \u00E9 ").concat(salario + (salario * 0.10));
        }
        else {
            resposta11.innerText = "Voc\u00EA recebeu um aumento de ".concat(salario * 0.15, ", seu novo sal\u00E1rio \u00E9 ").concat(salario + (salario * 0.15));
        }
    }
};
//Questão 12
var questao12 = function () {
    var numero = Number(prompt('Digite um número: '));
    var resposta12 = document.getElementById('resposta12');
    if (resposta12) {
        if (numero % 5 === 0 && numero % 3 === 0) {
            resposta12.innerText = "O n\u00FAmero ".concat(numero, " \u00E9 divis\u00EDvel por 3 e 5!");
        }
        else {
            resposta12.innerText = "O n\u00FAmero ".concat(numero, " n\u00E3o \u00E9 divis\u00EDvel por 3 e 5!");
        }
    }
};
//Questão 13
var questao13 = function () {
    var diaSemana = prompt('Digite um dia da semana: ');
    var diaSemanaLw = diaSemana === null || diaSemana === void 0 ? void 0 : diaSemana.toLowerCase();
    var resposta13 = document.getElementById('resposta13');
    if (resposta13) {
        if (diaSemanaLw === 'sábado' || diaSemanaLw === 'sabado' || diaSemanaLw === 'domingo') {
            resposta13.innerText = "O dia informado est\u00E1 no final de semana!";
        }
        else {
            resposta13.innerText = "O dia informado \u00E9 um dia \u00FAtil!";
        }
    }
};
//Questão 14
var questao14 = function () {
    var diaSemana = Number(prompt('Digite um número de 1 a 5: '));
    var resposta14 = document.getElementById('resposta14');
    if (resposta14) {
        switch (diaSemana) {
            case 1:
                resposta14.innerText = "Muito insuficiente!";
                break;
            case 2:
                resposta14.innerText = "Insuficiente!";
                break;
            case 3:
                resposta14.innerText = "Regular!";
                break;
            case 4:
                resposta14.innerText = "Bom!";
                break;
            case 5:
                resposta14.innerText = "Muito bom!";
                break;
            default:
                resposta14.innerText = "Entrada inv\u00E1lida!";
                break;
        }
    }
};
//Questão 15
var questao15 = function () {
    var numero = Number(prompt('Digite um número entre 1 a 7: '));
    var resposta15 = document.getElementById('resposta15');
    if (resposta15) {
        switch (numero) {
            case 1:
                resposta15.innerText = "O dia ".concat(numero, " \u00E9 Domingo!");
                break;
            case 2:
                resposta15.innerText = "O dia ".concat(numero, " \u00E9 Segunda-feira!");
                break;
            case 3:
                resposta15.innerText = "O dia ".concat(numero, " \u00E9 Te\u00E7a-feira!");
                break;
            case 4:
                resposta15.innerText = "O dia ".concat(numero, " \u00E9 Quarta-feira!");
                break;
            case 5:
                resposta15.innerText = "O dia ".concat(numero, " \u00E9 Quinta-feira!");
                break;
            case 6:
                resposta15.innerText = "O dia ".concat(numero, " \u00E9 Sexta-feira!");
                break;
            case 7:
                resposta15.innerText = "O dia ".concat(numero, " \u00E9 S\u00E1bado!");
                break;
            default:
                resposta15.innerText = "Entrada inv\u00E1lida!";
                break;
        }
    }
};
//Questão 16
var questao16 = function () {
    var numeroDecimal = Number(prompt('Digite um número decimal: '));
    var resposta16 = document.getElementById('resposta16');
    try {
        if (resposta16) {
            resposta16.innerText = "Seu n\u00FAmero convertido para inteiro \u00E9: ".concat(Math.round(numeroDecimal));
        }
    }
    catch (error) {
        if (resposta16) {
            resposta16.innerText = "Algo deu errado...";
        }
        console.log(error);
    }
};
//Questão 17
var questao17 = function () {
    var idade = Number(prompt('Digite sua idade: '));
    var resposta17 = document.getElementById('resposta17');
    if (resposta17) {
        if (idade >= 0 && idade <= 1) {
            resposta17.innerText = "Voc\u00EA tem ".concat(idade, " anos e \u00E9 um beb\u00EA!");
        }
        else if (idade > 1 && idade <= 12) {
            resposta17.innerText = "Voc\u00EA tem ".concat(idade, " anos e \u00E9 uma crian\u00E7a!");
        }
        else if (idade >= 13 && idade <= 18) {
            resposta17.innerText = "Voc\u00EA tem ".concat(idade, " anos e \u00E9 um adolescente!");
        }
        else {
            resposta17.innerText = "Voc\u00EA tem ".concat(idade, " anos e \u00E9 um adulto!");
        }
    }
};
//Questão 18
var questao18 = function () {
    var _a;
    var estadoCivil = (_a = prompt('Digite seu estado cívil: ')) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    var resposta18 = document.getElementById('resposta18');
    if (resposta18) {
        switch (estadoCivil) {
            case 'solteiro' || 'solteira':
                resposta18.innerText = "voc\u00EA \u00E9 ".concat(estadoCivil, ", eita encalhado(a)!");
                break;
            case 'casado' || 'casada':
                resposta18.innerText = "Voc\u00EA \u00E9 ".concat(estadoCivil, ", o romantismo \u00E9 lindo!");
                break;
            case 'divorciado' || 'divorciada':
                resposta18.innerText = "Voc\u00EA \u00E9 ".concat(estadoCivil, ", voc\u00EA vai encontrar algu\u00E9m melhor!");
                break;
            case 'viúvo' || 'viuvo' || 'viúva' || 'viuva':
                resposta18.innerText = "Voc\u00EA \u00E9 ".concat(estadoCivil, ", meus p\u00EAsames :/");
                break;
            default:
                resposta18.innerText = "Entrada inv\u00E1lida!";
                break;
        }
    }
};
//Questão 19
var questao19 = function () {
    var primeiroNumero = Number(prompt('Digite o primeiro número: '));
    var segundoNumero = Number(prompt('Digite o segundo número: '));
    var operacao = Number(prompt('Escolha uma operação: 1 - Soma / 2 - Subtração / 3 - Multiplicação / 4 - Divisão'));
    var resposta19 = document.getElementById('resposta19');
    if (resposta19) {
        switch (operacao) {
            case 1:
                resposta19.innerText = "A soma do n\u00FAmero ".concat(primeiroNumero, " e ").concat(segundoNumero, " \u00E9 igual a ").concat(primeiroNumero + segundoNumero);
                break;
            case 2:
                resposta19.innerText = "A subtra\u00E7\u00E3o do n\u00FAmero ".concat(primeiroNumero, " e ").concat(segundoNumero, " \u00E9 igual a ").concat(primeiroNumero - segundoNumero);
                break;
            case 3:
                resposta19.innerText = "A multiplica\u00E7\u00E3o do n\u00FAmero ".concat(primeiroNumero, " e ").concat(segundoNumero, " \u00E9 igual a ").concat(primeiroNumero * segundoNumero);
                break;
            case 4:
                resposta19.innerText = "A divis\u00E3o do n\u00FAmero ".concat(primeiroNumero, " e ").concat(segundoNumero, " \u00E9 igual a ").concat(primeiroNumero / segundoNumero);
                break;
            default:
                resposta19.innerText = "Entrada inv\u00E1lida!";
                break;
        }
    }
};
//Questão 20
var questao20 = function () {
    var nome = Number(prompt('Digite o primeiro número: '));
    var resposta20 = document.getElementById('resposta20');
    if (resposta20) {
        try {
            var idade = Number(prompt('Digite o segundo número: '));
            resposta20.innerText = "Ol\u00E1 ".concat(nome, " voc\u00EA tem ").concat(idade, " anos!");
        }
        catch (error) {
            resposta20.innerText = "N\u00FAmero inv\u00E1lido";
        }
    }
};
//Questão 21
var questao21 = function () {
    var metros = Number(prompt('Digite um valor em metros: '));
    var resposta21 = document.getElementById('resposta21');
    if (resposta21) {
        try {
            resposta21.innerText = "O valor em centr\u00EDmetos \u00E9 igual a ".concat(metros * 100, "\n            O valor em mil\u00EDmetros \u00E9 igual a ").concat(metros * 1000, "\n            O valor em quilometros \u00E9 igual a ").concat(metros * 0.001, "\n            ");
        }
        catch (error) {
            resposta21.innerText = "Algo deu errado...";
        }
    }
};
