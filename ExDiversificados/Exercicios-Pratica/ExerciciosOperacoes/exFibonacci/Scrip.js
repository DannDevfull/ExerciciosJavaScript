function clicar(){
    let Fibo = document.getElementById("SeqFib")
    let t1 = 0
    let t2 = 1
    Fibo.innerText = t1
    Fibo.innerText += t2
    for (contadora = 1; contadora <= 14; contadora++){
        let res = t2 + t1
        Fibo.innerText += res
        let aux = t2
        t2 = res
        t1 = aux
       
    }
}