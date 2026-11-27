function tabuada(){
    let num = document.getElementById("txtn");
    let tab = document.getElementById("seltab");
    if( num.value.length == 0){
        alert("Por favor, digite algum valor para gerarmos a tabuada!");

    }else{
        let n = Number(num.value);
        let c = 1;
        tab.innerHTML = "";
        while (c <= 10){
            let item = document.createElement('option'); // veja o HTML.
             //Ao fazer isso, é como se eu estivesse criando options        diretamente no HTML.
             //Mas aqui estou as criando dinâmicamente 
             item.text  = `${n} x ${c} = ${n*c}`;
             //isso seria como se eu estivesse mechendo dentro dos options no HTML.
            //Mas aqui estou fazendo no JavaScript
            tab.appendChild(item);
            //que seria adicionar um elemento filho
            c++
        };
    };
    


};