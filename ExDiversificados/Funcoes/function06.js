function celsiusParaFahrenheit(number1, number2, number3){
    let Faren = [number1, number2, number3]

    for( let cont = 0; cont < Faren.length; cont++){

        if(Faren[cont] == number1){
            Faren[cont] = (Faren[cont]* 9/5) + 32
            console.log("Passe por aqui", cont)
        } 

        if(Faren[cont] == number2) {
            Faren[cont] = (Faren[cont] * 9/5) + 32
            console.log("Passei por aqui", cont)    
        } 

            if(Faren[cont] == number3){
            Faren[cont] = (Faren[cont] * 9/5) + 32
            console.log("Passei por aqui", cont)
        }
       
         

    }
     return Faren
  
    // if( number1 == 0){
    //     Faren[0] = (number1 * 9/5) + 32
    //     return Faren
    // }

    // if(number2 == 37){
    //     Faren[1] = (number2 * 9/5) + 32
    //     return Faren
    // }

    // if(number3 == 100){
    //     Faren[2] = (number3 * 9/5) + 32
    //     return Faren
    // }

}
console.log(celsiusParaFahrenheit(0, 37, 100))
