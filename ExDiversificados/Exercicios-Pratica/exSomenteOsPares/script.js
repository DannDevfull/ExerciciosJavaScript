/*function Clicar(){
    var num = document.getElementById("txtn2")
    var n1 = Number(num.value)
    var res = document.querySelector("div#res")
    if(n1 % 2 == 0) {
        res.innerHTML = `O número digitado: ${n1} é PAR!`
    } else{
        res.innerHTML = `O número digitado: ${n1} é ÍMPAR!`
    }
}*/
function Clicar(){
    var num = window.document.getElementById("txtn2")
    var n1 = Number(num.value)
    var res = document.querySelector('div#res')
    var result = n1 % 2 == 0?"PAR":"ÍMPAR"
    res.innerHTML = result
    
}


/*for(var c = 1; c <= 20; c++){
    if (c % 2 == 0) {
        console.log("O número digitado" + c + " é PAR ")
    } else{
        console.log(`O número digitado: ${ c } é ÍMPAR`)
    }
}*/