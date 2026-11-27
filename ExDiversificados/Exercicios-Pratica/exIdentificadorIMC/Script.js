function Clicar(){
    const pesoDigito = document.getElementById('txtn1')
    const alt = window.document.getElementById('txt2')
    const peso = Number(pesoDigito.value)
    const altura = Number(alt.value)
    let res = document.querySelector('#res')
    let imc = peso / altura**2

    if (imc < 18.5){
        res.innerHTML = `IMC: ${imc.toFixed(2)}`
        res.innerHTML += `<p> CLASSIFICAÇÃO: Magreza. </p>`
        res.innerHTML += `<p> Procure um nutricionista! </p>`
    }else{
        if(imc <=24.9){
            res.innerHTML = `IMC: ${imc.toFixed(2)}`
            res.innerHTML += `<p> CLASSIFICAÇÃO: Peso Normal </p>`
            res.innerHTML += `<p> Continue cuidando de sua saúde! </p>`
        }else if (imc <= 29.9){
            res.innerHTML = `IMC: ${imc.toFixed(2)}`
            res.innerHTML += `<p> CLASSIFICAÇÃO: Sobrepeso </p>`
            res.innerHTML += `<p> Procure um nutricionista! </p>`
        }else if (imc <= 39.9){
            res.innerHTML = `IMC: ${imc.toFixed(2)}`
            res.innerHTML += `<p> CLASSIFICAÇÃO: Obesidade </p>`
            res.innerHTML += `<p> Procure um nutriciosnista! </p>`
        }else{
            res.innerHTML = `IMC: ${imc.toFixed(2)}`
            res.innerHTML += `<p> CLASSIFICAÇÃO: Obesidade Severa </p>`
        }
    }



}