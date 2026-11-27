function verificar(){
    const data = new Date()
    const ano = data.getFullYear()
    const anoP = document.getElementById('txtn2')
    let res = document.getElementById('res')
    /*esse anoP.value.lenght == 0 vefirifica se o comprimento do conteudo é igual a 0
     */
    if ( anoP.value.length == 0 || anoP.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
         var sex = document.getElementsByName('radsex')
         var idade = ano - Number(anoP.value) // por algum motivo, converta o variável
         var genero = ' '

         var img = document.createElement('img') // criei uma tag
         img.setAttribute('id','foto')
          //Estou criando um elemento e criando uma ID para ela
           // é como se eu fosse la no HTML e fizesse na mão
            // veja lá no HTML da aula passada e faça a comparação

         if(sex[0].checked){
            genero ='Homem'
            if(idade >= 0 && idade <= 10 ){
                //criança
                img.setAttribute('src','Bebe-masculino.png')
            }else if ( idade > 10 && idade <=21 ){
                //Jovem
                img.setAttribute('src','Jovem-masculino.png')
            } else if(idade > 21 && idade <= 50){
                //adulto
                img.setAttribute('src','Adulto-masculino.png')
            }else{
                // idoso
                res.innerHTML = 'Você é está na maioridade.'
            }
         }else if (sex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <= 10 ){
                //criança
                img.setAttribute('src','Bebe-feminino.png')
            }else if ( idade > 10 && idade <=21 ){
                //Jovem
                img.setAttribute('src','Jovem-feminino.png')
            } else if(idade > 21 && idade <= 50){
                //adulto
                img.setAttribute('src','Adulto-feminino.png')
            }else{
                // idosa
                res.innerHTML += '<p>Você está na maioridade.</p>'
            }
         }
         res.style.textAlign = 'center'
         // aprendemos a fazer isso acima com CSS, aqui é em JS.
         res.innerHTML += `<p>Detecamos ${genero} com ${idade} anos</p>`
         res.appendChild(img)
         //ou seja, vou adicionar um img.
         //isso que significa appendChild
    }
    
}