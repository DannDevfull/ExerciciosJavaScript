let NomeOficial = "ECMAScript";

if (NomeOficial == "ECMAScript"){
    console.log("Você está certo!");
}else{
    console.log("Errado. Estude mais!");
};



// Reescreva essa estrutura condicional com o operador ternário
// let result; 
// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

let result = (12 + 12 == 24) ? "Below" : "Over";
console.log(result);





// Reescreva toda essa estrutura If Else usando múltiplos operadores ternários;

/*
let message; 
if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
} */
let login = "Director"
let message = (login == "Employee") ? "Hello" :
              (login == "Director") ? "Greetings" :
              (login == "") ? "No login" : "";
console.log(message)

