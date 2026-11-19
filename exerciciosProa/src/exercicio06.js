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


