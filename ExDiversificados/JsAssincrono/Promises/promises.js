// JavaScript Assíncrono
// Promises
// O futuro status de uma operação e permite registrar o que fazer quando estiver disponível
const consulta = new Promise( (resolve) => {
    setTimeout( () =>  resolve("Manutenção da bicicleta"), 5000);
});

consulta.then( (descricao) =>{
    console.log(descricao);
});
console.log("Aguardando o serviço");



// -------------------------------------------




//Reject

// Quando a consulta de um serviço falha

// Nós entregamos dois parâmetros s essa promessa
// Um para caso a consulta fosse um sucesso e outra para caso falhe
new Promise((resolve, reject) => {
    setTimeout(() =>{ // Esse método agenda uma função para executar depois quando o restante do programa terminar e quando o temporizador chegar ao fim

        const falha = new Error("Não foi possível consultar o serviço");
        // "Error" é o construtor do Js para objetos que descrevem erros
        // Ele cria um objeto e guarda o texto em uma propriedade chamada message
        // essa propriedade é padrão do JS dentro de construtor Error

        reject(falha);
        // É aqui que acontece a mudança de estado
        // O parâmetro recebe o objeto "falha"
    }, 1000);
})

// O .then registra uma função que só será executada caso haja sucesso
// O then devolve uma promessa. Como nossa consulta foi programada para falhar, esse .then é ignorado
// O programa pula para o .catch
.then((descricao) => console.log(descricao))

// O .catch registra uma função que vai reagir a rejeição
.catch((erro) => console.log(erro.message));

console.log("Aguardando o serviço...");



// --------------------------------------------------------

// Finally()

