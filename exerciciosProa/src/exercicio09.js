// Exercício 09
// Desconto
function calcularDesconto (preco, percentual){
    if (percentual > 30){
        return `O valor escolhido de percentual ultrapassa os limites estabelecidos!`;
    }else{
        let desconto = (preco * percentual) / 100;
        let newPreco = preco - desconto;

        return `O novo valor com ${percentual}% de desconto é: R$${newPreco}`;
    }
}

const preco = parseFloat(prompt("Qual é o valor do produto comprado?"));
const percentual = parseFloat(
    prompt(`Qual é o valor de percentual desejado para usar na compra?
    (Lembre-se: O máximo é de 30%)`));

console.log(calcularDesconto(preco, percentual));