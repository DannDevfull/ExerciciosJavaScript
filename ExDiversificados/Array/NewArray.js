let Vendas = [120, 85, 300, 45, 210, 150, 95]
let Soma = 0
let Maior = 0
let posMaior = 0
let Menor = Vendas[0]
let Media = 0

for (let contador = 0; contador < Vendas.length; contador++){
    Soma = Soma + Vendas[contador]
   
    if(Vendas[contador] > Maior){
        Maior = Vendas[contador]
    }

    if(Menor > Vendas[contador]){
         Menor = Vendas[contador]
        //  Considere que Menor estará mais com a Posição 0;
        //  mas estará  varrendo o vetor com as posições posteriores
    }
}
Media = Soma / Vendas.length
posMaior = Vendas.indexOf(Maior)

console.log(`A soma do array foi de ${Soma}`)
console.log(`A média diária é de ${Media.toFixed(2)}`)
console.log(`O Maior e o Menor número dentro do meu array, respectivamente, foi de ${Maior} e ${Menor}`)
console.log(`A posição do Maior número de meu vetor é ${posMaior}`)