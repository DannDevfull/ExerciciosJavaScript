var num = [3, 4, 5, 6, 7, 8]
console.log(num[0])
console.log(`A quatidade total de elementos desse vetor é ${num.length}`)

console.log("-------------------------")

let valores = [13, 14, 15, 40]
 valores.push(50)
//  Com o Push eu faço a inserção de um número sem me importar com o índice. Porém, posso indicar a posição que eu quero colocar determinado número:
// valores[6] = 60
console.log(valores)

console.log("-------------------------------")

let vet = [2, 4, 5, 2, 8, 10, 440, 120, 90, 77]
vet.sort()
console.log(vet)