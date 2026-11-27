let valores = [1, 2, 4, 6, 10, 8, 3]
valores.sort()
// for( let pos = 0; pos <= valores.length; pos++){
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }

//estrutura For simplificada:
for( let pos in valores){
    console.log(`A posição ${pos} possui o valor ${valores[pos]}`)
}