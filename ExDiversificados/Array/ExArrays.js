//Exercício de Arrays
//Ex01:
let frutas = ["morango", "uva", "banana", "mexirica", "melancia"]
console.log(`O seu vetor possui ${frutas.length} elementos`)
console.log(frutas[0])
console.log(frutas[4])
//considerando que ele começa do número 0

//Ex02:
let none = []
none.push(1, 3, 5)
none.unshift(5)
//unshift adiciona um número de inicio

//visualize as modificações
console.log(none)

none.pop()
//elimina o último elemento de meu vetor

none.shift()
console.log(none)


//Ex03:
let vet = [4, 8, 15, 16, 23, 42]

for(let pos in vet){
    let dub = vet[pos] * 2
    console.log(dub)
}
//não utilizei o For...of pois o que aprendi sobre arrays é bem introdutório


//Ex04:
let nota = [7.5, 4.0, 9.0, 6.5, 3.5, 10]
let med = 0
let maior = 0
let soma = 0
console.log(`O número de notas desse boletim é ${nota.length}`)
for( let pos in nota){
     soma = soma + nota[pos]

    if(nota[pos] > maior){
        maior = nota[pos]
    }

}
med = soma / 6

console.log(`A soma de todas as notas foi de ${soma}`)
console.log(`A média desse boletim é ${med}`)
console.log(`A maior nota obtida foi ${maior}`)





