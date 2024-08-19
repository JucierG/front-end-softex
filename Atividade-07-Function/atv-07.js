// Questão 1
var questao1 = function () {
    var resposta1 = document.getElementById('resposta1');
    if (resposta1) {
        resposta1.innerHTML = '';
        resposta1.innerText += "\n            Estudar \u00E9 muito bom.\n            Paci\u00EAncia e persist\u00EAncia.\n            Revis\u00E3o \u00E9 a m\u00E3e do aprendizado.\n        ";
    }
};
//Questão 2
var questao2 = function () {
    var resposta2 = document.getElementById('resposta2');
    if (resposta2) {
        resposta2.innerHTML = '';
        for (var i = 0; i < 3; i++) {
            resposta2.innerText += "\n            Estudar \u00E9 muito bom.\n            Paci\u00EAncia e persist\u00EAncia.\n            Revis\u00E3o \u00E9 a m\u00E3e do aprendizado.\n        ";
        }
    }
};
//Questão 3
var questao3 = function (num1, num2) {
    var resposta3 = document.getElementById('resposta3');
    if (resposta3) {
        resposta3.innerHTML = '';
        for (var i = 0; i < 3; i++) {
            resposta3.innerText = "\n                ".concat(num1, " + ").concat(num2, " = ").concat(num1 + num2, "\n            ");
        }
    }
};
//Questão 4
var questao4 = function (num1, num2) {
    var resposta4 = document.getElementById('resposta4');
    var teste1 = num1 + num2;
    var teste2 = num1 * num2;
    if (resposta4) {
        resposta4.innerHTML = '';
        resposta4.innerText = "\n            Teste 1 = ".concat(teste1, "\n            Teste 2 = ").concat(teste2, "\n            Teste 1 + Teste 2 = ").concat(teste1 + teste2, "\n        ");
    }
};
//Questão 5
var questao5 = function (num1, num2) {
    var resposta5 = document.getElementById('resposta5');
    if (resposta5) {
        resposta5.innerHTML = '';
        resposta5.innerText = "\n           ".concat(num1, " + ").concat(num2, " = ").concat(num1 + num2, "\n        ");
    }
};
//Questão 6
var questao6 = function (num) {
    var resposta6 = document.getElementById('resposta6');
    if (resposta6) {
        resposta6.innerHTML = '';
        if (num % 2 === 0) {
            resposta6.innerText = "".concat(num, " \u00E9 par!");
        }
        else {
            resposta6.innerText = "".concat(num, " \u00E9 impar!");
        }
    }
};
//Questão 7
var questao7 = function (nota1, nota2, nota3) {
    var resposta7 = document.getElementById('resposta7');
    if (resposta7) {
        resposta7.innerHTML = '';
        resposta7.innerText = "A m\u00E9dia aritm\u00E9tica das notas \u00E9: ".concat(((nota1 + nota2 + nota3) / 3).toFixed(2));
    }
};
//Questão 8
var questao8 = function (peso, altura) {
    var resposta8 = document.getElementById('resposta8');
    if (resposta8) {
        resposta8.innerHTML = '';
        resposta8.innerText = "O seu IMC \u00E9: ".concat((peso / (altura * altura)).toFixed(2));
    }
};
//Questão 9
var questao9 = function (valor, percentagemDesconto) {
    var resposta9 = document.getElementById('resposta9');
    var desconto = valor * (percentagemDesconto / 100);
    if (resposta9) {
        resposta9.innerHTML = '';
        resposta9.innerText = "O valor com o desconto aplicado: ".concat((valor - desconto).toFixed(2));
    }
};
//Questão 10
var questao10 = function (salario) {
    var resposta10 = document.getElementById('resposta10');
    if (resposta10) {
        resposta10.innerHTML = '';
        if (salario <= 1903.98) {
            resposta10.innerText = "\n            Isento de imposto de renda!\n            ";
        }
        else if (salario > 1903.98 && salario <= 2826.65) {
            var imposto = salario * 0.075;
            resposta10.innerText = "\n            Voc\u00EA ter\u00E1 que pagar R$ ".concat(imposto.toFixed(2), " de imposto de renda.\n            ");
        }
        else if (salario > 2826.65 && salario <= 3751.05) {
            var imposto = salario * 0.15;
            resposta10.innerText = "\n            Voc\u00EA ter\u00E1 que pagar R$ ".concat(imposto.toFixed(2), " de imposto de renda.\n            ");
        }
        else if (salario > 3751.05 && salario <= 4664.68) {
            var imposto = salario * 0.225;
            resposta10.innerText = "\n            Voc\u00EA ter\u00E1 que pagar R$ ".concat(imposto.toFixed(2), " de imposto de renda.\n            ");
        }
        else {
            var imposto = salario * 0.275;
            resposta10.innerText = "\n            Voc\u00EA ter\u00E1 que pagar R$ ".concat(imposto.toFixed(2), " de imposto de renda.\n            ");
        }
    }
};
//Questão 11
var questao11 = function (listaNumeros) {
    var resposta11 = document.getElementById('resposta11');
    var somaValores = listaNumeros.reduce(function (value, acc) { return value + acc; }, 0);
    if (resposta11) {
        resposta11.innerHTML = '';
        resposta11.innerText = "\n        A m\u00E9dia artim\u00E9tica desses n\u00FAmeros \u00E9: ".concat(Math.round(somaValores / listaNumeros.length), "\n        ");
    }
};
//Questão 12
var questao12 = function (num) {
    var resposta12 = document.getElementById('resposta12');
    if (resposta12) {
        var pares = 0;
        var impares = 0;
        resposta12.innerHTML = '';
        for (var i = 0; i < num.length; i++) {
            var digito = Number(num[i]);
            if (digito % 2 === 0) {
                pares++;
            }
            else {
                impares++;
            }
        }
        resposta12.innerHTML = "Quantidade de d\u00EDgitos pares: ".concat(pares, " e \u00EDmpares: ").concat(impares);
    }
};
var questao13 = function (alunos) {
    var resposta13 = document.getElementById('resposta13');
    if (resposta13) {
        resposta13.innerHTML = '';
        var somaNotas = 0;
        for (var _i = 0, alunos_1 = alunos; _i < alunos_1.length; _i++) {
            var aluno = alunos_1[_i];
            somaNotas += aluno.nota;
        }
        var media = somaNotas / alunos.length;
        resposta13.innerText = "\n            A m\u00E9dia total dos alunos \u00E9: ".concat((media).toFixed(2), "\n        ");
    }
};
//Questão 14
var questao14 = function (anoNascimento) {
    var resposta14 = document.getElementById('resposta14');
    var anoAtual = new Date().getFullYear();
    var idade = anoAtual - anoNascimento;
    if (resposta14) {
        resposta14.innerHTML = '';
        resposta14.innerText = "Dado o seu ano de nascimento ".concat(anoNascimento, ", voc\u00EA tem ").concat(idade, " anos.");
    }
};
//Questão 15
var questao15 = function (num) {
    var resposta15 = document.getElementById('resposta15');
    if (resposta15) {
        resposta15.innerHTML = '';
        for (var i = 0; i <= 10; i++) {
            resposta15.innerText += "\n                ".concat(i, " x ").concat(num, " = ").concat(i * num, "\n            ");
        }
    }
};
//Questão 16
var questao16 = function () {
    var resposta16 = document.getElementById('resposta16');
    var numeroAleatorio = Number((Math.random() * 10).toFixed(0));
    var numeroTentativas = 0;
    var valida = false;
    while (!valida) {
        var tentativa = Number(prompt('Digite um número'));
        numeroTentativas++;
        if (numeroAleatorio === tentativa) {
            valida = true;
            if (resposta16) {
                resposta16.innerHTML = '';
                resposta16.innerText = "Voc\u00EA acertou o n\u00FAmero ap\u00F3s ".concat(numeroTentativas, " ").concat(numeroTentativas === 1 ? 'tentativa!' : 'tentativas!');
            }
        }
        else {
            if (tentativa < numeroAleatorio) {
                alert('O número é maior!');
            }
            else {
                alert('O número é menor!');
            }
        }
    }
};
//Questão 17
var questao17 = function (objeto, parametro) {
    var resposta17 = document.getElementById('resposta17');
    if (resposta17) {
        if (objeto.hasOwnProperty(parametro)) {
            resposta17.innerText = "No objeto informado existe o par\u00E2metro ".concat(parametro, "!");
        }
        else {
            resposta17.innerText = "No objeto informado n\u00E3o existe o par\u00E2metro ".concat(parametro, "!");
        }
    }
};
//Questão 18
var questao18 = function (valorCusto, lucro, frete) {
    var resposta18 = document.getElementById('resposta18');
    var calculaLucro = valorCusto * Number("0.".concat(lucro));
    if (resposta18) {
        resposta18.innerText = "O valor total do produto \u00E9 ".concat((valorCusto + calculaLucro + frete).toFixed(2));
    }
};
//Questão 19
var questao19 = function (palavra) {
    var resposta19 = document.getElementById('resposta19');
    var maiorPalavra = '';
    var atualPalavra = '';
    if (resposta19) {
        for (var i = 0; i < palavra.length; i++) {
            if (palavra[i] === ' ') {
                if (maiorPalavra.length < atualPalavra.length) {
                    maiorPalavra = atualPalavra;
                }
                atualPalavra = '';
            }
            else {
                atualPalavra += palavra[i];
            }
        }
        if (maiorPalavra.length < atualPalavra.length) {
            maiorPalavra = atualPalavra;
        }
        resposta19.innerText = "A maior palavra \u00E9 ".concat(maiorPalavra);
    }
};
//Questão 20
var questao20 = function (arrayStrings) {
    var resposta20 = document.getElementById('resposta20');
    if (resposta20) {
        var vertical = 0;
        for (var i = 0; i < arrayStrings.length; i++) {
            if (arrayStrings[i].length > vertical) {
                vertical = arrayStrings[i].length;
            }
        }
        var horizontal = vertical + 2;
        var resultado = '';
        var padRight = function (str, length, padChar) {
            if (padChar === void 0) { padChar = ' '; }
            while (str.length < length) {
                str += padChar;
            }
            return str;
        };
        resultado += '*'.repeat(horizontal) + '\n';
        for (var i = 0; i < arrayStrings.length; i++) {
            resultado += "*".concat(padRight(arrayStrings[i], vertical), "*\n");
        }
        resultado += '*'.repeat(horizontal);
        resposta20.innerText = resultado;
    }
};
//Questão 21
var questao21 = function (arrayStrings) {
    var resposta21 = document.getElementById('resposta21');
    if (resposta21) {
        var array5 = [];
        for (var i = 0; i < arrayStrings.length; i++) {
            if (arrayStrings[i].length > 5) {
                array5.push(arrayStrings[i]);
            }
        }
        resposta21.innerText = "O novo array com itens que tenham mais que 5 caracteres: ".concat(array5);
    }
};
//Questão 22
var questao22 = function (arrayObjetos) {
    var resposta22 = document.getElementById('resposta22');
    var autoresRepetidos = new Set();
    var autoresVistos = new Set();
    arrayObjetos.forEach(function (livro) {
        if (autoresVistos.has(livro.autor)) {
            autoresRepetidos.add(livro.autor);
        }
        else {
            autoresVistos.add(livro.autor);
        }
    });
    var autorRepetido = Array.from(autoresRepetidos)[0];
    if (resposta22) {
        resposta22.innerText = autorRepetido
            ? "O autor que se repetiu \u00E9: ".concat(autorRepetido)
            : 'Nenhum autor se repetiu';
    }
};
//Questão 23
var questao23 = function (arrayPessoas) {
    var resposta23 = document.getElementById('resposta23');
    if (arrayPessoas.length === 0) {
        if (resposta23) {
            resposta23.innerText = 'Nenhuma pessoa no array.';
        }
        return 'Nenhuma pessoa no array.';
    }
    var pessoaMaisVelha = arrayPessoas.reduce(function (maisVelha, pessoaAtual) {
        return pessoaAtual.idade > maisVelha.idade ? pessoaAtual : maisVelha;
    });
    if (resposta23) {
        resposta23.innerText = "A pessoa mais velha \u00E9: ".concat(pessoaMaisVelha.nome);
    }
};
//Questão 24
var questao24 = function (arrayCarros, anoLimite) {
    var resposta24 = document.getElementById('resposta24');
    var carrosFiltrados = arrayCarros.filter(function (carro) { return carro.ano > anoLimite; });
    var modelosCarrosFiltrados = carrosFiltrados.map(function (carro) { return carro.modelo; });
    var modelosCarrosString = modelosCarrosFiltrados.join(', ');
    if (resposta24) {
        resposta24.innerText = modelosCarrosFiltrados.length > 0
            ? "Modelos de carros fabricados ap\u00F3s ".concat(anoLimite, ": ").concat(modelosCarrosString)
            : "Nenhum carro fabricado ap\u00F3s ".concat(anoLimite);
    }
};
//Questão 25
var questao25 = function (string) {
    var resposta25 = document.getElementById('resposta25');
    var stringInvertida = string.split('').reverse().join('');
    if (resposta25) {
        resposta25.innerText = "String invertida: ".concat(stringInvertida);
    }
};
