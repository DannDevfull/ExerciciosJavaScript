var preco = 150

if(preco >= 100){
    console.log(`O seu salário atual era de ${preco}`)
    console.log("Está apto para um desconto de 10%")
    let desc = preco * 0.1
    let salario = preco - desc
     console.log(`O seu salário agora é de ${salario}`)
}else{
    console.log(`O seu saldo é de ${preco}`)
}

console.log("---------------------------")

var nota = 1
if( nota <= 4){
    console.log("Insuficiente")
}else if( nota <= 6){
    console.log("Regular")
}else if( nota <= 8){
    console.log("Bom")
}else{
    console.log("Excelente")
}

console.log("---------------------------")

var c1 = 6
var c2 = 9
var ope = "*"
switch(ope){
    case "*":
        console.log( `O valor da multiplicação é ${c1 * c2}`)
        break
    case "/":
        console.log( c1 / c2)
        break
    case "-":
        console.log( c1 - c2)
        break
    case "+":
        console.log(c1 + c2)
        break
    default:
        console.log("não existe essa operação")
        break
    
}

console.log("------------------------------------")

//Login simples
var usuário = "admin"
var senha = 1234

    if (usuário == "admin" && senha == 1234 ){
        console.log("Bem-vindo(a) de volta a sua conta pessoal")
    }else{
        for (c = 3; c >= 1; c--){
            console.log(`Senha e Usuário incorretos. Verifique-os e tente novamente [${c} Chances]`)
    }
    console.log("Conta bloqueada!")
}   
console.log("-----------------------------------------------")

//estruturas de repetição
var c = 10
/*while (c <= 10){
    if( c % 2 == 0){
        console.log(`O número ${c} é PAR`)
    }else{
        console.log("")
    }
    c++
}*/

while (c >= 0 ){
    console.log(`${c}`)
    c--
    
}
console.log("Fim da contagem regressiva")

//tabuada
console.log("Tabuada")
var fix = 9
for (cont = 1; cont <= 10; cont++){
    console.log(`${fix} x ${cont} = ${fix * cont}`)
}

var contador = 1
var acumular = 0
while (contador <= 10){
    acumular = acumular + contador
    console.log(acumular)
    contador++
}
