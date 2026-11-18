// Funções e Entrada de Dados com prompt

// Exercício 1: Saudação

const saudacao = (nome) => {
    return `Olá, ${nome}! Seja bem vindo(a) à aula!`;
}

console.log(saudacao(prompt("Me informe o seu nome")));



// Exercício 2: O dobro

const dobro = function (numero) {
    let dobro = numero * 2;
    return `O dobro do numero ${numero} é ${dobro}`;
}

console.log(dobro(parseInt(prompt("Me informe um número:"))));
// ou
// let resultadoDobro = parseInt(prompt("Me informe um valor:"));
// console.log(dobro(resultadoDobro));



// exercício 3: Soma de dois números

function soma (a, b){
    let resultadoSoma = a + b;
    return `A soma dos números ${a} e ${b} é ${resultadoSoma}`;
}

let valor1 = parseInt(prompt("Me informa o primeiro valor"));
let valor2 = parseInt(prompt("Me informa o segundo valor"));


console.log(soma(valor1, valor2));


