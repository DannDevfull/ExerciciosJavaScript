let Notas = [2, 4, 6, 10, 8, 3, -1]
let count = 0

while( count < Notas.length){

    if( Notas[count] >= 7){
        console.log("Aprovado")
    }else if( Notas[count] >= 5  && Notas[count]< 7){
        console.log('Recuperação')
    }else if( Notas[count] >= 0 && Notas[count] <5){
        console.log('Reprovado')
    }else{
        console.log('Nota inválida')
    }
    count++
}

// Fiz o exercício abaixo primeiro. Mas existe a possibilidade do Ex. acima

// while( count < Notas.length){
//     if(Notas[count] >= 7){
//         console.log("Aprovado")
//     } else{
//         if(Notas[count] >= 5){
//             console.log("Recuperação")
//         } else{
//             if(Notas[count] >= 0){
//                 console.log("Reprovado")
//             }else{
//                 console.log("Nota inválida")
//             }
//         }
//     }
//     count++
// }