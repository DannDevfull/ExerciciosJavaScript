var num = [5, 6, 7, 2, 1]

num.push(1)
// ou seja, que adicionar 1 na última posição.
// Mas esse 1 será reordenado por conta do num.sort()
// Se eu colocasse esse push(1) depois do num.sort(), ele iria primeiro ordenar os valores, e depois colocar o 1 no final.
num.sort()

console.log(num)
//Ou
console.log(`Nosso vetor é:${num}`)

console.log(`O vetor possui ${num.length} posições`)

console.log(`O primeiro valor de nosso vetor é ${num[0]}`)
// Para mostrarmos esses valores sem a formatação padrão que o JS faz, teriamos de escrever esse código acima varias vezes
// Mas, a opção correta é usar as estruturas de repetições: While, Do While e For

//

for( let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}

//Buscando valores em vetores
let pos = num.indexOf(5)
if( pos == -1 ){
    console.log('Valor não encontrado dentro do vetor')
}else{
    console.log(`O valor está na posição ${pos}`)
}

