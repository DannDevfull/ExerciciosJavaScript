var p = 0
var i = 0
for(c = 1; c <= 20; c++){
    if(c % 2 == 0){
         p = p + 1
    }else{
        i = i + 1
    }
}
console.log(`foram encontramos ${p} números pares e ${i} ímpares`)

var senha = 1234
var tent = 1234
var c = 1
while (c <= 1){
    if( tent !== senha){
        console.log("Senha incorreta! Tente novamente")
    }else{
        console.log("Acesso permitido!")
    }
    c++
}

var opcao = 1
switch (opcao){
    case 1:
        console.log("Ver saldo")
        break
    case 2:
        console.log("Fazer depósito")
        break
    case 3:
        console.log("Sair")
        break
    default:
        console.log("opção inválida")

}