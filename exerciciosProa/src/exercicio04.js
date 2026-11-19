// // Exercpicio 4: Par ou Ímpar
const imparOuPar = (valor) => {
    if(valor % 2 == 0){
        return `O valor ${valor} digitado é Par`;
    }else{
        return `O valor ${valor} digitado é Ímpar`;
    }
};

console.log(imparOuPar(parseInt(prompt("Informe um valor para a verificação:"))));


