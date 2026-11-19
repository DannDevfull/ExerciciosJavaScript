// // Funções e Entrada de Dados com prompt


// // Exercício 1: Saudação
const saudacao = (nome) => {
    return `Olá, ${nome}! Seja bem vindo(a) à aula!`;
}

console.log(saudacao(prompt("Me informe o seu nome")));

console.log("");



// // Exercício 2: O dobro
const dobro = function (numero) {
    let dobro = numero * 2;
    return `O dobro do numero ${numero} é ${dobro}`;
}

console.log(dobro(parseInt(prompt("Me informe um número:"))));
// ou
// let resultadoDobro = parseInt(prompt("Me informe um valor:"));
// console.log(dobro(resultadoDobro));

console.log("");



// // exercício 3: Soma de dois números
function soma (a, b){
    let resultadoSoma = a + b;
    return `A soma dos números ${a} e ${b} é ${resultadoSoma}`;
}

let numero1 = parseInt(prompt("Me informa o primeiro valor"));
let numero2 = parseInt(prompt("Me informa o segundo valor"));


console.log(soma(numero1, numero2));


console.log("");


// // Exercpicio 4: Par ou Ímpar
const imparOuPar = (valor) => {
    if(valor % 2 == 0){
        return `O valor ${valor} digitado é Par`;
    }else{
        return `O valor ${valor} digitado é Ímpar`;
    }
};

console.log(imparOuPar(parseInt(prompt("Informe um valor para a verificação:"))));

console.log("");




// Exercício 5: Maior de dois
function maiorDeDois (valor1, valor2) {
        let maior = 0;

            if(valor1 > valor2){
                maior = valor1;
                return `O valor ${maior} é maior que o ${valor2}`;
            }else{
                maior = valor2;
                return `O valor ${maior} é maior que o ${valor1}`;
            }
        
}

    const valor1 = parseInt(prompt("Me informe o primeiro valor:"));
    const valor2 = parseInt(prompt("Me informe o segundo valor:"));

    console.log(maiorDeDois(valor1, valor2));

    console.log("");





// exercício 6: Média de notas
function calcularMedia (n1, n2, n3){
    const notas = [n1, n2, n3];
    let soma = 0
    for(let contadora = 0; contadora < notas.length; contadora++){
        soma += notas[contadora];
    }

    let media = soma / 3;
    return `O valor da média é ${media.toFixed(2)}`;
}

const n1 = parseFloat(prompt("Me diga a sua primeira nota"));
const n2 = parseFloat(prompt("Me diga a sua segunda nota"));
const n3 = parseFloat(prompt("Me diga a sua terceira nota"));

console.log(calcularMedia(n1, n2 ,n3));




