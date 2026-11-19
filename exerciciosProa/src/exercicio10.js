// Exercício 10
// Maioridade
const verificarIdade = function (idade){
    if(idade >= 18){
        return `${idade} anos. Você já é maior de idade`;
    } else{
        return `${idade} anos. Você ainda é menor de idade`;
    }
}

const idade = parseInt(prompt("Me informe a sua idade: "));
console.log(verificarIdade(idade));