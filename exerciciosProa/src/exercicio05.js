// Exercício 5: Maior de dois
function maiorDeDois (valor1, valor2) {
        let maior = 0;

            if(valor1 > valor2){
                maior = valor1;
                return `O valor ${maior} é maior que o ${valor2}`;
            }else if (valor1 < valor2){
                maior = valor2;
                return `O valor ${maior} é maior que o ${valor1}`;
            }else if (valor1 == valor2){
                return `Os valores informados, ${valor1} e ${valor2} são iguais`;
            }
        
}

    const valor1 = parseInt(prompt("Me informe o primeiro valor:"));
    const valor2 = parseInt(prompt("Me informe o segundo valor:"));

    console.log(maiorDeDois(valor1, valor2));

    
