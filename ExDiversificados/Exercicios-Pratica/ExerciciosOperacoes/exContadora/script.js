 /*function Clicar(){
    var num = document.getElementById("txtn2")
    var num2 = document.getElementById("txtn4")
    var num3 = document.getElementById("txtn6")
    var res = document.getElementById("res")
    // agora tratar os dados
    var ini = Number(num.value)
    var fim = Number(num2.value)
    var p = Number(num3.value)
    //estrutura condicional
    if(ini == "") {
        window.alert("[ERRO] Verifique seu código e tente novamente!")
    } else if (fim == ""){
        window.alert("[ERRO] Verifique seu código e tente novamente!")
    } 
    
    if ( ini < fim){
        for (var c = ini; c <= fim; c += p){
            res.innerHTML += `${c} \u{1F449} `
        }
        res.innerHTML +=`\u{1f3c1}`
    } else{
        for(var c = ini; c > fim; c -= p){
            res.innerHTML += `${c} \u{1F449}`
        }
         res.innerHTML +=`\u{1F3C1}`  
    }
     

        
}*/
// o código acima foi feito por mim. Agora veja a resolução

function Clicar(){
 let ini = document.getElementById("txtn2")
 let fim = document.getElementById("txtn4")
 let passo = document.getElementById("txtn6")
 let res = document.getElementById("res")
    
 if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    res.innerHTML = `Impossível contar`
 } else{
    res.innerHTML = 'Contando: <br>'
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0){
        window.alert("Passo Inválido! Considerando PASSO 1")
        p = 1
    }
    if( i < f){
        for(let c = i; c <= f; c += p ){
            res.innerHTML += `${c} \u{1F913} `
        }
    }else{
        for( let c = i; c >= f; c -= p){
            res.innerHTML += `${c} \u{1F913} `
        }
    }
     res.innerHTML +=`\u{1F3C1}`  
 }

}
