function carregar(){
    var msg = document.getElementById('msg')
    var img= document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
  //  var hora = 22 --> aqui esotu forçando uma hora para testar meu codigo
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >=0 && hora < 12){
        //BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.background = '#645a4365'
    }else{
        if(hora >= 12 && hora < 18){
            //BOA TARDE
            img.src = 'fototarde.png'
            document.body.style.background ='#92571f'
        }else{
            //BOA NOITE
            img.src = 'fotonoite.png'
            document.body.style.background ='#1a1b1b'
        }
    }
}