const admin = "theMaster";
const loginTrue = "TheMaster";
const loginFalse = "TheJedi";
const loginAlone = " ";
const loginNull = null;

// Tive de separar os If e else, trantando-os como prompts dados pelo usuário
// poderia também trabalhar em uma página HTML, mas preferi operar somente com o JS
if( admin === "theMaster"){
    console.log("Seja bem-vindo(a)!");
}


if ( loginAlone === " " || loginAlone === null){
    console.log("Senha cancelada pelo usuário. Tente Novamente ");
} else {
    console.log("Senha incorreta")
}


if (loginTrue !== loginFalse){
    console.log("Senha Incorreta. Tente novamente!")
}