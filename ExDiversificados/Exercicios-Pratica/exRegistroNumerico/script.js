

let adic = document.getElementById("add");
let num = document.getElementById("txt1");
let selec = document.getElementById("registro");
let fim = document.getElementById("finalizar");
let Resultado = document.getElementById("res");
let valores = [];


function isNumero(num){
    if(Number(num) >= 1 && Number(num) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(num, v){
    if(v.indexOf(Number(num)) != -1){
        return true
    }else{
        return false
    }
}
   
// Já estamos pesando na nova função, passando os argumentos para esse If (isNumero e inLista)
function adicionar(){
    // Vamos analisar o valor dentro desses argumentos para ver se são números entre 1 e 100
    if(isNumero(num.value) && !inLista(num.value, valores)){

        let item = document.createElement('option');
        let Num = Number(num.value);
        valores.push(Num);
        item.text = Num;
        selec.appendChild(item)

        Resultado.innerHTML = ''

    }else{
        alert('Valor Inválido ou já encontrado na lista')
    }

    // Essas duas linhas, quando clico em adicionar:
    // apagam o valor (num.value='');
    // Deixa o cursor posiciondo no input (num.focus())
    num.value = ''
    num.focus()
    
}
function Consulta(){

    if(valores.length == 0){
        alert('Por favor, adicione alguns números')
    }else{
        let Total = valores.length
        let Soma = 0;
        let Media = 0;
        let Maior = 0;
        let Menor = 0;
       

        for( let Contador = 0; Contador < valores.length; Contador++){
            Soma = Soma + valores[Contador];
    
            if ( valores[Contador] > Maior){
                Maior = valores[Contador];
            }
    
            if(valores[0] < valores[Contador]){
                Menor = valores[0];
            }else{
                Menor = valores[Contador]
            }
        }
        Media = Soma / Total;
        Resultado.innerHTML = `Ao todo, temos ${Total} números cadastrados <br>`;
        Resultado.innerHTML += `A soma dos valores do array é ${Soma} <br>`;
        Resultado.innerHTML += `A média dos valores alocados dentro do Array é ${Media} <br>`;
        Resultado.innerHTML += `O maior número dentro desse Array é ${Maior} <br>`;
        Resultado.innerHTML += `O menor Número dentro desse Array é ${Menor} <br>`;
        
    }


}


